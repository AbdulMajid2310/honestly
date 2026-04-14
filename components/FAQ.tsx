"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineFingerPrint,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineKey,
  HiOutlineChevronDown,
} from "react-icons/hi2";

const faqData = [
  {
    icon: <HiOutlineFingerPrint />,
    question: "Identitas Terenkripsi?",
    answer:
      "Sistem menghapus jejak digital secara real-time. Alamat IP dan metadata perangkat tidak pernah menyentuh penyimpanan permanen kami untuk menjamin anonimitas mutlak.",
    accent: "bg-blue-500",
    shadow: "shadow-blue-500/20",
  },
  {
    icon: <HiOutlineSparkles />,
    question: "Kecerdasan Buatan?",
    answer:
      "AI bekerja di lapisan transmisi untuk memoles diksi pesan agar tetap berkelas tanpa mengubah inti pengakuan. Pesan kasar akan dikalibrasi menjadi lebih elegan.",
    accent: "bg-fuchsia-500",
    shadow: "shadow-fuchsia-500/20",
  },
  {
    icon: <HiOutlineShieldCheck />,
    question: "Keamanan Admin?",
    answer:
      "Arsitektur stateless memastikan pesan hanya berada di memori sementara. Bahkan pengembang sistem tidak memiliki kunci untuk membuka data yang sudah terenkripsi.",
    accent: "bg-emerald-500",
    shadow: "shadow-emerald-500/20",
  },
  {
    icon: <HiOutlineKey />,
    question: "Akses Tautan?",
    answer:
      "Kehilangan tautan? Cukup validasi nomor WhatsApp kembali. Sistem akan mengenali identitas unik dalam sekejap tanpa memerlukan kata sandi tradisional.",
    accent: "bg-orange-500",
    shadow: "shadow-orange-500/20",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32 overflow-hidden bg-slate-200">
      {/* Cinematic Video Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover grayscale-30 opacity-40"
        >
          <source src="/video/animate6.mp4" type="video/mp4" />
        </video>

        {/* Refined Overlays for Legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-200 via-slate-200/40 to-slate-200" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-slate-200 to-transparent backdrop-blur-[2px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-slate-200 to-transparent backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Header Section */}
        <div className="mb-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/40 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase shadow-sm"
          >
            Base of Knowledge
          </motion.div>

          <h2 className="font-jakarta text-slate-900 text-3xl font-black tracking-tighter uppercase leading-[0.9] sm:text-5xl">
            Pusat <br />
            <span className="bg-linear-to-r from-slate-900 via-slate-500 to-slate-400 bg-clip-text text-transparent italic">
              Informasi.
            </span>
          </h2>
        </div>

        {/* Floating Stack Layout */}
        <div className="space-y-4">
          {faqData.map((item, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className={`relative cursor-pointer overflow-hidden rounded-[2.5rem] border transition-all duration-500 backdrop-blur-xl ${
                  isActive
                    ? `border-white/80 bg-white shadow-2xl ${item.shadow} -translate-y-1`
                    : "border-white/20 bg-white/40 hover:bg-white/60"
                }`}
              >
                <div className="p-4 md:p-4">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      {/* Dynamic Icon Container */}
                      <div
                        className={`flex lg:h-16 lg:w-16 w-10 h-10 items-center justify-center rounded-[1.25rem] shadow-lg transition-all duration-500 ${
                          isActive
                            ? `${item.accent} text-white scale-110 rotate-6 shadow-xl`
                            : `bg-white text-slate-400`
                        }`}
                      >
                        <span className="lg:text-3xl text-sm">{item.icon}</span>
                      </div>

                      <h3
                        className={`text-sm md:text-xl font-bold tracking-tight transition-colors duration-500 ${
                          isActive ? "text-slate-900" : "text-slate-600"
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>

                    <motion.div
                      animate={{
                        rotate: isActive ? 180 : 0,
                        scale: isActive ? 1.2 : 1,
                      }}
                      className={`text-2xl ${isActive ? "text-slate-900" : "text-slate-300"}`}
                    >
                      <HiOutlineChevronDown />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8 pl-0 md:pl-22">
                          <p className="text-lg leading-relaxed text-slate-500 font-medium">
                            {item.answer}
                          </p>

                          <motion.button
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mt-10 text-[11px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-3 group"
                          >
                            Pelajari Protokol
                            <span className="w-10 h-px bg-slate-200 group-hover:w-16 transition-all duration-500" />
                            <span className="group-hover:translate-x-2 transition-transform duration-300">
                              →
                            </span>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Left Accent Bar */}
                <motion.div
                  animate={{ width: isActive ? "8px" : "0px" }}
                  className={`absolute left-0 top-0 h-full ${item.accent} opacity-80`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
