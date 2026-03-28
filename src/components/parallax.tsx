'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

export function ParallaxBackground({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  // Image moves down at 30% speed of scroll, but since we start top-0, 
  // it needs to be taller than the container to not show empty space.
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  
  return (
    <motion.div 
      style={{ y }} 
      className="absolute top-[-300px] bottom-0 inset-x-0 z-0 pointer-events-none"
    >
      {children}
    </motion.div>
  );
}

export function ParallaxText({ children, className = '' }: { children: ReactNode, className?: string }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  return (
    <motion.div style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}
