import Round from "./types/round";

export default function Icon({
  children,
  className,
  bgColor = "bg-transparent",
  round,
  count,
  counterBgColor = "bg-red-500",
}: {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;
  round?: Round;
  count?: number;
  counterBgColor?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center relative ${
        bgColor ? `${bgColor} p-1.5` : ""
      } ${round} ${className}`}
    >
      {children}
      {count ? (
        <span
          className={`absolute -top-1 -right-1 ${counterBgColor} text-white text-[11px] font-semibold flex items-center justify-center w-4 h-4 rounded-full`}
        >
          {count}
        </span>
      ) : null}
    </span>
  );
}
