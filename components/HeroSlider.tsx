"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  { src: "/images/hero/banner-07.webp", alt: "Ilustración de viales Q-PEPTIDES en un laboratorio" },
  { src: "/images/hero/banner-09.webp", alt: "Ilustración de un vial de Retatrutida Q-PEPTIDES en un laboratorio" },
];

export default function HeroSlider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPlaying(!preference.matches);
    const update = () => setPlaying(!preference.matches);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!playing || hovered) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [playing, hovered, active]);

  function select(index: number) {
    setPlaying(false);
    setActive((index + slides.length) % slides.length);
  }

  return (
    <section aria-label="Presentación Q-PEPTIDES" aria-roledescription="carrusel"
      className="relative mt-24 bg-white lg:min-h-[640px] lg:aspect-video"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setPlaying(false)}>
      <div className="relative aspect-video lg:absolute lg:inset-0 lg:aspect-auto">
        {slides.map((slide, index) => (
          <div key={slide.src} aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${index === active ? "opacity-100" : "opacity-0"}`}>
            <Image src={slide.src} alt={slide.alt} fill sizes="100vw" quality={85}
              priority={index === 0} loading={index === 0 ? undefined : "lazy"}
              className="object-contain" />
          </div>
        ))}
      </div>
      <div className="relative py-10 lg:absolute lg:inset-0 lg:flex lg:items-center lg:py-16">
        <div className="container-main w-full">
          <div className="max-w-xl lg:w-[48%]">{children}</div>
        </div>
      </div>
      <div className="relative z-10 container-main pb-6 lg:absolute lg:bottom-6 lg:left-0 lg:right-0 lg:pb-0">
        <div className="inline-flex items-center gap-1 rounded-full border border-[#003366]/15 bg-white/95 p-1 text-[#003366] shadow-sm">
          <button type="button" aria-label="Banner anterior" onClick={() => select(active - 1)} className="h-11 w-11 flex items-center justify-center rounded-full hover:bg-[#F3F8FD]"><ChevronLeft size={20} /></button>
          {slides.map((slide, index) => (
            <button key={slide.src} type="button" aria-label={`Mostrar banner ${index + 1}`} aria-pressed={active === index}
              onClick={() => select(index)} className="h-11 w-11 flex items-center justify-center rounded-full hover:bg-[#F3F8FD]">
              <span className={`h-2.5 rounded-full ${active === index ? "w-6 bg-[#003366]" : "w-2.5 bg-[#4A657A]/40"}`} />
            </button>
          ))}
          <button type="button" aria-label="Banner siguiente" onClick={() => select(active + 1)} className="h-11 w-11 flex items-center justify-center rounded-full hover:bg-[#F3F8FD]"><ChevronRight size={20} /></button>
          <button type="button" aria-label={playing ? "Pausar presentación" : "Reproducir presentación"} onClick={() => setPlaying(!playing)} className="h-11 w-11 flex items-center justify-center rounded-full hover:bg-[#F3F8FD]">{playing ? <Pause size={18} /> : <Play size={18} />}</button>
        </div>
        <span className="sr-only" aria-live={playing ? "off" : "polite"}>Banner {active + 1} de {slides.length}</span>
      </div>
    </section>
  );
}
