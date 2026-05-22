"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MessageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
      className="absolute left-[46.8%] top-[62.2%] hidden sm:block"
    >
      <div className="bg-[#A7A8ED] h-[72px] rounded-full flex items-center pl-[20px] pr-[32px] gap-[16px] shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
        <div className="w-[4px] h-[58%] rounded-full bg-[#F07B2D]" />

        <Image
          src="/assets/user.png"
          alt=""
          width={48}
          height={48}
          className="w-[48px] h-[48px] rounded-full object-cover"
          style={{ objectFit: "cover" }}
        />

        <div className="leading-tight">
          <p className="text-[#333357] text-[15px] font-semibold">
            John Doe - Portal
          </p>

          <p className="text-[#333357] text-[12px]">
            Hey! Could you please review a
            <br />
            document for me?
          </p>

          <p className="text-[#333357] text-[11px] mt-[2px]">
            MAT-2233 · 2 h ago
          </p>
        </div>
      </div>
    </motion.div>
  );
}
