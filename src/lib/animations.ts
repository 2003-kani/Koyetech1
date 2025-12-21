// Animation presets for consistent animations across the app
export const animations = {
  // Fade in/out
  fade: {
    enter: 'transition-opacity duration-200 ease-out',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'transition-opacity duration-150 ease-in',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  },
  
  // Slide up/down
  slideUp: {
    enter: 'transition-all duration-200 ease-out',
    enterFrom: 'opacity-0 translate-y-2',
    enterTo: 'opacity-100 translate-y-0',
    leave: 'transition-all duration-150 ease-in',
    leaveFrom: 'opacity-100 translate-y-0',
    leaveTo: 'opacity-0 -translate-y-2',
  },
  
  // Scale in/out
  scale: {
    enter: 'transition-all duration-200 ease-out',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'transition-all duration-150 ease-in',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95',
  },
  
  // Slide in from right
  slideRight: {
    enter: 'transition-all duration-200 ease-out',
    enterFrom: 'opacity-0 translate-x-2',
    enterTo: 'opacity-100 translate-x-0',
    leave: 'transition-all duration-150 ease-in',
    leaveFrom: 'opacity-100 translate-x-0',
    leaveTo: 'opacity-0 -translate-x-2',
  },
  
  // Stagger children
  stagger: (delay: number = 50) => ({
    '& > *': {
      transition: `all 200ms ease-out`, 
      transitionDelay: `${delay}ms`,
    },
    '& > *:enter': {
      opacity: 0,
      transform: 'translateY(10px)',
    },
    '& > *:enter-active': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  }),
} as const;

// Animation variants for Framer Motion
export const motionVariants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.15, ease: 'easeIn' }
    }
  },
  slideUp: {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.15, ease: 'easeIn' }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.2, 
        ease: [0.4, 0, 0.2, 1] 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { 
        duration: 0.15, 
        ease: [0.4, 0, 0.2, 1] 
      }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  },
  staggerItem: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  },
} as const;

// Animation presets for headlessui/react
export const headlessUiTransitions = {
  fade: {
    enter: 'transition-opacity duration-200',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'transition-opacity duration-150',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  },
  slideUp: {
    enter: 'transform transition duration-200 ease-out',
    enterFrom: 'opacity-0 translate-y-2',
    enterTo: 'opacity-100 translate-y-0',
    leave: 'transform transition duration-150 ease-in',
    leaveFrom: 'opacity-100 translate-y-0',
    leaveTo: 'opacity-0 -translate-y-2',
  },
  scale: {
    enter: 'transform transition duration-200 ease-out',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'transform transition duration-150 ease-in',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95',
  },
} as const;

// Animation utilities
export const animationUtils = {
  // Will-change for better performance
  willChange: 'will-change-transform, will-change-opacity',
  
  // Smooth scrolling
  smoothScroll: 'scroll-behavior: smooth',
  
  // Hardware acceleration
  hardwareAccel: 'transform-gpu',
  
  // Backface visibility for better rendering
  backfaceVisible: 'backface-visible',
  
  // Transform style for 3D
  preserve3d: 'transform-style: preserve-3d',
  
  // Animation fill mode
  fillForwards: 'animation-fill-mode: forwards',
  
  // Animation timing functions
  ease: {
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
  },
} as const;

// Keyframes for custom animations
export const keyframes = {
  spin: `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `,
  ping: `
    @keyframes ping {
      0% { transform: scale(1); opacity: 1; }
      75%, 100% { transform: scale(2); opacity: 0; }
    }
  `,
  pulse: `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `,
  bounce: `
    @keyframes bounce {
      0%, 100% { 
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  `,
} as const;
