import { useQuizStore } from "../store/store";
import {
  Lightbulb,
  ChevronRight,
  RotateCcw,
  CheckCircle,
  XCircle,
  ChevronLeft,
  Home,
} from "lucide-react";

import { Button } from "@heroui/react";
import { ProgressBar } from "@heroui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const {
    questions,
    currentIndex,
    score,
    answerStates,
    showHint,
    isFinished,
    selectedAnswer,
    isAnswerChecked,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    toggleHint,
    restartQuiz,
  } = useQuizStore();
  const [showResults, setShowResults] = useState(false);
  const currentQ = questions[currentIndex];
  const ProgressBarValue = ((currentIndex + 1) / questions.length) * 100;
  const showExplanation =
    isAnswerChecked && selectedAnswer !== currentQ.correctAnswer;
  const navigate = useNavigate();
  const clayCard = "shadow-clay-card dark:shadow-clay-card-dark";

  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center w-full transition-colors duration-300">
        <div className="w-full sm:max-w-xl lg:max-w-3xl xl:max-w-4xl p-8 sm:p-10 lg:p-14 text-center flex flex-col items-center clay-card mx-4 sm:mx-6 lg:mx-8">
          <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-green-500 mb-5 drop-shadow-md" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 dark:text-white mb-2">
            Exam Complete!
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-semibold">
            You scored {score} out of {questions.length}
          </p>

          <div className="space-y-4 w-full">
            <Button
              onPress={restartQuiz}
              className="h-13 sm:h-14 lg:h-16 w-full font-black tracking-wide active:scale-95 transition-[transform,box-shadow,background-color] duration-[250ms,250ms,200ms] ease-out clay-button-action text-base lg:text-lg"
            >
              <RotateCcw className="w-5 h-5 lg:w-6 lg:h-6" /> Try Again
            </Button>

            <Button
              onPress={() => setShowResults((prev) => !prev)}
              className="h-13 sm:h-14 lg:h-16 w-full font-black tracking-wide active:scale-95 transition-[transform,box-shadow,background-color] duration-[250ms,250ms,200ms] ease-out clay-button-action text-base lg:text-lg"
            >
              {showResults ? "Hide Results" : "Show Results"}
            </Button>

            {showResults &&
              questions.map((question, index) => {
                const selectedResult = answerStates[index]?.selectedAnswer;
                const isCorrect = selectedResult === question.correctAnswer;

                return (
                  <div
                    key={question.id ?? index}
                    className="clay-element p-4 sm:p-5 lg:p-6 text-left"
                  >
                    <h1 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-3">
                      {question.question}
                    </h1>

                    {isCorrect ? (
                      <p className="clay-correct-answer">
                        Correct: {question.correctAnswer}
                      </p>
                    ) : (
                      <div className="space-y-3">
                        <p className="clay-wrong-answer">
                          Wrong Answer: {selectedResult ?? "No answer selected"}
                        </p>
                        <p className="clay-correct-answer">
                          Correct Answer: {question.correctAnswer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-3 sm:px-6 py-6 font-sans transition-colors duration-300 w-full">
      {questions?.length > 0 ? (
        <div className="w-full max-w-full sm:max-w-xl lg:max-w-2xl p-5 sm:p-8 lg:p-10 flex flex-col gap-5 sm:gap-6 clay-card">
          <div className="flex justify-between items-center">
            <span className="text-[10px] sm:text-xs font-black text-gray-500 dark:text-gray-400 tracking-widest uppercase">
              Q {currentIndex + 1} / {questions.length}
            </span>
            <span className="text-[10px] sm:text-xs font-black text-violet-500 tracking-widest uppercase bg-violet-100 dark:bg-violet-500/20 px-3 py-1 rounded-full">
              SCORE: {score}
            </span>
          </div>

          <ProgressBar value={ProgressBarValue}>
            <ProgressBar.Track className="bg-purple-100 dark:bg-violet-200">
              <ProgressBar.Fill className="bg-purple-500" />
            </ProgressBar.Track>
          </ProgressBar>

          <div className="w-full h-px bg-gray-300/50 dark:bg-gray-700/50 shadow-[0_1px_0_rgba(255,255,255,0.8)] dark:shadow-none" />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white leading-relaxed">
            {currentQ.question}
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {currentQ.options.map((option: string, index: number) => {
              let feedbackColor = "text-gray-700 dark:text-gray-200";
              let feedbackBorder = "border-transparent";
              let Icon = ChevronRight;
              let iconColor =
                "text-violet-500 opacity-0 group-hover:opacity-100";

              if (isAnswerChecked) {
                if (option === currentQ.correctAnswer) {
                  feedbackColor =
                    "text-green-700 dark:text-green-400 font-bold";
                  feedbackBorder = "border-green-500 dark:border-green-400";
                  Icon = CheckCircle;
                  iconColor = "text-green-500 opacity-100";
                } else if (option === selectedAnswer) {
                  feedbackColor = "text-red-700 dark:text-red-400 font-bold";
                  feedbackBorder = "border-red-500 dark:border-red-400";
                  Icon = XCircle;
                  iconColor = "text-red-500 opacity-100";
                }
              }

              return (
                <Button
                  key={index}
                  isDisabled={isAnswerChecked}
                  onPress={() => answerQuestion(option)}
                  className={[
                    "h-auto w-full p-4 sm:p-5 justify-between group border-2 bg-transparent",
                    "transition-[transform,box-shadow,border-color,background-color]",
                    "duration-[250ms,250ms,200ms,200ms]",
                    "ease-out",
                    "hover:scale-[1.01] active:scale-[0.99]",
                    "min-h",
                    "clay-element",
                    feedbackBorder,
                  ].join(" ")}
                >
                  <span
                    className={`text-sm sm:text-base font-semibold whitespace-normal text-left ${feedbackColor}`}
                  >
                    {option}
                  </span>
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 ml-3 transition-opacity duration-200 ease-out ${iconColor}`}
                  />
                </Button>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 mt-1">
            {isAnswerChecked ? (
              <Button
                onPress={nextQuestion}
                className="h-13 sm:h-14 w-full font-black tracking-wide active:scale-95 transition-[transform,box-shadow,background-color] duration-[250ms,250ms,200ms] ease-out clay-button-action"
              >
                Next Question <ChevronRight className="w-5 h-5" />
              </Button>
            ) : (
              <Button
                variant="ghost"
                onPress={toggleHint}
                className="self-start text-amber-500 font-bold hover:text-amber-600 text-sm uppercase tracking-wider transition-colors duration-200"
              >
                <Lightbulb className="w-5 h-5" />{" "}
                {showHint ? "Hide Hint" : "Need a hint?"}
              </Button>
            )}

            {showHint && !isAnswerChecked && (
              <div className="p-4 bg-amber-50 dark:bg-amber-500/10 rounded-2xl border border-amber-200 dark:border-amber-500/30 text-amber-800 dark:text-amber-200 text-sm font-medium leading-relaxed transition-colors duration-200">
                {currentQ.hint}
              </div>
            )}

            <div className="mt-4 self-end flex gap-3">
              <Button
                onClick={previousQuestion}
                className="w-12 h-12 sm:w-14 sm:h-14 min-w-0 flex items-center justify-center rounded-2xl dark:shadow-clay-elem-dark"
                isDisabled={currentIndex === 0}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                onClick={nextQuestion}
                className="w-12 h-12 sm:w-14 sm:h-14 min-w-0 flex items-center justify-center rounded-2xl dark:shadow-clay-elem-dark"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            <div>
              {showExplanation && (
                <div className="clay-element p-6 bg-red-50 dark:bg-red-500/10 border-2 border-red-300 dark:border-red-500/40">
                  <p className="text-base sm:text-lg font-semibold text-red-700 dark:text-red-300">
                    {currentQ.wrongAnswerExplanation}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* <Button
            variant="ghost"
            className="underline"
            onClick={viewAnswers}
            fullWidth
          >
            See Results
          </Button> */}
        </div>
      ) : (
        <div
          className={`bg-[#eef2f6] dark:bg-[#111111] rounded-[40px] border border-white/60 dark:border-white/5 p-10 w-full max-w-xl flex flex-col items-center gap-8 ${clayCard}`}
        >
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-3xl font-black text-gray-800 dark:text-white text-center drop-shadow-sm">
              No questions available.
            </h1>
            <p className="text-xs font-black tracking-widest uppercase text-violet-400">
              Please try again later
            </p>
          </div>

          <div className="w-full h-px bg-gray-300/50 dark:bg-gray-800/80 shadow-[0_1px_0_rgba(255,255,255,0.8)] dark:shadow-none"></div>

          <div className="w-full flex gap-4 items-center mt-2">
            <Button
              onClick={() => navigate("/")}
              fullWidth
              variant="primary"
              className="shadow-clay-btn dark:shadow-clay-btn-dark"
            >
              <Home className="w-5 h-5" />
              Home page
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
