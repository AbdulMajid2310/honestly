import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import HeroAnimations from "./HeroAnimations";

// Slide Data tetap sama
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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

// Varian Spesifik untuk tiap elemen
const badgeVariants: Variants = {
  initial: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
    transition: { duration: 0.3 },
  },
};

const titleVariants: Variants = {
  initial: { opacity: 0, x: -30, filter: "blur(5px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    x: 20,
    filter: "blur(5px)",
    transition: { duration: 0.3 },
  },
};

const descVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.3 } },
};

const ctaVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
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
  if (!current) return null;

  return (
    <section className="relative flex lg:min-h-screen items-center overflow-hidden bg-[#FAFAFC] text-[#05050A]">
      {/* 1. DYNAMIC VIDEO BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`video-${index}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            {/* Video sebagai background penuh */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover object-top-10"
            >
              <source src={current.videoSrc} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-linear-to-t from-[#FAFAFC] via-transparent to-transparent lg:hidden" />
            <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-slate-200 to-transparent backdrop-blur-sm" />
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        <motion.div
          key={`glow-${index}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1.5 }}
          className={`absolute -top-20 -left-20 z-0 h-150 w-150 rounded-full blur-[120px] bg-linear-to-br ${current.color} to-transparent opacity-20`}
        />
      </AnimatePresence>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative min-h-112.5 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col"
                >
                  {/* Badge: Zoom-in Effect */}
                  <motion.div
                    variants={badgeVariants}
                    className="mb-6 flex items-center gap-3"
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br ${current.color} to-black/20 text-white shadow-lg`}
                    >
                      {current.icon}
                    </span>
                    <span className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase">
                      {current.subtitle}
                    </span>
                  </motion.div>

                  {/* Title: Slide from Left */}
                  <motion.h1
                    variants={titleVariants}
                    className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-7xl "
                  >
                    {current.title.split(" ")[0]} <br />
                    <span
                      className={`text-transparent bg-clip-text bg-linear-to-r ${current.color} to-gray-400`}
                    >
                      {current.title.split(" ").slice(1).join(" ")}
                    </span>
                  </motion.h1>

                  {/* Description: Fade-up */}
                  <motion.p
                    variants={descVariants}
                    className="mb-10 max-w-lg text-lg text-gray-600 leading-relaxed"
                  >
                    {current.desc}
                  </motion.p>

                  {/* CTA: Pop Effect */}
                  <motion.div
                    variants={ctaVariants}
                    className="flex flex-wrap items-center gap-8"
                  >
                    <button
                      className={`group flex items-center gap-3 rounded-full bg-[#05050A] px-8 py-4 font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl ${current.shadow}`}
                    >
                      Mulai Sekarang
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-3 border-l border-gray-200 pl-8">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                          <img
                            key={i}
                            src={`https://i.pravatar.cc/100?u=user${i + index * 3}`}
                            className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
                            alt="avatar"
                          />
                        ))}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-black leading-none">
                          2.4k+
                        </span>
                        <span className="text-xs text-gray-400">
                          Pesan terkirim
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroAnimations
              current={current}
              index={index}
              setIndex={setIndex}
              slideData={slideData}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
