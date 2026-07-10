"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface FoodItemProps {
  src: string;
  initialX: string;
  initialY: number;
  rotateSpeed: number;
  scrollRange: [number, number];
  size?: number;
}

const FoodItem = ({ src, initialX, initialY, rotateSpeed, scrollRange, size = 320 }: FoodItemProps) => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to parallax position, rotation, and dynamic scaling
  const y = useTransform(scrollYProgress, scrollRange, [initialY, initialY + 500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * rotateSpeed]);
  const scale = useTransform(scrollYProgress, [scrollRange[0], (scrollRange[0] + scrollRange[1]) / 2, scrollRange[1]], [0.6, 1.1, 0.6]);
  const opacity = useTransform(
    scrollYProgress, 
    [scrollRange[0] - 0.05, scrollRange[0], scrollRange[1], scrollRange[1] + 0.05], 
    [0, 1, 1, 0]
  );

  // Smooth out the motion
  const springY = useSpring(y, { stiffness: 40, damping: 25 });
  const springRotate = useSpring(rotate, { stiffness: 40, damping: 25 });
  const springScale = useSpring(scale, { stiffness: 40, damping: 25 });

  // Floating micro-animation (sine wave)
  const [floatOffset, setFloatOffset] = useState(0);
  useEffect(() => {
    let frame: number;
    const animate = (time: number) => {
      setFloatOffset(Math.sin(time / 1500) * 15);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: initialX,
        top: springY,
        y: floatOffset, // Combine scroll spring with micro-float
        rotate: springRotate,
        scale: springScale,
        opacity,
        pointerEvents: "none",
        zIndex: 1,
        filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img 
        src={src} 
        alt="EMenu 3D Asset" 
        style={{ 
          width: size, 
          height: "auto",
          maxWidth: "80vw",
        }} 
      />
    </motion.div>
  );
};

export default function FloatingFood3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Hide or reduce on mobile to maintain clean UI
  if (isMobile) return null;

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none" 
      style={{ height: "400%", position: "absolute", width: "100%" }}
    >
      {/* Burger - Appears near How It Works */}
      <FoodItem 
        src="/assets/3d/burger.png" 
        initialX="5%" 
        initialY={600} 
        rotateSpeed={0.4} 
        scrollRange={[0.05, 0.45]} 
        size={380}
      />

      {/* Pizza - Appears near Features */}
      <FoodItem 
        src="/assets/3d/pizza.png" 
        initialX="78%" 
        initialY={1400} 
        rotateSpeed={-0.25} 
        scrollRange={[0.3, 0.7]} 
        size={350}
      />

      {/* Drink - Appears near Benefits/Pricing */}
      <FoodItem 
        src="/assets/3d/drink.png" 
        initialX="8%" 
        initialY={2600} 
        rotateSpeed={0.6} 
        scrollRange={[0.6, 0.95]} 
        size={320}
      />
    </div>
  );
}
