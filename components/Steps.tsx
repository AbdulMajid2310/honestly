"use client";

import React from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import {
  HiOutlineFingerPrint,
  HiOutlineLink,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const flowData = [
  {
    id: "01",
    phase: "Authentication",
    title: "Secure Login",
    desc: "Otentikasi dua arah via WhatsApp untuk membangun identitas unik tanpa password.",
    icon: <HiOutlineFingerPrint />,
    gradient: "from-blue-500 to-cyan-400",
    glow: "bg-blue-400/20",
  },
  {
    id: "02",
    phase: "Generation",
    title: "Stealth Link",
    desc: "Sistem memproduksi URL alias dengan algoritma obfuscation untuk menyamarkan profil asli.",
    icon: <HiOutlineLink />,
    gradient: "from-fuchsia-500 to-purple-400",
    glow: "bg-fuchsia-400/20",
  },
  {
    id: "03",
    phase: "Intelligence",
    title: "Neural Wash",
    desc: "AI membersihkan metadata pelacak dan mengoptimasi diksi pesan secara otomatis.",
    icon: <HiOutlineSparkles />,
    gradient: "from-indigo-600 to-violet-400",
    glow: "bg-indigo-400/20",
  },
  {
    id: "04",
    phase: "Transmission",
    title: "Direct Sync",
    desc: "Pesan dikirim instan melalui jalur bypass privat langsung ke WhatsApp Anda.",
    icon: <HiOutlineShieldCheck />,
    gradient: "from-emerald-500 to-teal-400",
    glow: "bg-emerald-400/20",
  },
];

export default function FlowProcess() {
  return (
    <section className="relative py-32 bg-[#FAFAFC] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-28 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-12 bg-slate-900" />
            <span className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">
              The Protocol Flow
            </span>
          </motion.div>

          <h2 className="font-jakarta text-slate-900 text-3xl font-black tracking-tighter sm:text-5xl uppercase leading-[0.8]">
            Alur <br />
            <span className="bg-linear-to-b from-slate-900 via-slate-500 to-slate-200 bg-clip-text text-transparent italic">
              Transmisi.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* SVG Animated Connector (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 z-0 overflow-visible">
            <svg className="w-full h-full overflow-visible">
              <motion.path
                d="M 0 2 H 1000"
                fill="none"
                stroke="url(#flow-grad)"
                strokeWidth="2"
                strokeDasharray="10 10"
                animate={{ strokeDashoffset: -100 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <defs>
                <linearGradient
                  id="flow-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {flowData.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 group border border-slate-200 rounded-4xl p-4 flex flex-col items-center text-center bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="relative mb-4 flex items-center justify-center">
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-4xl bg-white border border-slate-100 shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  <span className={`text-4xl text-gray-700`}>{step.icon}</span>
                </div>

                <div className="absolute -top-2 -right-2 z-20 h-9 w-9 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-[11px] font-black border-4 border-[#FAFAFC] shadow-lg">
                  {step.id}
                </div>

                <div
                  className={`absolute inset-0 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full -z-10 ${step.glow}`}
                />
              </div>

              <div className="space-y-2 text-center w-full">
                <div className="space-y-1">
                  <span
                    className={`text-[10px] font-black tracking-[0.2em] uppercase bg-linear-to-r ${step.gradient} bg-clip-text text-transparent`}
                  >
                    {step.phase}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none group-hover:tracking-tighter transition-all duration-300">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-slate-500 font-medium  group-hover:text-slate-800 transition-colors">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2">
                <div
                  className={`h-1.5 w-1.5 rounded-full bg-linear-to-r ${step.gradient}`}
                />
                <div
                  className={`h-px w-0 bg-linear-to-r ${step.gradient} group-hover:w-full transition-all duration-700 ease-in-out`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-1 rounded-4xl bg-linear-to-r from-blue-500/10 via-fuchsia-500/10 to-emerald-500/10"
        >
          <div className="bg-white rounded-4xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-white">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-3xl bg-slate-900 flex items-center justify-center text-white text-3xl shadow-2xl">
                <HiOutlineShieldCheck />
              </div>
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-none">
                  Military-Grade Vault
                </h4>
                <p className="text-sm text-slate-400 max-w-md font-medium">
                  Setiap data diproses dalam lingkungan sandbox yang terenkripsi
                  penuh.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap px-10 py-5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-slate-800 transition-all active:scale-95 cursor-pointer shadow-xl">
              Audit Architecture
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
