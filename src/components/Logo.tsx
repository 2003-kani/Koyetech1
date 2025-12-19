import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/koyetech-logo.svg"
      alt="Koyetech"
      width={170}
      height={38}
      priority={priority}
      className={cn("h-8 w-auto", className)}
    />
  );
}
