
import { useState, useEffect } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}

const StatItem = ({ value, label, suffix = "+", delay }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    const increment = value / totalFrames;
    
    let currentFrame = 0;
    
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        currentFrame++;
        setCount(Math.min(Math.round(increment * currentFrame), value));
        
        if (currentFrame === totalFrames) {
          clearInterval(counter);
        }
      }, frameRate);
      
      return () => clearInterval(counter);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-600">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Impact</h2>
          <p className="text-gray-600">
            VentureLab has been empowering entrepreneurs and startups on their journey to success.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <StatItem value={150} label="Startups Incubated" delay={0} />
          <StatItem value={30} label="Million $ Raised" suffix="M+" delay={200} />
          <StatItem value={80} label="Expert Mentors" delay={400} />
          <StatItem value={95} label="Success Rate" suffix="%" delay={600} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
