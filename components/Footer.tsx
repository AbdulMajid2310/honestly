"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { FaInstagram, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-32 pb-12 overflow-hidden text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* 1. SEKSI CTA (Kartu Konversi Utama) */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-slate-950 p-12 md:p-24 text-center overflow-hidden mb-32 shadow-2xl shadow-slate-900/20"
        >
          {/* Background Video Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
            <AnimatePresence mode="popLayout">
              <motion.div
                key="footer-video"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover grayscale"
                >
                  <source src="/video/animate4.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-transparent to-slate-950" />
          </div>

          {/* Decorative Glows */}
          <div className="absolute top-0 left-0 w-125 h-125 bg-blue-600/20 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-125 h-125 bg-fuchsia-600/20 blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="mb-10 flex h-20 w-20 items-center justify-center rounded-4xl bg-white/5 border border-white/10 text-4xl text-white backdrop-blur-md shadow-2xl"
            >
              <HiOutlineShieldCheck />
            </motion.div>

            <h2 className="mb-8 font-jakarta text-5xl font-black leading-[0.85] tracking-tighter text-white sm:text-7xl lg:text-9xl uppercase italic">
              Mulai <span className="text-slate-500 not-italic">Bicara.</span>
            </h2>

            <p className="mb-12 max-w-xl text-lg font-medium leading-relaxed">
              Bergabunglah dengan ribuan pengirim pesan yang telah menemukan
              ketenangan melalui kejujuran tanpa jejak digital. Privasi Anda
              adalah prioritas mutlak kami.
            </p>

            <button className="group relative flex items-center gap-4 rounded-full bg-white px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-slate-950 transition-all hover:bg-blue-500 hover:text-white active:scale-95 shadow-2xl shadow-white/10 cursor-pointer">
              Generate Link
              <HiOutlineArrowRight className="text-xl transition-transform group-hover:translate-x-3" />
            </button>
          </div>
        </motion.section>

        {/* 2. NAVIGASI & BRANDING */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5 space-y-10">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="flex h-9 w-9 md:h-20 md:w-20 items-center justify-center rounded-xl bg-slate-900 p-1 shadow-lg transition-transform group-hover:rotate-12">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="font-jakarta text-lg md:text-4xl font-black tracking-tighter text-slate-900 uppercase">
                  HonestLy.
                </span>
                <div className="flex items-center gap-6">
                  {[
                    { icon: <FaInstagram />, label: "Instagram" },
                    { icon: <FaTwitter />, label: "Twitter" },
                    { icon: <FaGithub />, label: "Github" },
                    { icon: <FaWhatsapp />, label: "Whatsapp" },
                  ].map((social, idx) => (
                    <button
                      key={idx}
                      className="text-2xl text-gray-800 font-black hover:text-blue-800 transition-all hover:-translate-y-1 cursor-pointer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <p className="max-w-sm text-base font-medium leading-relaxed  text-gray-800">
              Platform pengakuan anonim berbasis AI yang mengutamakan privasi
              dan transparansi data di setiap transmisi. Bagian dari ekosistem
              MaJdev Lab.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.5em] text-slate-950 uppercase">
                Produk
              </h4>
              <ul className="space-y-4 text-sm font-bold text-gray-800">
                {[
                  "Generate Link",
                  "Magic Rewrite",
                  "Security Protocol",
                  "Enterprise",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-blue-800 transition-colors cursor-pointer w-fit"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.5em] text-slate-950 uppercase">
                Keamanan
              </h4>
              <ul className="space-y-4 text-sm font-bold text-gray-800">
                {[
                  "Kebijakan Privasi",
                  "Zero-Logs Policy",
                  "Audit Keamanan",
                  "Status Sistem",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-blue-800 transition-colors cursor-pointer w-fit"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 col-span-2 sm:col-span-1">
              <h4 className="text-[10px] font-black tracking-[0.5em] text-slate-950 uppercase">
                Bantuan
              </h4>
              <ul className="space-y-4 text-sm font-bold text-gray-800">
                {[
                  "Pusat FAQ",
                  "Kontak Kami",
                  "Dokumentasi API",
                  "Syarat Layanan",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-blue-800 transition-colors cursor-pointer w-fit"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. COPYRIGHT & BOTTOM BAR */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-[10px] font-black text-emerald-600 uppercase tracking-widest">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              System Operational
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
              <HiOutlineGlobeAlt className="text-xs" />
              ID / EN
            </div>
          </div>

          <p className="text-[10px] font-black tracking-[0.4em] text-gray-800 uppercase text-center">
            © {currentYear} MaJdev Lab. Designed for the anonymous era.
          </p>
        </div>
      </div>
    </footer>
  );
}
