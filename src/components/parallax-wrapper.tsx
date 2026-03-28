'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxWrapper({ 
  children, 
  className = '', 
  speed = 0.5,
  isText = false
}: { 
  children: React.ReactNode;
  className?: string;
  speed?: number;
  isText?: boolean;
}) {
  const { scrollY } = useScroll();
  
  // speed determines how fast it scrolls compared to normal scroll
  // speed 0.5 means it moves at half speed over the background
  const y = useTransform(scrollY, [0, 1500], [0, 1500 * speed]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.div style={{ y, ...(isText ? { opacity } : {}) }} className={className}>
      {children}
    </motion.div>
  );
}
