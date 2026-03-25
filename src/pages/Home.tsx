import { Brain,  Play, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState(
    "Information Retrieval",
  );
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleLiked = () => setLiked((prev) => !prev);

  // --- OLED Claymorphism Shadows ---
  // Using the native Tailwind v4 shadows we defined in the CSS.
  // We specify the light variable and the dark variable using native syntax.
  const clayCard = "shadow-clay-card dark:shadow-clay-card-dark";
  const clayElement = "shadow-clay-elem dark:shadow-clay-elem-dark";
  const clayButton = "shadow-clay-btn dark:shadow-clay-btn-dark";

  return (
    // Replaced blue background with off-white (light) and strict OLED black (dark).
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 font-sans transition-colors duration-300">
      {/* Main Hero Card - High Contrast OLED styles added */}
      <div
        className={`bg-[#eef2f6] dark:bg-[#111111] rounded-[40px] border border-white/60 dark:border-white/5 p-10 w-full max-w-xl flex flex-col items-center gap-8 ${clayCard}`}
      >
        {/* Header - QuizMe Title */}
        <div className="flex flex-col items-center gap-3">
  
          <h1 className="text-5xl font-black text-gray-800 dark:text-white text-center drop-shadow-sm">
            QuizMe
          </h1>
          <p className="text-xs font-black tracking-widest uppercase text-violet-400">
            Challenge Your Mind
          </p>
        </div>

        {/* Divider - Made darker for OLED style */}
        <div className="w-full h-px bg-gray-300/50 dark:bg-gray-800/80 shadow-[0_1px_0_rgba(255,255,255,0.8)] dark:shadow-none"></div>

        {/* Subject Section */}
        <div className="w-full flex flex-col items-center gap-4">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
            Choose Your Subject
          </p>

          {/* Subject Selection Pill */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`bg-[#eef2f6] dark:bg-[#111111] rounded-2xl px-6 py-4 w-full flex items-center justify-center gap-3 cursor-pointer border border-white/50 dark:border-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ${clayElement}`}
          >
            <Brain size={20} className="text-violet-400" />
            <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
              {selectedSubject}
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300/50 dark:bg-gray-800/80 shadow-[0_1px_0_rgba(255,255,255,0.8)] dark:shadow-none"></div>

        {/* Action Button Row */}
        <div className="w-full flex gap-4 items-center mt-2">
          {/* Start Button - Violet Accent */}
          <button
            onClick={() => navigate("/quiz")}
            className={`flex-grow h-14 bg-violet-500 rounded-2xl text-white font-black text-sm tracking-wide flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all duration-200 ${clayButton}`}
          >
            <Play size={18} fill="currentColor" />
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
