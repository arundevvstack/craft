'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type TextRotatorProps = {
  phrases: string[];
  delay?: number;
  className?: string;
};

export function TextRotator({ phrases, delay = 5000, className }: TextRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [phrases, delay]);

  return (
    <span className={cn('inline-grid text-left', className)}>
      {phrases.map((phrase) => (
        <span
          key={phrase}
          className="invisible col-start-1 row-start-1 whitespace-nowrap"
        >
          {phrase}
        </span>
      ))}
      <AnimatePresence>
        <motion.span
          key={phrases[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="col-start-1 row-start-1"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
