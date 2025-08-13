import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo-white.png";
import logoBlack from "@/assets/logo-black.png";
import logoFull from "@/assets/logo-full.png";
import logoPrimary from "@/assets/logo-primary.png";

interface LogoProps {
  variant?: "white" | "black" | "primary" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo = ({ variant = "white", size = "md", className }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-16"
  };

  const logoSrc = {
    white: logoWhite,
    black: logoBlack,
    primary: logoPrimary,
    full: logoFull
  };

  return (
    <img
      src={logoSrc[variant]}
      alt="Zemenay Tech"
      className={cn(
        sizeClasses[size],
        "w-auto transition-all duration-300 hover:scale-105",
        className
      )}
    />
  );
};

export default Logo;