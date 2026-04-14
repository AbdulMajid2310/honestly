"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

const testimonials = [
  // Baris 1
  {
    quote: "Akhirnya bisa confess ke doi tanpa malu. Lega banget!",
    user: "@anon_jkt",
    color: "from-blue-50",
  },
  {
    quote: "AI Rewrite-nya ajaib! Pesan marah jadi puitis.",
    user: "@user9921",
    color: "from-fuchsia-50",
  },
  {
    quote: "Jujur itu mahal, tapi di sini gratis dan aman.",
    user: "@pejuang_jujur",
    color: "from-cyan-50",
  },
  {
    quote: "Gak nyangka dia balas, padahal pake link anonim.",
    user: "@ghosting_victim",
    color: "from-emerald-50",
  },
  // Baris 2
  {
    quote: "Fitur Zero-Logs bikin tenang cerita apa aja.",
    user: "@privacy_nut",
    color: "from-orange-50",
  },
  {
    quote: "Link bio IG langsung rame DM jujur. Seru!",
    user: "@selebgram_lokal",
    color: "from-indigo-50",
  },
  {
    quote: "Tumpahin unek-unek kantor tanpa takut di-Pecat.",
    user: "@karyawan_biasa",
    color: "from-rose-50",
  },
  {
    quote: "Terima kasih HonestLy, beban mental berkurang.",
    user: "@mental_health",
    color: "from-teal-50",
  },
];

function TestimonialCard({ quote, user, color }: (typeof testimonials)[0]) {
  return (
    <div
      className={`mx-4 flex flex-col justify-between w-87.5 h-45 p-8 rounded-4xl bg-white/2 backdrop-blur-xs border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:border-slate-200 transition-all duration-300 group overflow-hidden relative`}
    >
      {/* Decorative Light Glow */}
      <div
        className={`absolute -inset-10 bg-radial-to-br ${color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-0`}
      />

      <div className="relative z-10 space-y-4">
        <HiOutlineChatBubbleBottomCenterText className="text-3xl text-slate-300 group-hover:text-slate-500 transition-colors" />
        <p className="text-base font-medium leading-relaxed text-black tracking-tight">
          “{quote}”
        </p>
      </div>

      <div className="relative z-10 flex items-center gap-3 border-t border-slate-100 pt-4">
        <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-black text-white uppercase tracking-wider">
          {user.substring(1, 3)}
        </div>
        <p className="text-xs font-bold text-black tracking-wide">{user}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);

  return (
    <section className="py-10 overflow-hidden relative">
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
              <source src="/video/animate5.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-x-0 top-0 h-10 bg-linear-to-b from-slate-200 to-transparent backdrop-blur-sm" />
            <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-slate-200 to-transparent backdrop-blur-sm" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 mb-8 text-center">
        {/* Header Elegan */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white border border-slate-100 mb-6 shadow-sm"
        >
          <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
            Vox Populi
          </span>
        </motion.div>

        <h2 className="font-jakarta text-slate-900 text-4xl font-black tracking-tighter sm:text-5xl  uppercase leading-[0.85]">
          Suara <br />
          <span className="bg-linear-to-b from-slate-900 via-slate-500 to-slate-200 bg-clip-text text-transparent italic">
            Kejujuran.
          </span>
        </h2>
      </div>

      {/* Testimonial Marquee Rows */}
      <div className="relative space-y-8 z-10">
        {/* Row 1: Left to Right */}
        <Marquee
          speed={40}
          gradient={true}
          gradientColor="#FAFAFC"
          gradientWidth={150}
        >
          {row1.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </Marquee>

        {/* Row 2: Right to Left */}
        <Marquee
          speed={35}
          direction="right"
          gradient={true}
          gradientColor="#FAFAFC"
          gradientWidth={150}
        >
          {row2.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </Marquee>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-[#FAFAFC] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-[#FAFAFC] to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
