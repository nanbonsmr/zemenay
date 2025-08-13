import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const GridBackground = ({ className, size = "md" }: GridBackgroundProps) => {
  const sizeClasses = {
    sm: "bg-[length:20px_20px]",
    md: "bg-[length:40px_40px]", 
    lg: "bg-[length:60px_60px]"
  };

  return (
    <div 
      className={cn(
        "absolute inset-0 opacity-[0.15] dark:opacity-[0.3]",
        "bg-[linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)]",
        sizeClasses[size],
        className
      )}
    />
  );
};

export default GridBackground;