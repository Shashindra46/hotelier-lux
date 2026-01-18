import { useState, useRef, useEffect } from "react";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export default function ProgressiveImage({ 
  src, 
  alt, 
  className = "",
  containerClassName = ""
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName}`}>
      {/* Elegant placeholder - shows immediately */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5 ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}
      />
      
      {/* Shimmer animation while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      )}
      
      {/* Actual image - only loads when in view */}
      {isInView && (
        <img 
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        />
      )}
    </div>
  );
}
