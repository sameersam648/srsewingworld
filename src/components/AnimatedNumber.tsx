import React, { useEffect, useRef, useState } from 'react';

interface AnimatedNumberProps {
  end: number | string;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

/**
 * Component that animates a number from 0 to a target value
 * Only starts animating when the element comes into view (Intersection Observer)
 */
const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Extract numeric value from string (e.g., "15+" -> 15, "100%" -> 100)
  const getNumericValue = (value: number | string): number => {
    if (typeof value === 'number') return value;
    return parseInt(value.replace(/[^0-9]/g, ''), 10);
  };

  const numericEnd = getNumericValue(end);

  // Setup Intersection Observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  // Animate the number
  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation (easeOut)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(numericEnd * easeOut);

      setCount(current);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [hasStarted, numericEnd, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;
