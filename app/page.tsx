"use client";

import { useState } from "react";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-[#050816]" : "bg-[#f3f3f5]"
      }`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-6 right-6 z-50 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          darkMode
            ? "bg-white text-black"
            : "bg-[#1b1b1b] text-white"
        }`}
      >
        {darkMode ? "Light" : "Dark"}
      </button>

      <section
        className={`relative w-full h-screen rounded-[14px] overflow-hidden transition-colors duration-300 ${
          darkMode ? "bg-[#0B1020]" : "bg-[#f3f3f5]"
        }`}
      >
        {/* SIDE BG PILLS */}

        {/* LEFT */}
        <div
          className={`absolute left-[-11.1%] top-[47.6%] w-[15.3%] h-[11.4%] rounded-full transition-colors duration-300 ${
            darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
          }`}
        />

        <div
          className={`absolute left-[-7.6%] top-[64.1%] w-[27.2%] h-[11.4%] rounded-full transition-colors duration-300 ${
            darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
          }`}
        />

        <div
          className={`absolute left-[-7.4%] top-[79%] w-[31.9%] h-[11.4%] rounded-full transition-colors duration-300 ${
            darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
          }`}
        />

        {/* RIGHT */}
        <div
          className={`absolute right-[-11.1%] top-[15.5%] w-[29.1%] h-[11.4%] rounded-full transition-colors duration-300 ${
            darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
          }`}
        />

        <div
          className={`absolute right-[-9.4%] top-[30.4%] w-[29.3%] h-[11.4%] rounded-full transition-colors duration-300 ${
            darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
          }`}
        />

        <div
          className={`absolute right-[-6.9%] top-[45.4%] w-[23.6%] h-[11.4%] rounded-full transition-colors duration-300 ${
            darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
          }`}
        />

        {/* TEXT */}
        <div className="absolute left-[10.4%] top-[6.6%] w-[58%] sm:w-auto">
          <h3
            className={`font-light tracking-[-0.06em] leading-[0.95] text-[clamp(2rem,6.8vw,74px)] transition-colors duration-300 ${
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
            className={`mt-[7%] text-[clamp(0.7rem,1.55vw,17px)] leading-[1.4] max-w-[430px] transition-colors duration-300 ${
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
        </div>

        {/* BILLING */}
        <div className="absolute right-[22%] top-[42.8%] rotate-[10deg]">
          <div className="h-[clamp(42px,6.8vw,74px)] pl-[48px] pr-[140px] rounded-full bg-[#3345FF] flex items-center justify-start gap-[clamp(8px,1.4vw,16px)] shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
            <div className="w-[clamp(24px,4vw,44px)] h-[clamp(24px,4vw,44px)] rounded-full border-2 border-white flex items-center justify-center text-white text-[clamp(12px,2vw,22px)]">
              $
            </div>

            <span className="text-white text-[clamp(12px,2vw,22px)] font-semibold tracking-[-0.5px]">
              Billing
            </span>
          </div>
        </div>

        {/* MATTERS */}
        <div className="absolute left-[21.1%] top-[62.2%] rotate-[-10deg]">
          <div className="h-[clamp(42px,6.8vw,74px)] pl-[48px] pr-[110px] rounded-full bg-[#E67D28] flex items-center justify-start gap-[clamp(8px,1.4vw,16px)] shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
            <div className="w-[clamp(22px,3.7vw,40px)] h-[clamp(22px,3.7vw,40px)] rounded-full border-2 border-white flex items-center justify-center text-white text-[clamp(10px,1.7vw,18px)]">
              ◇
            </div>

            <span className="text-white text-[clamp(12px,1.85vw,20px)] font-semibold">
              Matters
            </span>
          </div>
        </div>

        {/* MESSAGE */}
        <div className="absolute left-[46.8%] top-[62.2%] hidden sm:block">
          <div className="bg-[#A7A8ED] h-[clamp(42px,6.8vw,72px)] rounded-full flex items-center pl-[clamp(10px,1.8vw,20px)] pr-[clamp(16px,2.5vw,32px)] gap-[clamp(8px,1.4vw,16px)] shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
            <div className="w-[4px] h-[58%] rounded-full bg-[#F07B2D]" />

            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-[clamp(28px,4.4vw,48px)] h-[clamp(28px,4.4vw,48px)] rounded-full border-2 border-white object-cover"
            />

            <div className="leading-tight">
              <p className="text-[#1a1a2d] text-[clamp(8px,1.4vw,15px)] font-semibold">
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
        </div>

        {/* TASKS */}
        <div className="absolute left-[33.8%] bottom-[12%]">
          <div className="h-[clamp(42px,6.8vw,72px)] pl-[48px] pr-[120px] rounded-full bg-[#32214C] flex items-center justify-start gap-[clamp(8px,1.4vw,16px)] shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
            <span className="text-[#FF922D] text-[clamp(14px,2.2vw,24px)]">
              ✓
            </span>

            <span className="text-[#FF922D] text-[clamp(12px,1.85vw,20px)] font-semibold">
              Tasks
            </span>
          </div>
        </div>

        {/* DOCUMENTS */}
        <div className="absolute right-[3.1%] bottom-[18.1%] rotate-[-8deg]">
          <div className="h-[clamp(42px,6.8vw,72px)] pl-[48px] pr-[150px] rounded-full bg-[#2F214B] flex items-center justify-start gap-[clamp(8px,1.4vw,16px)] shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
            <div className="w-[clamp(22px,3.7vw,40px)] h-[clamp(22px,3.7vw,40px)] rounded-full border-2 border-[#FF922D] flex items-center justify-center text-[#FF922D] text-[clamp(10px,1.7vw,18px)]">
              ▣
            </div>

            <span className="text-[#FF922D] text-[clamp(12px,1.85vw,20px)] font-semibold">
              Documents
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}