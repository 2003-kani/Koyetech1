'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { motionVariants, animations, animationUtils } from '@/lib/animations';

type AnimationType = keyof typeof motionVariants;

type AnimateProps = {
  children: ReactNode;
  type?: AnimationType;
  show?: boolean;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  customVariants?: Variants;
  [key: string]: any;
};

export function Animate({
  children,
  type = 'fade',
  show = true,
  delay = 0,
  duration,
  className = '',
  as: Component = 'div',
  customVariants,
  ...props
}: AnimateProps) {
  const variants = customVariants || motionVariants[type];
  const MotionComponent = motion[Component as keyof typeof motion] || motion.div;

  // Apply delay and duration if provided
  const customVariantsWithTiming = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...variants.visible?.transition,
        ...(delay && { delay }),
        ...(duration && { duration }),
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <MotionComponent
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={customVariantsWithTiming}
          className={className}
          style={{
            ...animationUtils,
            willChange: 'transform, opacity',
          }}
          {...props}
        >
          {children}
        </MotionComponent>
      )}
    </AnimatePresence>
  );
}

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  show?: boolean;
  staggerDelay?: number;
};

export function StaggerContainer({
  children,
  className = '',
  show = true,
  staggerDelay = 0.05,
}: StaggerContainerProps) {
  return (
    <Animate
      type="staggerContainer"
      className={className}
      show={show}
      customVariants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </Animate>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function StaggerItem({ children, className = '', delay = 0 }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 24,
            delay,
          },
        },
      }}
      className={className}
      style={{
        ...animationUtils,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.div>
  );
}

// Re-export motion components for convenience
export { motion, AnimatePresence };

// Export animation utilities
export { animations, motionVariants, animationUtils } from '@/lib/animations';
