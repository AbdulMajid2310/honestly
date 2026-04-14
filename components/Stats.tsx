"use client";

import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FaFingerprint,
  FaRobot,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { image } from "framer-motion/client";

const coreFeatures = [
  {
    icon: <FaFingerprint />,
    title: "Ghost",
    titleSuffix: "Identity",
    subtitle: "ENCRYPTED ANONYMITY",
    desc: "Protokol Stealth-Tunnel menghapus jejak digitalmu secara real-time. Identitasmu tidak akan pernah ada.",
    color: "from-cyan-400",
    textColor: "text-cyan-600",
    dotColor: "bg-cyan-500", // Tambahkan ini
    glowColor: "bg-cyan-500",
    grid: "md:col-span-4",
    iconBg: "bg-cyan-50",
    border: "hover:border-cyan-200",
    imageSrc: "/images/animated1.jpeg", // Tambahkan ini
  },
  {
    icon: <FaRobot />,
    title: "Neural",
    titleSuffix: "Magic",
    subtitle: "AI REWRITE",
    desc: "Ubah curhatan emosional jadi pesan yang elegan dan berkelas dalam satu klik.",
    color: "from-fuchsia-400",
    textColor: "text-fuchsia-600",
    dotColor: "bg-fuchsia-500", // Tambahkan ini
    glowColor: "bg-fuchsia-500",
    grid: "md:col-span-2",
    iconBg: "bg-fuchsia-50",
    border: "hover:border-fuchsia-200",
    imageSrc: "/images/animated2.jpeg",
  },
  {
    icon: <FaWhatsapp />,
    title: "Direct",
    titleSuffix: "Stream",
    subtitle: "WHATSAPP SYNC",
    desc: "Jawaban langsung mendarat di WhatsApp-mu tanpa delay atau perantara.",
    color: "from-emerald-400",
    textColor: "text-emerald-600",
    dotColor: "bg-emerald-500", // Tambahkan ini
    glowColor: "bg-emerald-500",
    grid: "md:col-span-2",
    iconBg: "bg-emerald-50",
    border: "hover:border-emerald-200",
    imageSrc: "/images/animated3.jpeg",
  },
  {
    icon: <FaShieldAlt />, // Menggunakan icon perisai agar lebih kredibel
    title: "Secure",
    titleSuffix: "Storage",
    subtitle: "DATA INTEGRITY",
    desc: "Data Anda disimpan dengan enkripsi end-to-end. Kami menjaga privasi pesan Anda tetap sakral dan tak tersentuh.",
    color: "from-orange-400",
    textColor: "text-orange-600",
    dotColor: "bg-orange-500",
    glowColor: "bg-orange-500",
    grid: "md:col-span-4",
    iconBg: "bg-orange-50",
    border: "hover:border-orange-200",
    imageSrc: "/images/animated4.jpeg",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof coreFeatures)[0];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 ${feature.grid} transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={`image-${index}`}
            src={feature.imageSrc}
            alt={`background ${feature.title}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover object-center lg:object-right"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>
      <div
        className={`absolute -inset-24 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none bg-radial-to-br ${feature.color} to-transparent blur-3xl`}
      />

      <div
        className={`absolute -right-10 -bottom-10 z-20 text-[10rem] opacity-80 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none  ${feature.textColor}`}
      >
        {feature.icon}
      </div>

      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}px ${y}px, rgba(0,0,0,0.03), transparent 40%)`,
          ),
        }}
      />

      {/* 4. CONTENT */}
      <div className="relative z-20 flex h-full flex-col justify-between">
        <div>
          {/* Badge Icon dengan Glassmorphism Terang */}
          <div
            className={`mb-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white shadow-[0_8px_16px_rgba(0,0,0,0.02)] ${feature.iconBg} text-3xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-md`}
          >
            <span className={feature.textColor}>{feature.icon}</span>
          </div>

          <p className="mb-3 text-[10px] font-black tracking-[0.5em] text-slate-100  group-hover:text-white uppercase">
            {feature.subtitle}
          </p>

          <h3 className="mb-4 font-jakarta text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl leading-[0.9]">
            {feature.title} <br />
            <span className="italic group-hover:text-slate-200 text-slate-100 transition-colors">
              {feature.titleSuffix}
            </span>
          </h3>

          <p className="max-w-70 text-sm leading-relaxed text-slate-200 transition-colors group-hover:text-white font-medium">
            {feature.desc}
          </p>
        </div>

        {/* Decorative Progress Bar */}
        <div className="mt-10 flex items-center gap-4">
          <div
            className={`h-2 w-2 rounded-full animate-pulse ${feature.dotColor}`}
          />
          <div className="h-px flex-1 bg-slate-100" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "30%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-px ${feature.dotColor} opacity-30`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturesStats() {
  return (
    <section className="text-[#050508] lg:py-24 py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="lg:mb-24 mb-6 flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-500"
          >
            Core Infrastructure
          </motion.div>

          <h2 className="font-jakarta text-3xl font-black leading-[0.9] tracking-tighter sm:text-7xl uppercase">
            The New Standard <br />
            <span className="bg-linear-to-r from-gray-500 via-black to-gray-500 bg-clip-text text-transparent italic">
              Of Privacy.
            </span>
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {coreFeatures.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
