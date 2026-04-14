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
    <footer className=" pt-32 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* 1. SEKSI CTA (Kartu Konversi Utama) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-4xl bg-[#05050A] p-12 md:p-24 text-center overflow-hidden mb-32 shadow-2xl shadow-blue-900/10"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`video-`}
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
                  className="h-full w-full object-cover "
                >
                  <source src="/video/animate4.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/20 blur-[120px] translate-x-1/2 translate-y-1/2" />
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-3xl text-white shadow-2xl"
            >
              <HiOutlineShieldCheck />
            </motion.div>

            <h2 className="mb-8 font-jakarta text-5xl font-black leading-none tracking-tighter text-white sm:text-7xl lg:text-8xl uppercase">
              Mulai <span className="text-gray-600 italic">Bicara.</span>
            </h2>

            <p className="mb-12 max-w-lg text-base font-medium text-white leading-relaxed">
              Bergabunglah dengan ribuan pengirim pesan yang telah menemukan
              ketenangan melalui kejujuran tanpa jejak digital.
            </p>

            <button className="group relative flex items-center gap-4 rounded-full bg-white px-12 py-5 text-sm lg:font-black lg:uppercase tracking-[0.2em] text-black transition-all hover:bg-blue-500 hover:text-white active:scale-95 shadow-xl cursor-pointer">
              Generate Link
              <HiOutlineArrowRight className="text-lg transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </motion.div>

        {/* 2. NAVIGASI & BRANDING */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-white text-xl font-black italic">
                H
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
                HonestLy.
              </span>
            </div>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-slate-400">
              Platform pengakuan anonim berbasis AI yang mengutamakan privasi
              dan transparansi data di setiap transmisi.
            </p>
            <div className="flex items-center gap-4 text-xl text-slate-300">
              <FaInstagram className="hover:text-slate-900 transition-colors cursor-pointer" />
              <FaTwitter className="hover:text-slate-900 transition-colors cursor-pointer" />
              <FaGithub className="hover:text-slate-900 transition-colors cursor-pointer" />
              <FaWhatsapp className="hover:text-slate-900 transition-colors cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-[10px] font-black tracking-[0.4em] text-slate-900 uppercase">
              Produk
            </h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li className="hover:text-slate-900 transition-colors cursor-pointer tracking-tight">
                Generate Link
              </li>
              <li className="hover:text-slate-900 transition-colors cursor-pointer tracking-tight">
                Magic Rewrite
              </li>
              <li className="hover:text-slate-900 transition-colors cursor-pointer tracking-tight">
                Security Protocol
              </li>
              <li className="hover:text-slate-900 transition-colors cursor-pointer tracking-tight">
                Enterprise
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-[10px] font-black tracking-[0.4em] text-slate-900 uppercase">
              Keamanan
            </h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li className="hover:text-slate-900 transition-colors cursor-pointer tracking-tight">
                Kebijakan Privasi
              </li>
              <li className="hover:text-slate-900 transition-colors cursor-pointer tracking-tight">
                Zero-Logs Policy
              </li>
              <li className="hover:text-slate-900 transition-colors cursor-pointer tracking-tight">
                Audit Keamanan
              </li>
              <li className="hover:text-slate-900 transition-colors cursor-pointer tracking-tight">
                Status Sistem
              </li>
            </ul>
          </div>
        </div>

        {/* 3. COPYRIGHT & BOTTOM BAR */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600 uppercase">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              System Operational
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-[10px] font-bold text-slate-400 uppercase">
              <HiOutlineGlobeAlt className="text-xs" />
              ID / EN
            </div>
          </div>

          <p className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
            © {currentYear} MaJdev Lab. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
