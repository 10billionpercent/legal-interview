"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#050816]" : "bg-[#f3f3f5]"
      }`}
    >
      {/* TOGGLE */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
          darkMode
            ? "bg-[#161D31] text-[#FFD54F]"
            : "bg-[#1b1b1b] text-white"
        }`}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <motion.section
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`relative w-full h-screen rounded-[14px] overflow-hidden transition-colors duration-500 ${
          darkMode ? "bg-[#0B1020]" : "bg-[#f3f3f5]"
        }`}
      >
        {/* SIDE BG PILLS */}

        {/* LEFT */}
        <div
          className={`absolute left-[-11.1%] top-[47.6%] w-[15.3%] h-[11.4%] rounded-full transition-colors duration-500 ${
            darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
          }`}
        />

        <div
          className={`absolute left-[-7.6%] top-[64.1%] w-[27.2%] h-[11.4%] rounded-full transition-colors duration-500 ${
            darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
          }`}
        />

        <div
          className={`absolute left-[-7.4%] top-[79%] w-[31.9%] h-[11.4%] rounded-full transition-colors duration-500 ${
            darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
          }`}
        />

        {/* RIGHT */}
        <div
          className={`absolute right-[-11.1%] top-[15.5%] w-[29.1%] h-[11.4%] rounded-full transition-colors duration-500 ${
            darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
          }`}
        />

        <div
          className={`absolute right-[-9.4%] top-[30.4%] w-[29.3%] h-[11.4%] rounded-full transition-colors duration-500 ${
            darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
          }`}
        />

        <div
          className={`absolute right-[-6.9%] top-[45.4%] w-[23.6%] h-[11.4%] rounded-full transition-colors duration-500 ${
            darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
          }`}
        />

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="absolute left-[10.4%] top-[6.6%] w-[58%] sm:w-auto"
        >
          <h3
            className={`font-light tracking-[-0.06em] leading-[0.95] text-[clamp(2rem,6.8vw,74px)] transition-colors duration-500 ${
              darkMode ? "text-[#A4A6E8]" : "text-[#7574A8]"
            }`}
          >
            A single platform to
            <br />
            <span className="font-semibold">manage</span> every part of
            <br />
            your <span className="font-semibold">legal work</span>
          </h3>

          <p
            className={`mt-[7%] text-[clamp(0.7rem,1.55vw,17px)] leading-[1.4] max-w-[430px] transition-colors duration-500 ${
              darkMode ? "text-[#5E72FF]" : "text-[#3C4BFF]"
            }`}
          >
            <span className="hidden sm:inline">
              Track matters, coordinate schedules, manage
              <br />
              clients, centralize documents, and handle
              <br />
              communication – all in one system.
            </span>

            <span className="sm:hidden">
              Track matters, coordinate schedules, manage clients,
              centralize documents, and handle communication – all in
              one system.
            </span>
          </p>
        </motion.div>

        {/* BILLING */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
            rotate: [10, 10, 10],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 },
            x: { duration: 0.8, delay: 0.3 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute right-[27%] top-[42.8%]"
        >
          <div className="rotate-[10deg] h-[clamp(42px,6.8vw,74px)] pl-[48px] pr-[140px] rounded-full bg-[#3345FF] flex items-center justify-start gap-[clamp(8px,1.4vw,16px)] shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
            <div className="w-[clamp(24px,4vw,44px)] h-[clamp(24px,4vw,44px)] rounded-full border-2 border-white flex items-center justify-center text-white text-[clamp(12px,2vw,22px)]">
              $
            </div>

            <span className="text-white text-[clamp(12px,2vw,22px)] font-semibold tracking-[-0.5px]">
              Billing
            </span>
          </div>
        </motion.div>

        {/* MATTERS */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -8, 0],
            rotate: [-10, -10, -10],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.45 },
            x: { duration: 0.8, delay: 0.45 },
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute left-[28.1%] top-[62.2%]"
        >
          <div className="rotate-[-10deg] h-[clamp(42px,6.8vw,74px)] pl-[48px] pr-[110px] rounded-full bg-[#E67D28] flex items-center justify-start gap-[clamp(8px,1.4vw,16px)] shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
            <div className="w-[clamp(22px,3.7vw,40px)] h-[clamp(22px,3.7vw,40px)] rounded-full border-2 border-white flex items-center justify-center text-white text-[clamp(10px,1.7vw,18px)]">
              ◇
            </div>

            <span className="text-white text-[clamp(12px,1.85vw,20px)] font-semibold">
              Matters
            </span>
          </div>
        </motion.div>

        {/* MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute left-[46.8%] top-[62.2%] hidden sm:block"
        >
          <div className="bg-[#A7A8ED] h-[clamp(42px,6.8vw,72px)] rounded-full flex items-center pl-[clamp(10px,1.8vw,20px)] pr-[clamp(16px,2.5vw,32px)] gap-[clamp(8px,1.4vw,16px)] shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
            <div className="w-[4px] h-[58%] rounded-full bg-[#F07B2D]" />

            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-[clamp(28px,4.4vw,48px)] h-[clamp(28px,4.4vw,48px)] rounded-full border-2 border-white object-cover"
            />

            <div className="leading-tight">
              <p className="text-[#21212c] text-[clamp(8px,1.4vw,15px)] font-semibold">
                John Doe - Portal
              </p>

              <p className="text-[#21212c] text-[clamp(6px,1.1vw,12px)]">
                Hey! Could you please review a
                <br />
                document for me?
              </p>

              <p className="text-[#21212c] text-[clamp(5px,1vw,11px)] mt-[2px]">
                MAT-2233 · 2 h ago
              </p>
            </div>
          </div>
        </motion.div>

        {/* TASKS */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{
            opacity: 1,
            y: [0, -9, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.8 },
            y: {
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute left-[33.8%] bottom-[12%]"
        >
          <div className="h-[clamp(42px,6.8vw,72px)] pl-[48px] pr-[120px] rounded-full bg-[#32214C] flex items-center justify-start gap-[clamp(8px,1.4vw,16px)] shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
            <span className="text-[#FF922D] text-[clamp(14px,2.2vw,24px)]">
              ✓
            </span>

            <span className="text-[#FF922D] text-[clamp(12px,1.85vw,20px)] font-semibold">
              Tasks
            </span>
          </div>
        </motion.div>

        {/* DOCUMENTS */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0],
            rotate: [-8, -8, -8],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1 },
            x: { duration: 0.8, delay: 1 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute right-[15.1%] bottom-[18.1%]"
        >
          <div className="rotate-[-8deg] h-[clamp(42px,6.8vw,72px)] pl-[48px] pr-[150px] rounded-full bg-[#2F214B] flex items-center justify-start gap-[clamp(8px,1.4vw,16px)] shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
            <div className="w-[clamp(22px,3.7vw,40px)] h-[clamp(22px,3.7vw,40px)] rounded-full border-2 border-[#FF922D] flex items-center justify-center text-[#FF922D] text-[clamp(10px,1.7vw,18px)]">
              ▣
            </div>

            <span className="text-[#FF922D] text-[clamp(12px,1.85vw,20px)] font-semibold">
              Documents
            </span>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}