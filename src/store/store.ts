import { create } from "zustand";
import { mockQuestions } from "../data";
import type { Question } from "../types/questions";

const STORAGE_KEY = "quiz-progress";

interface QuestionState {
  selectedAnswer: string | null;
  isAnswerChecked: boolean;
}

interface QuizState {
  questions: Question[];
  currentIndex: number;
  score: number;
  showHint: boolean;
  isFinished: boolean;
  selectedAnswer: string | null;
  isAnswerChecked: boolean;
  answerStates: Record<number, QuestionState>;
  answerQuestion: (selectedOption: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  toggleHint: () => void;
  restartQuiz: () => void;
  setCurrentIndex: (index: number) => void;
   viewAnswers: () => void;
}

interface PersistedState {
  currentIndex: number;
  score: number;
  showHint: boolean;
  isFinished: boolean;
  answerStates: Record<number, QuestionState>;
}

// Load saved progress from localStorage
const loadSavedProgress = (): PersistedState | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error("Failed to load quiz progress:", error);
    return null;
  }
};

// Save progress to localStorage
const saveProgress = (state: PersistedState) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save quiz progress:", error);
  }
};

export const useQuizStore = create<QuizState>((set, get) => {
  const savedProgress = loadSavedProgress();

  return {
    questions: mockQuestions,
    currentIndex: savedProgress?.currentIndex ?? 0,
    score: savedProgress?.score ?? 0,
    showHint: savedProgress?.showHint ?? false,
    isFinished: savedProgress?.isFinished ?? false,
    answerStates: savedProgress?.answerStates ?? {},
    selectedAnswer:
      savedProgress?.answerStates?.[savedProgress?.currentIndex ?? 0]
        ?.selectedAnswer ?? null,
    isAnswerChecked:
      savedProgress?.answerStates?.[savedProgress?.currentIndex ?? 0]
        ?.isAnswerChecked ?? false,

    answerQuestion: (selectedOption: string) => {
      const { questions, currentIndex, score, answerStates } = get();
      const currentQuestion = questions[currentIndex];
      const isCorrect = selectedOption === currentQuestion.correctAnswer;

      const previousAnswer = answerStates[currentIndex];
      let scoreChange = 0;

      if (!previousAnswer) {
        // First time answering this question
        scoreChange = isCorrect ? 1 : 0;
      } else if (previousAnswer.selectedAnswer !== selectedOption) {
        // Changing the answer - adjust score if needed
        const wasPreviousCorrect =
          previousAnswer.selectedAnswer === currentQuestion.correctAnswer;
        const isNewCorrect = isCorrect;
        if (wasPreviousCorrect && !isNewCorrect) scoreChange = -1;
        if (!wasPreviousCorrect && isNewCorrect) scoreChange = 1;
      }

      const updatedAnswerStates = {
        ...answerStates,
        [currentIndex]: {
          selectedAnswer: selectedOption,
          isAnswerChecked: true,
        },
      };

      set({
        selectedAnswer: selectedOption,
        isAnswerChecked: true,
        score: score + scoreChange,
        showHint: false,
        answerStates: updatedAnswerStates,
      });
      saveProgress({
        currentIndex,
        score: score + scoreChange,
        showHint: false,
        isFinished: false,
        answerStates: updatedAnswerStates,
      });
    },
    viewAnswers: () => {
      set({
        isFinished: false,
      });
    },
    // This handles moving forward
    nextQuestion: () => {
      const { questions, currentIndex, answerStates } = get();
      if (currentIndex + 1 < questions.length) {
        const nextIndex = currentIndex + 1;
        const nextQuestionState = answerStates[nextIndex] || {
          selectedAnswer: null,
          isAnswerChecked: false,
        };
        set({
          currentIndex: nextIndex,
          selectedAnswer: nextQuestionState.selectedAnswer,
          isAnswerChecked: nextQuestionState.isAnswerChecked,
        });
        saveProgress({
          currentIndex: nextIndex,
          score: get().score,
          showHint: false,
          isFinished: false,
          answerStates,
        });
      } else {
        set({ isFinished: true });
        saveProgress({
          currentIndex,
          score: get().score,
          showHint: false,
          isFinished: true,
          answerStates,
        });
      }
    },
    previousQuestion: () => {
      const { currentIndex, answerStates } = get();
      if (currentIndex > 0) {
        const prevIndex = currentIndex - 1;
        const prevQuestionState = answerStates[prevIndex] || {
          selectedAnswer: null,
          isAnswerChecked: false,
        };
        set({
          currentIndex: prevIndex,
          selectedAnswer: prevQuestionState.selectedAnswer,
          isAnswerChecked: prevQuestionState.isAnswerChecked,
        });
        saveProgress({
          currentIndex: prevIndex,
          score: get().score,
          showHint: false,
          isFinished: false,
          answerStates,
        });
      }
    },

    toggleHint: () => {
      set((state) => ({ showHint: !state.showHint }));
      saveProgress({
        currentIndex: get().currentIndex,
        score: get().score,
        showHint: get().showHint,
        isFinished: get().isFinished,
        answerStates: get().answerStates,
      });
    },

    restartQuiz: () => {
      set({
        currentIndex: 0,
        score: 0,
        isFinished: false,
        showHint: false,
        selectedAnswer: null,
        isAnswerChecked: false,
        answerStates: {},
      });
      localStorage.removeItem(STORAGE_KEY);
    },

    setCurrentIndex: (index: number) => {
      const { answerStates } = get();
      const questionState = answerStates[index] || {
        selectedAnswer: null,
        isAnswerChecked: false,
      };
      set({
        currentIndex: index,
        selectedAnswer: questionState.selectedAnswer,
        isAnswerChecked: questionState.isAnswerChecked,
      });
      saveProgress({
        currentIndex: index,
        score: get().score,
        showHint: false,
        isFinished: get().isFinished,
        answerStates,
      });
    },
  };
});
