import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  padding,
  maxWidth,
  centerX = true, // Default to centered
}: {
  className?: string;
  children: React.ReactNode;
  padding?: string;
  maxWidth?: string;
  centerX?: boolean;
}) {
  return (
    <div
      className={cn(
        centerX ? "mx-auto" : "",
        maxWidth ? maxWidth : "max-w-7xl", // Widen for modern feel
        padding ? padding : "px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}