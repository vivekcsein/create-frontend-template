"use client";
import "@/styles/scss/components/starButton.scss"; // Import the SCSS file for styles
import { Button } from "@/components/ui/shadcn/button"; // Import the Button component
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { Svg } from "@/components/ui/helpers/Svg"; // Import the Svg component
import { starIcon } from "@/libs/configs/config.svg";

const StarButton = ({
  text,
  ...props
}: {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      variant="starButton"
      className="starButton"
      size="lg"
      // Spread the props to ensure onClick and other attributes are passed
      {...props}
    >
      {text}
      {mounted ? <StarButton_Stars /> : null}
    </Button>
  );
};

export default StarButton;

const StarButton_Stars = () => {
  return (
    <>
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className={`starButton_star${i + 1}`}>
          <Svg path={starIcon} fill={"star_fill"} />
        </div>
      ))}
    </>
  );
};
