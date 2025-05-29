import { useEffect, useRef, useState } from 'react';

import { ReactNode } from 'react';

interface ServiceMenuCardProps {
  children: ReactNode;
  className?: string;
}

export default function ServiceMenuCard({ children, className = "" }: ServiceMenuCardProps) {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.99 }
    );
    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`service-menu-card ${inView ? "in-view" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
