"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type FloatingCardProps = {
  label: string;
  icon: LucideIcon;
  bg: string;
  text: string;
  rotate: string;
  className: string;
  iconClassName?: string;
  floatY?: number;
};

export default function FloatingCard({
  label,
  icon: Icon,
  bg,
  text,
  rotate,
  className,
  iconClassName,
  floatY = 10,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: [0, -floatY, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={className}
    >
      <div
        className={`${rotate} h-[72px] pl-[48px] pr-[140px] rounded-full flex items-center justify-start gap-[16px] shadow-[0_12px_28px_rgba(0,0,0,0.16)]`}
        style={{ background: bg }}
      >
        <div
          className={`w-[44px] h-[44px] flex items-center justify-center ${iconClassName}`}
        >
          <Icon size={22} strokeWidth={2.2} />
        </div>

        <span className="text-[20px] font-semibold" style={{ color: text }}>
          {label}
        </span>
      </div>
    </motion.div>
  );
}
