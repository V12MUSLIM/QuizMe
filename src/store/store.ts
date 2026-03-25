import { create } from "zustand";
import { mockQuestions } from "../data";
import type { Question } from "../types/questions";
interface QuizState {
  questions: Question[];
  currentIndex: number;
  score: number;
  showHint: boolean;
  isFinished: boolean;
  selectedAnswer: string | null;
  isAnswerChecked: boolean; 
  answerQuestion: (selectedOption: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void; 
  toggleHint: () => void;
  restartQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  questions: mockQuestions,
  currentIndex: 0,
  score: 0,
  showHint: false,
  isFinished: false,
  selectedAnswer: null,
  isAnswerChecked: false,

  // Now this just CHECKS the answer, it doesn't advance
  answerQuestion: (selectedOption: string) => {
    const { questions, currentIndex, score, isAnswerChecked } = get();
    if (isAnswerChecked) return; // Prevent clicking again

    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    set({
      selectedAnswer: selectedOption,
      isAnswerChecked: true,
      score: isCorrect ? score + 1 : score,
      showHint: false,
    });
  },

  // This handles moving forward
  nextQuestion: () => {
    const { questions, currentIndex } = get();
    if (currentIndex + 1 < questions.length) {
      set({
        currentIndex: currentIndex + 1,
        selectedAnswer: null,
        isAnswerChecked: false,
      });
    } else {
      set({ isFinished: true });
    }
  },
  previousQuestion: () => {
    set((state) => ({
      currentIndex: Math.max(0, state.currentIndex - 1),
    }));
  },

  toggleHint: () => set((state) => ({ showHint: !state.showHint })),

  restartQuiz: () =>
    set({
      currentIndex: 0,
      score: 0,
      isFinished: false,
      showHint: false,
      selectedAnswer: null,
      isAnswerChecked: false,
    }),
}));
