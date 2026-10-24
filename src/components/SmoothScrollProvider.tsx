"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { ReactNode } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const reducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: !reducedMotion,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
    </MotionConfig>
  );
}
