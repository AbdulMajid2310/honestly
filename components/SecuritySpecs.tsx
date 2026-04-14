"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineTrash,
  HiOutlineEyeSlash,
} from "react-icons/hi2";

const securityData = [
  {
    icon: <HiOutlineLockClosed />,
    title: "Enkripsi Berlapis",
    desc: "Data Anda dilindungi dengan standar enkripsi asimetris AES-256 dan SHA-256 yang memastikan pesan tidak dapat diintip oleh siapapun.",
    tag: "Military-Grade",
    accent: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Integritas Data",
    desc: "Kami menjaga setiap pengakuan tetap sakral. Data disimpan dalam infrastruktur terenkripsi yang dipantau 24/7 tanpa celah akses pihak ketiga.",
    tag: "Secure Storage",
    accent: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: <HiOutlineEyeSlash />,
    title: "Privasi Terjaga",
    desc: "Meskipun data tersimpan, sistem kami menyamarkan identitas asli Anda melalui teknik abstraksi metadata secara otomatis.",
    tag: "Identity Cloak",
    accent: "text-fuchsia-500",
    bg: "bg-fuchsia-50",
  },
  {
    icon: <HiOutlineTrash />,
    title: "Kontrol Penuh",
    desc: "Anda memiliki kendali atas riwayat pengakuan Anda. Sistem menyediakan fitur untuk pembersihan jejak sesuai dengan preferensi privasi Anda.",
    tag: "Data Control",
    accent: "text-orange-500",
    bg: "bg-orange-50",
  },
];

export default function SecuritySpecs() {
  return (
    <section className="relative py-10 lg:py-32  overflow-hidden">
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key="security-bg"
            src="/images/animated5.jpeg"
            alt="Security Background"
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className=" h-full w-full object-cover "
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-linear-to-b from-slate-200 via-transparent to-slate-200" />

        <div className="absolute inset-x-0 top-0 h-10 bg-linear-to-b from-slate-200 to-transparent backdrop-blur-sm" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-slate-200 to-transparent backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="lg:mb-24 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-slate-900" />
              <span className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">
                Privacy Assurance
              </span>
            </motion.div>

            <h2 className="font-jakarta text-slate-900 text-5xl font-black tracking-tighter sm:text-7xl uppercase leading-[0.85]">
              Benteng <br />
              <span className="bg-linear-to-r from-slate-900 via-slate-500 to-slate-300 bg-clip-text text-transparent italic">
                Keamanan.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm font-medium leading-relaxed text-slate-500 border-l-2 border-slate-200 pl-6">
            Standar enkripsi tingkat militer yang memastikan setiap kata tetap
            menjadi rahasia pribadi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative p-10 rounded-[2.5rem] border border-white bg-white/60 backdrop-blur-md transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2"
            >
              <div
                className={`lg:mb-12 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.accent} text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm`}
              >
                {item.icon}
              </div>

              <div className="space-y-4">
                <span
                  className={`text-[10px] font-black tracking-widest uppercase opacity-60 ${item.accent}`}
                >
                  {item.tag}
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 h-px w-0 bg-slate-100 group-hover:w-full transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-6 px-8 py-4 rounded-3xl border border-white bg-white/80 backdrop-blur-sm shadow-sm">
            <p className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
              Tested & Verified Security Protocol
            </p>
            <div className="hidden md:block h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-900 uppercase">
                SSL Secure Verified
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
