"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineChatBubbleLeftRight,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";
import { HiOutlineHome, HiOutlineLightningBolt } from "react-icons/hi";

const navLinks = [
  { name: "Home", id: "home", icon: <HiOutlineHome /> },
  { name: "Fitur", id: "features", icon: <HiOutlineCube /> },
  { name: "Privasi", id: "security", icon: <HiOutlineShieldCheck /> },
  { name: "Kesan", id: "testimonials", icon: <HiOutlineChatBubbleLeftRight /> },
  { name: "FAQ", id: "faq", icon: <HiOutlineQuestionMarkCircle /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Jika user men-scroll ke paling atas, otomatis aktifkan Home
      if (window.scrollY < 50) {
        setActiveTab("home");
      }
    };

    // 1. Logika Scroll Spy menggunakan Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Deteksi saat elemen berada di tengah layar
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Jangan update activeTab jika scroll dipicu oleh klik button (biar gak loncat-loncat)
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      isClickScrolling.current = true; // Kunci observer
      setActiveTab(id);

      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === "home" ? 0 : offsetPosition,
        behavior: "smooth",
      });

      // Lepas kunci setelah animasi smooth scroll selesai
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  return (
    <>
      {/* --- HEADER (Desktop & Mobile Top) --- */}
      <nav className="fixed inset-x-0 top-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            pointer-events-auto flex w-full max-w-7xl items-center justify-between rounded-3xl border px-4 md:px-6 py-2 md:py-3 transition-all duration-500
            ${isScrolled ? "border-white/40 bg-white/60 shadow-2xl backdrop-blur-xl md:py-4" : "border-transparent bg-transparent"}
          `}
        >
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-slate-900 p-1 shadow-lg transition-transform group-hover:rotate-12">
              <img
                src="/images/logo.png"
                alt="logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-jakarta text-lg md:text-xl font-black tracking-tighter text-slate-900 uppercase">
              HonestLy.
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`group relative flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase transition-all border-none bg-transparent outline-none cursor-pointer
                    ${isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
                >
                  <span
                    className={`text-base transition-transform ${isActive ? "-translate-y-1" : ""}`}
                  >
                    {link.icon}
                  </span>
                  {link.name}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-0.5 w-full bg-slate-900"
                      />
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <button className="flex items-center gap-2 rounded-xl md:rounded-2xl bg-slate-900 px-4 py-2 md:px-6 md:py-3 text-[9px] md:text-[10px] font-black tracking-widest text-white transition-all hover:bg-blue-600 shadow-xl border-none outline-none cursor-pointer">
            <HiOutlineLightningBolt className="text-sm" />
            <span className="hidden sm:inline">MULAI SEKARANG</span>
            <span className="sm:hidden text-[8px]">MULAI</span>
          </button>
        </motion.div>
      </nav>

      {/* --- MOBILE DOCK (Bottom Navigation) --- */}
      <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-6 md:hidden">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative flex w-full items-center justify-around rounded-[2.5rem] border border-white/40 bg-white/80 px-2 pb-2 shadow-2xl backdrop-blur-2xl"
        >
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;

            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative flex h-14 w-14 items-center justify-center rounded-full bg-transparent border-none outline-none transition-all active:scale-75"
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="nav-notch-mobile"
                      className="absolute -top-10 h-20 w-20 flex justify-center pointer-events-none"
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.6,
                      }}
                    >
                      <div className="relative h-16 w-16">
                        <div className="absolute -left-4.5 top-8 h-6 w-6 rounded-tr-[22px] shadow-[8px_-8px_0_0_rgba(255,255,255,0.8)]" />
                        <div className="h-16 w-16 rounded-full border-[6px] border-white/40 bg-transparent backdrop-blur-sm" />
                        <div className="absolute -right-4.5 top-8 h-6 w-6 rounded-tl-[22px] shadow-[-8px_-8px_0_0_rgba(255,255,255,0.8)]" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.span
                  animate={{
                    y: isActive ? -32 : 0,
                    scale: isActive ? 1.4 : 1,
                    color: isActive ? "#0F172A" : "#94A3B8",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative z-50 text-2xl drop-shadow-md"
                >
                  {link.icon}
                </motion.span>

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 16 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute text-[8px] font-black tracking-tighter text-slate-900 uppercase italic"
                    >
                      {link.name}
                    </motion.span>
                  )}
                </AnimatePresence>

                {isActive && (
                  <motion.div
                    layoutId="nav-dot-mobile"
                    className="absolute -bottom-1 h-1.5 w-4 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)] blur-[1px]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
