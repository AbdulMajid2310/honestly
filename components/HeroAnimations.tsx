import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  videoSrc: string;
  emojis: string[];
  color: string;
}

interface HeroAnimationsProps {
  current?: Slide;
  index: number;
  slideData: Slide[];
  setIndex: (i: number) => void;
}

export default function HeroAnimations({
  current,
  index,
  slideData,
  setIndex,
}: HeroAnimationsProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [current?.videoSrc]);

  if (!current) {
    return (
      <div className="relative lg:col-span-6 flex items-center justify-center">
        <div className="relative w-full max-w-105 aspect-9/16 rounded-[3rem] bg-gray-200 animate-pulse " />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center perspective-1000">
      {/* 1. AMBIENT DYNAMIC GLOW (Ditingkatkan) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`glow-${index}`}
          initial={{ opacity: 0, scale: 0.8, filter: "blur(60px)" }}
          animate={{ opacity: 0.6, scale: 1.1, filter: "blur(80px)" }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1.5 }}
          className={`absolute -inset-20 rounded-full bg-linear-to-br ${current.color} to-transparent opacity-30 pointer-events-none z-0`}
        />
      </AnimatePresence>

      {/* 2. SMARTPHONE FRAME WITH 3D TILT EFFECT */}
      <motion.div
        initial={{ rotateY: 15, rotateX: 5, scale: 0.9, opacity: 0 }}
        animate={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-80 aspect-9/16 sm:aspect-4/5 rounded-[3.5rem] p-3  shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] "
      >
        <div className="relative h-full w-full rounded-[2.8rem] overflow-hidden ">
          {/* VIDEO ENGINE */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={current.videoSrc}
              initial={{ opacity: 0, filter: "brightness(1.5) blur(10px)" }}
              animate={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={current.videoSrc} type="video/mp4" />
              </video>

              {/* VIGNETTE & OVERLAY */}
              <div className="absolute inset-0 bg-radial-to-b from-transparent via-transparent to-black/60 opacity-80" />
            </motion.div>
          </AnimatePresence>

          {/* GLASS UI ELEMENT (Floating Badge Inside Video) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xl  z-40"
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-2 w-2 rounded-full animate-pulse bg-linear-to-r ${current.color} to-white`}
              />
              <div className="h-2 w-24 bg-white/20 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* 3. REFLECTION SHINE (Lebih Halus) */}
        <motion.div
          animate={{ x: ["-100%", "250%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
          className="absolute inset-0 z-30 w-full bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] pointer-events-none"
        />
      </motion.div>

      {/* 4. PARALLAX EMOJIS WITH DEPTH OF FIELD (Bokeh) */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <AnimatePresence>
          {current.emojis?.map((emoji, i) => {
            const setups = [
              {
                top: "-5%",
                left: "-10%",
                scale: 1.2,
                delay: 0.2,
              },
              {
                bottom: "10%",
                right: "-8%",
                scale: 1.4,
                delay: 0.4,
              },
              {
                top: "40%",
                left: "-15%",
                scale: 0.8,
                delay: 0.6,
              },
            ];
            const s = setups[i % setups.length];

            return (
              <motion.div
                key={`${index}-${emoji}`}
                initial={{ scale: 0, opacity: 0, y: 50 }}
                animate={{
                  scale: s.scale,
                  opacity: 1,
                  y: [0, -25, 0],
                  rotate: [0, 10, -10, 0],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  default: { duration: 0.8, delay: s.delay, ease: "backOut" },
                  y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
                  rotate: {
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className={`absolute text-7xl sm:text-8xl drop-shadow-2xl `}
                style={{
                  top: s.top,
                  left: s.left,
                  right: s.right,
                  bottom: s.bottom,
                }}
              >
                {emoji}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* 5. MODERN PAGINATION & PROGRESS */}
      <div className="mt-14 flex items-center gap-8">
        {slideData.map((slide, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group relative flex flex-col items-center"
          >
            <div
              className={`h-1 rounded-full transition-all duration-700 overflow-hidden ${index === i ? "w-24 bg-black/5" : "w-10 bg-black/10 group-hover:bg-black/20"}`}
            >
              {index === i && (
                <motion.div
                  className={`h-full bg-linear-to-r ${slide.color} to-indigo-400`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 7, ease: "linear" }}
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
