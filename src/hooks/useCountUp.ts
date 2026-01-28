import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for animated number counting
 * @param end - Final number to count to
 * @param duration - Duration of animation in milliseconds
 * @param start - Starting number (default: 0)
 * @returns Current animated number
 */
export const useCountUp = (end: number, duration: number = 2000, start: number = 0): number => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOut);

      if (current !== countRef.current) {
        countRef.current = current;
        setCount(current);
      }

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [end, duration, start]);

  return count;
};
