"use client";

import { Aperture, ArrowUpLeft, Bot, Clapperboard, Palette } from "lucide-react";

type Props = { onReveal: () => void; onToggle: () => void; expanded: boolean };

const cards = [
  { title: "تصویر و کمپین محصول", sub: "PRODUCTS · CAMPAIGNS · AI VISUALS", icon: Aperture, tone: "violet", image: "/images/services/01-product-visuals.jpg", href: "#ai-services" },
  { title: "ویدیو و محتوای متحرک", sub: "ADS · MOTION · CGI & 3D", icon: Clapperboard, tone: "pink", image: "/images/services/02-video-motion.jpg", href: "#ai-services" },
  { title: "برند و ارتباطات", sub: "DESIGN · CONTENT · MARKETING", icon: Palette, tone: "cyan", image: "/images/services/03-brand-identity.jpg", href: "#creative-services" },
  { title: "راهکارهای هوشمند", sub: "CHATBOTS · APPS · AUTOMATION", icon: Bot, tone: "lime", image: "/images/services/04-smart-solutions.jpg", href: "#ai-services" },
];

export function WhatWeDo({ onReveal, onToggle, expanded }: Props) {
  const revealAndGo = (href: string) => {
    onReveal();
    window.setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  return <section className="hm-section hm-what-we-do hm-what-we-do-premium" id="services"><div className="container">
    <div className="hm-section-heading"><div><span className="eyebrow"><span className="eyebrow-mark" /> WHAT WE CREATE</span><h2>از ایده تا <span className="gradient-type">اثرگذاری.</span></h2></div><p className="hm-what-intro">چهار مسیر اصلی برای ساختن تجربه‌هایی که برندت را متمایز می‌کنند.</p></div>
    <div className="hm-category-grid">{cards.map((card, i) => <button type="button" className={"hm-category-card hm-category-card-premium hm-category-image-card tone-" + card.tone} key={card.title} onClick={() => revealAndGo(card.href)}>
      <img className="hm-category-card-image" src={card.image} alt="" loading="lazy" />
      <span className="hm-category-card-shade" aria-hidden="true" />
      <span className="hm-category-index">0{i + 1}</span>
      <span className="hm-category-icon"><card.icon size={24} strokeWidth={1.7} /></span>
      <span className="hm-category-copy"><b>{card.title}</b><small>{card.sub}</small></span>
      <span className="hm-category-action" aria-hidden="true"><ArrowUpLeft size={18} /></span>
    </button>)}</div>
    <div className="hm-reveal-wrap"><button className={"hm-reveal-button" + (expanded ? " is-expanded" : "")} type="button" onClick={onToggle}><span className="hm-reveal-label">{expanded ? "بستن جزئیات خدمات و نمونه‌کارها" : "مشاهده نمونه‌کارها، خدمات و قیمت‌ها"}</span><span className="hm-reveal-icon"><ArrowUpLeft size={19} /></span></button><small>{expanded ? "تمام بخش‌های پروژه و خدمات نمایش داده شده‌اند." : "نمونه‌کارها، جزئیات خدمات و راهنمای سفارش در ادامه"}</small></div>
  </div></section>;
}
