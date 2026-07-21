import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const FadeIn = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const GlassCard = ({ children, className = '', hover = true, ...props }) => (
  <motion.div
    whileHover={hover ? { y: -6, transition: { duration: 0.25 } } : undefined}
    className={`landing-glass ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

export const GradientButton = ({ children, variant = 'primary', className = '', ...props }) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className={variant === 'primary' ? `landing-btn-primary ${className}` : `landing-btn-ghost ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

export const SectionLabel = ({ children }) => (
  <span className="landing-label">{children}</span>
);

export const SectionTitle = ({ children, className = '' }) => (
  <h2 className={`landing-section-title ${className}`}>{children}</h2>
);

export const SectionSubtitle = ({ children, className = '' }) => (
  <p className={`landing-section-subtitle ${className}`}>{children}</p>
);

export const GlowIcon = ({ children, className = '' }) => (
  <div className={`landing-glow-icon ${className}`}>{children}</div>
);

export const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span ref={ref}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {value}{suffix}
          </motion.span>
        </motion.span>
      ) : (
        `0${suffix}`
      )}
    </motion.span>
  );
};
