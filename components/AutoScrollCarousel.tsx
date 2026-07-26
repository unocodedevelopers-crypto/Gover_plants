"use client";
import React, { useRef, useEffect } from "react";

export default function AutoScrollCarousel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let isPaused = false;

    // Pause auto-scroll when user hovers or interacts
    const handleMouseEnter = () => (isPaused = true);
    const handleMouseLeave = () => (isPaused = false);
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleMouseEnter, { passive: true });
    scrollContainer.addEventListener('touchend', handleMouseLeave, { passive: true });

    const scrollInterval = setInterval(() => {
      if (scrollContainer && !isPaused) {
        const isAtEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10;
        
        if (isAtEnd) {
          // Reached the end, scroll back to start
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll right by approximately one item width (or half container)
          scrollContainer.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('touchstart', handleMouseEnter);
      scrollContainer.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={scrollRef}
      className="flex overflow-x-auto gap-x-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {children}
    </div>
  );
}
