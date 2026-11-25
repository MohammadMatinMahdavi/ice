"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownLeft, ArrowUpLeft } from "lucide-react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("سلام ICE، می‌خواهم درباره شروع یک پروژه مشاوره بگیرم.")}`
  : "https://wa.me/";

function WhatsAppMark() {
  return <svg viewBox="0 0 32 32" aria-hidden="true" className="whatsapp-mark"><path fill="currentColor" d="M16.02 3.2A12.66 12.66 0 0 0 5.1 22.25L3.35 28.7l6.6-1.72A12.7 12.7 0 1 0 16.02 3.2Zm0 23.2a10.5 10.5 0 0 1-5.35-1.47l-.38-.22-3.92 1.02 1.05-3.82-.25-.4a10.55 10.55 0 1 1 8.85 4.89Zm5.8-7.9c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.52-.16-.74.16-.22.33-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.33-.16-1.38-.51-2.63-1.62-.97-.86-1.63-1.92-1.82-2.25-.19-.32-.02-.5.14-.66.14-.14.32-.38.49-.57.16-.19.22-.33.32-.55.11-.22.06-.41-.02-.57-.08-.16-.74-1.78-1.02-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.1-1.14 2.7s1.17 3.13 1.33 3.35c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.86.69.78.25 1.49.22 2.05.13.63-.1 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.62-.38Z"/></svg>;
}

export function Hero() {
  const reduced = useReducedMotion();
  return <section className="hm-hero hm-hero-centered" id="home">
    <div className="hm-hero-noise" aria-hidden="true" />
    <div className="hm-hero-glow hm-hero-glow-a" aria-hidden="true" />
    <div className="hm-hero-glow hm-hero-glow-b" aria-hidden="true" />
    {!reduced && <div className="hm-hero-grid" aria-hidden="true"><i /><i /><i /><i /><i /></div>}
    <div className="container hm-hero-inner">
      <motion.div className="hm-hero-copy hm-hero-copy-centered" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [.22, 1, .36, 1] }}>
        <span className="eyebrow"><span className="eyebrow-mark" /> ICE CREATIVE STUDIO · AI POWERED</span>
        <h1>ایده‌های بزرگ،<br /><span className="gradient-type">تجربه‌های ماندگار.</span></h1>
        <p className="hm-hero-subtitle">از تصویر و ویدیو تا برندینگ و سیستم‌های هوشمند؛ برای رشد کسب‌وکارت، راه‌حل خلاق می‌سازیم.</p>
        <div className="hm-hero-capabilities"><span>VISUALS</span><i /> <span>VIDEO</span><i /> <span>BRANDING</span><i /> <span>AI SYSTEMS</span></div>
        <a className="hm-whatsapp-cta" href={whatsappHref} target="_blank" rel="noreferrer">
          <span className="hm-whatsapp-icon"><WhatsAppMark /></span>
          <span className="hm-whatsapp-copy"><small>LET’S TALK ON WHATSAPP</small><b>شروع گفت‌وگو با ICE</b></span>
          <span className="hm-whatsapp-arrow"><ArrowUpLeft size={21} /></span>
        </a>
        <span className="hm-hero-microcopy">یک پیام کوتاه کافی است؛ باقی مسیر را با هم پیدا می‌کنیم.</span>
      </motion.div>
    </div>
    <div className="container hm-hero-bottom">
      <span><i /> OPEN FOR SELECT PROJECTS</span>
      <a href="#services">کشف دنیای ICE <ArrowDownLeft size={14} /></a>
      <span>CREATIVE × AI × DIGITAL</span>
    </div>
  </section>;
}
