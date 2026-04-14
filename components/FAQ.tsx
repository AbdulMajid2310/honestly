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
      "Sistem menghapus jejak digital Anda secara real-time. Alamat IP dan metadata perangkat tidak pernah menyentuh penyimpanan permanen kami.",
    accent: "bg-blue-500",
    light: "bg-blue-50/50",
  },
  {
    icon: <HiOutlineSparkles />,
    question: "Kecerdasan Buatan?",
    answer:
      "AI kami bekerja di lapisan transmisi untuk memoles diksi pesan Anda agar tetap berkelas tanpa mengubah inti pengakuan Anda.",
    accent: "bg-fuchsia-500",
    light: "bg-fuchsia-50/50",
  },
  {
    icon: <HiOutlineShieldCheck />,
    question: "Keamanan Admin?",
    answer:
      "Arsitektur stateless memastikan pesan hanya berada di memori sementara. Bahkan kami tidak memiliki akses untuk membukanya kembali.",
    accent: "bg-emerald-500",
    light: "bg-emerald-50/50",
  },
  {
    icon: <HiOutlineKey />,
    question: "Akses Tautan?",
    answer:
      "Kehilangan tautan? Cukup validasi nomor WhatsApp Anda kembali. Sistem akan mengenali identitas unik Anda dalam sekejap.",
    accent: "bg-orange-500",
    light: "bg-orange-50/50",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden bg-slate-50">
      {/* Cinematic Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/video/animate6.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-linear-to-b from-slate-200 via-transparent to-slate-200" />

        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-slate-200 to-transparent backdrop-blur-sm" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-200 to-transparent backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Header Section */}
        <div className="mb-24 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase shadow-sm"
          >
            Base of Knowledge
          </motion.div>

          <h2 className="font-jakarta text-slate-900 text-6xl font-black tracking-tighter uppercase leading-none sm:text-7xl">
            Pusat <span className="text-slate-400 italic">Informasi.</span>
          </h2>
        </div>

        {/* Floating Stack Layout */}
        <div className="space-y-6">
          {faqData.map((item, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className={`relative cursor-pointer overflow-hidden rounded-4xl border transition-all duration-700 backdrop-blur-md ${
                  isActive
                    ? "border-white/80 bg-white/80 shadow-2xl shadow-slate-200/40 translate-x-4"
                    : "border-white/20 bg-white/40 hover:bg-white/60"
                }`}
              >
                <div className="p-8 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      {/* Dynamic Icon Container */}
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-xl transition-all duration-700 ${
                          isActive
                            ? `${item.accent} text-white scale-110 rotate-6`
                            : `bg-white text-slate-400`
                        }`}
                      >
                        <span className="text-3xl">{item.icon}</span>
                      </div>

                      <h3
                        className={`text-xl font-black tracking-tight transition-colors duration-500 ${
                          isActive ? "text-slate-900" : "text-slate-600"
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
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
                        <div className="mt-8 pl-22 border-l-2 border-slate-200">
                          <p className="text-base leading-relaxed text-slate-500 font-medium">
                            {item.answer}
                          </p>

                          <motion.button
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mt-8 text-[11px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 group"
                          >
                            Pelajari Protokol
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
                  animate={{ width: isActive ? "6px" : "0px" }}
                  className={`absolute left-0 top-0 h-full ${item.accent} shadow-[4px_0_15px_rgba(0,0,0,0.1)]`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
