import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface InfiniteSliderProps {
  items: React.ReactNode[];
  className?: string;
  speed?: number;
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({ 
  items, 
  className,
  speed = 50
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    setScrollWidth(container.scrollWidth / 2);

    const resizeObserver = new ResizeObserver(() => {
      setScrollWidth(container.scrollWidth / 2);
    });

    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [items]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      container.scrollLeft += speed / 60;
      if (container.scrollLeft >= scrollWidth) {
        container.scrollLeft -= scrollWidth;
      }
    };

    const intervalId = setInterval(animate, 1000 / 60);

    return () => clearInterval(intervalId);
  }, [speed, scrollWidth]);

  return (
    <div 
      className={twMerge(
        "relative overflow-hidden bg-transparent w-full",
        className
      )}
    >
      <div
        ref={containerRef}
        className="flex transition-all overflow-x-hidden w-full"
      >
        {[...items, ...items].map((item, index) => (
          <div
            className="flex items-center justify-center px-1"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};