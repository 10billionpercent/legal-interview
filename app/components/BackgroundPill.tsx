type BackgroundPillProps = {
  className: string;
  darkMode: boolean;
};

export default function BackgroundPill({
  className,
  darkMode,
}: BackgroundPillProps) {
  return (
    <div
      className={`absolute rounded-full transition-colors duration-500 ${
        darkMode ? "bg-[#1C2338]" : "bg-[#dfe3ef]"
      } ${className}`}
    />
  );
}