// src/app/_studio/ButtonAnimation/ButtonAnimationComponent.tsx
import React, { FC } from "react";

type ButtonAnimationProps = {
  text: string;
  id?: string;
  className?: string;
  animation: string;
  duration: string;
  delay: string;
  direction: string;
  iterationCount: string;
  timingFunction: string;
  fillMode: string;
  playState: string;
  composition: string;
};

export const ButtonAnimationComponent: FC<ButtonAnimationProps> = ({
  text,
  id,
  className,
  animation,
  duration,
  delay,
  direction,
  iterationCount,
  timingFunction,
  fillMode,
  playState,
  composition,
  ...props
}) => {
  const animationClasses = `
    ${animation}
    animate-duration-${duration}
    animate-delay-${delay}
    animate-${direction}
    animate-iteration-${iterationCount}
    animate-ease-${timingFunction}
    animate-fill-${fillMode}
    animate-${playState}
    animate-${composition}
  `;

  return (
    <button id={id} className={`${className} ${animationClasses}`} {...props}>
      {text}
    </button>
  );
};

export default ButtonAnimationComponent;
