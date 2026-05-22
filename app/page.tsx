"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { ReceiptText, Scale, CheckCheck, FileText } from "lucide-react";

import FloatingCard from "./components/FloatingCard";
import MessageCard from "./components/MessageCard";
import BackgroundPill from "./components/BackgroundPill";
import ThemeToggle from "./components/ThemeToggle";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#050816]" : "bg-[#f3f3f5]"
      }`}
    >
      <ThemeToggle darkMode={darkMode} toggle={() => setDarkMode(!darkMode)} />

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
        {/* BG PILLS */}

        <BackgroundPill
          darkMode={darkMode}
          className="left-[-11.1%] top-[47.6%] w-[20.3%] h-[11.4%]"
          rotate="rotate-[-10deg]"
        />

        <BackgroundPill
          darkMode={darkMode}
          className="left-[-7.6%] top-[64.1%] w-[27.2%] h-[11.4%]"
        />

        <BackgroundPill
          darkMode={darkMode}
          className="left-[-7.4%] top-[79%] w-[31.9%] h-[11.4%]"
        />

        <BackgroundPill
          darkMode={darkMode}
          className="right-[-11.1%] top-[15.5%] w-[29.1%] h-[11.4%]"
          rotate="rotate-[5deg]"
        />

        <BackgroundPill
          darkMode={darkMode}
          className="right-[-9.4%] top-[30.4%] w-[29.3%] h-[11.4%]"
        />

        <BackgroundPill
          darkMode={darkMode}
          className="right-[-6.9%] top-[45.4%] w-[23.6%] h-[11.4%]"
        />

        {/* TEXT */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="absolute left-[10.4%] top-[6.6%] w-[58%]"
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
            className={`mt-[7%] text-[17px] leading-[1.4] max-w-[430px] transition-colors duration-500 ${
              darkMode ? "text-[#5E72FF]" : "text-[#3C4BFF]"
            }`}
          >
            Track matters, coordinate schedules, manage
            <br />
            clients, centralize documents, and handle
            <br />
            communication – all in one system.
          </p>
        </motion.div>

        {/* FLOATING CARDS */}

        <FloatingCard
          label="Billing"
          icon={ReceiptText}
          bg="#3345FF"
          text="#ffffff"
          rotate="rotate-[10deg]"
          className="absolute right-[22%] top-[42.8%]"
          iconClassName="text-white"
        />

        <FloatingCard
          label="Matters"
          icon={Scale}
          bg="#E67D28"
          text="#ffffff"
          rotate="rotate-[-10deg]"
          className="absolute left-[21.1%] top-[62.2%]"
          iconClassName="text-white"
          floatY={8}
        />

        <MessageCard />

        <FloatingCard
          label="Tasks"
          icon={CheckCheck}
          bg="#32214C"
          text="#FF922D"
          rotate=""
          className="absolute left-[33.8%] bottom-[12%]"
          iconClassName="text-[#FF922D]"
          floatY={9}
        />

        <FloatingCard
          label="Documents"
          icon={FileText}
          bg="#2F214B"
          text="#FF922D"
          rotate="rotate-[-8deg]"
          className="absolute right-[3.1%] bottom-[18.1%]"
          iconClassName="text-[#FF922D]"
          floatY={12}
        />
      </motion.section>
    </main>
  );
}
