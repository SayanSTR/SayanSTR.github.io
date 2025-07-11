import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

function useIntersectionObserver(
  elementRef: RefObject<HTMLElement | null>, // Changed Element to HTMLElement | null
  {
    threshold = 0.1, // Default to 10% visibility
    root = null,
    rootMargin = '0%',
    triggerOnce = true, // Default to triggering the animation only once
  }: IntersectionObserverOptions = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
        // If the element is not yet available, we can't observe it.
        // Depending on desired behavior, you might want to ensure isIntersecting remains false
        // or handle this case in a way that doesn't lead to premature state changes.
        // For now, if element is null, isIntersecting will remain its current value (initially false).
        return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(element); // Stop observing after it's visible once
          }
        } else {
          if (!triggerOnce) {
            setIsIntersecting(false); // Reset if it should trigger multiple times
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, threshold, root, rootMargin, triggerOnce]); // Ensure all dependencies are listed

  return isIntersecting;
}

export default useIntersectionObserver;