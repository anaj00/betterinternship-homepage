"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

function LogoColumn({ logos, columnIndex, currentTime }) {
  const CYCLE_DURATION = 8000;
  const columnDelay = columnIndex * 200;
  const adjustedTime =
    (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex];

  return (
    <motion.div
      className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          <Image
  src={currentLogo.src}
  alt={currentLogo.name}
  width={200}
  height={120}
  className="h-auto w-auto object-contain max-h-full max-w-full"
/>

        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export function LogoCarousel({ logos, columns = 4 }) {
  const [logoColumns, setLogoColumns] = useState([]);
  const [time, setTime] = useState(0);

  const distributeLogos = useCallback(() => {
    const shuffled = [...logos].sort(() => Math.random() - 0.5);
    const cols = Array.from({ length: columns }, () => []);
    shuffled.forEach((logo, i) => cols[i % columns].push(logo));
    return cols;
  }, [logos, columns]);

  useEffect(() => {
    setLogoColumns(distributeLogos());
  }, [distributeLogos]);

  useEffect(() => {
    const interval = setInterval(() => setTime((prev) => prev + 100), 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center gap-6">
      {logoColumns.map((col, i) => (
        <LogoColumn key={i} logos={col} columnIndex={i} currentTime={time} />
      ))}
    </div>
  );
}
