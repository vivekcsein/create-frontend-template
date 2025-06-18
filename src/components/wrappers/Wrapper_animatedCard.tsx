import React from "react";
import "@/styles/css/Animated_Border_Card.css";

type classicVibes = "classicVibes";
type gradientvibes = "gradientVibes";
type rainbow = "rainbow";
type variant = classicVibes | gradientvibes | rainbow;

const Wrapper_animatedCard: React.FC<{
  variant?: variant;
  width?: number;
  gradient?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ variant, width = 10, gradient, className, children }) => {
  switch (variant) {
    case "rainbow":
      return (
        <div
          className="animated-card-with-rainbow-border"
          style={{ padding: `${width}px` }}
        >
          {children}
        </div>
      );

    case "classicVibes":
      return (
        <div
          className="animated-card-with-classic-vibes"
          style={{ padding: `${width}px` }}
        >
          {children}
        </div>
      );
    case "gradientVibes":
      return (
        <div className="gradientVibes" style={{ padding: `${width}px` }}>
          {children}
        </div>
      );

    default:
      return (
        <div
          className={className}
          style={{
            padding: `${width}px`,
            background: gradient,
            backgroundSize: "400%",
            animation: "animbackground 10s linear infinite",
          }}
        >
          {children}
        </div>
      );
  }
};
export default Wrapper_animatedCard;
