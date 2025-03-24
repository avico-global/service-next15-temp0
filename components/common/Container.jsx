import { cn } from "@/lib/utils";

export default function Container({ children, className, style }) {
  return (
    <div
      style={style}
      className={cn(
        " max-w-[1270px] w-full px-4",
        className
      )}
    >
      {children}
    </div>
  );
}
