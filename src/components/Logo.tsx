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
      src="/KoyetechLogo.png"
      alt="Koyetech"
      width={200}
      height={45}
      priority={priority}
      className={cn("h-10 w-auto", className)}
    />
  );
}
