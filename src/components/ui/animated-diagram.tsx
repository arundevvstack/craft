'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimatedDiagramProps = {
  src: string;
  alt: string;
  aiHint: string;
  width?: number;
  height?: number;
  showContainer?: boolean;
};

export function AnimatedDiagram({
  src,
  alt,
  aiHint,
  width = 600,
  height = 500,
  showContainer = true,
}: AnimatedDiagramProps) {
  return (
    <motion.div
      initial={{ opacity: 0.8, y: 0 }}
      animate={{
        y: [-5, 5, -5],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      className={cn(
        showContainer &&
          'relative rounded-lg overflow-hidden bg-card p-4 border border-border/50 shadow-lg'
      )}
    >
      <Image
        src={src}
        alt={alt}
        data-ai-hint={aiHint}
        width={width}
        height={height}
        className={cn('object-contain max-w-full h-auto', showContainer && 'rounded-md')}
      />
    </motion.div>
  );
}
