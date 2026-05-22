type BackgroundPillProps = {
  className: string;
  darkMode: boolean;
  rotate?: string;
};

export default function BackgroundPill({
  className,
  darkMode,
  rotate
}: BackgroundPillProps) {
  return (
    <div
      className={`${rotate} absolute rounded-full transition-colors duration-500 ${
        darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
      } ${className}`}
    />
  );
}