"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import HeroAnimations from "./HeroAnimations";

const slideData = [
  {
    id: 1,
    title: "Jujur Tanpa Takut",
    subtitle: "GHOST-MODE PRIVACY",
    desc: "Tumpahkan semua keresahanmu tanpa jejak. Teknologi Stealth-Tunnel kami memastikan identitasmu tetap menjadi misteri abadi. Siap bicara jujur?",
    color: "from-cyan-400",
    shadow: "shadow-cyan-400/30",
    videoSrc: "/video/animate1.mp4",
    animationType: "slideRight",
    emojis: ["👻", "🎭", "💎"],
    icon: <FaShieldAlt />,
  },
  {
    id: 2,
    title: "Kata Jadi Sihir",
    subtitle: "NEURAL MAGIC REWRITE",
    desc: "Bingung cara confess atau mau balas chat 'Savage'? Biar AI kami yang merangkai kata. Ubah pesan biasa jadi puitis, elegan, atau mematikan.",
    color: "from-fuchsia-500",
    shadow: "shadow-fuchsia-500/30",
    videoSrc: "/video/animate2.mp4",
    animationType: "zoomIn",
    emojis: ["🔮", "🧬", "🪄"],
    icon: <HiOutlineSparkles />,
  },
  {
    id: 3,
    title: "Koneksi Instan",
    subtitle: "WA DIRECT STREAM",
    desc: "Jangan biarkan rahasia itu basi. Semua balasan confessions akan langsung mendarat di WhatsApp-mu secara real-time. Cepat, privat, dan candu.",
    color: "from-amber-400",
    shadow: "shadow-amber-400/30",
    videoSrc: "/video/animate3.mp4",
    animationType: "slideUp",
    emojis: ["⚡", "🤳", "🔥"],
    icon: <FaWhatsapp />,
  },
];

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const badgeVariants: Variants = {
  initial: { opacity: 0, y: -10, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

const titleVariants: Variants = {
  initial: { opacity: 0, x: -20, filter: "blur(12px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const descVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = slideData[index];

  return (
    <section className="relative flex min-h-[90vh] lg:min-h-screen items-center overflow-hidden bg-[#FAFAFC] text-slate-900">
      {/* 1. DYNAMIC VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`bg-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 h-full w-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover grayscale-20"
            >
              <source src={current.videoSrc} type="video/mp4" />
            </video>

            {/* Gradasi yang lebih halus untuk menyatukan video dengan konten */}
            <div className="absolute inset-0 bg-linear-to-b from-[#FAFAFC]/10 via-[#FAFAFC]/60 to-[#FAFAFC]" />
            <div className="absolute inset-0 bg-linear-to-r from-[#FAFAFC] via-[#FAFAFC]/40 to-transparent hidden lg:block" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glow Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`glow-${index}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 2 }}
          className={`absolute -top-20 -left-20 z-0 h-125 w-125 rounded-full blur-[100px] bg-linear-to-br ${current.color} to-transparent`}
        />
      </AnimatePresence>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:py-0">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Content Section */}
          <div className="lg:col-span-7">
            <div className="relative flex flex-col justify-center min-h-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col"
                >
                  <motion.div
                    variants={badgeVariants}
                    className="mb-8 flex items-center gap-4"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${current.color} to-black/20 text-white shadow-lg backdrop-blur-sm`}
                    >
                      {current.icon}
                    </div>
                    <span className="text-xs font-black tracking-[0.4em] text-slate-400 uppercase">
                      {current.subtitle}
                    </span>
                  </motion.div>

                  <motion.h1
                    variants={titleVariants}
                    className="mb-6 text-5xl font-black leading-[0.95] tracking-tighter sm:text-8xl uppercase italic"
                  >
                    {current.title.split(" ")[0]} <br />
                    <span
                      className={`text-transparent bg-clip-text bg-linear-to-r ${current.color} to-slate-400`}
                    >
                      {current.title.split(" ").slice(1).join(" ")}
                    </span>
                  </motion.h1>

                  <motion.p
                    variants={descVariants}
                    className="mb-10 max-w-lg text-lg text-slate-500 font-medium leading-relaxed"
                  >
                    {current.desc}
                  </motion.p>

                  <motion.div
                    variants={descVariants}
                    className="flex flex-wrap items-center gap-10"
                  >
                    <button
                      className={`group relative flex items-center gap-3 overflow-hidden rounded-full bg-slate-950 px-10 py-5 font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-2xl ${current.shadow}`}
                    >
                      <span className="relative z-10">Mulai Sekarang</span>
                      <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                      <div
                        className={`absolute inset-0 bg-linear-to-r ${current.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                      />
                    </button>

                    <div className="flex items-center gap-4 border-l-2 border-slate-100 pl-8">
                      <div className="flex -space-x-4">
                        {[1, 2, 3].map((i) => (
                          <img
                            key={i}
                            src={`https://i.pravatar.cc/100?u=user${i + index * 5}`}
                            className="h-12 w-12 rounded-full border-4 border-white shadow-xl"
                            alt="social-proof"
                          />
                        ))}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-slate-900 leading-none">
                          2.4k+
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Pesan terkirim
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Section: HeroAnimations */}
          <div className="lg:col-span-5 relative">
            <HeroAnimations
              current={current}
              index={index}
              setIndex={setIndex}
              slideData={slideData}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">
          Scroll
        </span>
        <div className="h-12 w-px bg-linear-to-b from-slate-200 to-transparent" />
      </motion.div>
    </section>
  );
}
