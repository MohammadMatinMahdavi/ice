"use client";

import { useState } from "react";
import { ArrowUpLeft, Menu, X } from "lucide-react";

type HeaderProps = { onReveal: () => void };

export function Header({ onReveal }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "خدمات", href: "#services" },
    { label: "نمونه‌کارها", href: "#portfolio", reveal: true },
    { label: "سؤالات", href: "#faq", reveal: true },
    { label: "تماس", href: "#contact" },
  ];
  const navigate = (href: string, reveal?: boolean) => {
    setOpen(false);
    if (reveal) {
      onReveal();
      window.setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" }), 90);
    }
  };
  return <header className="site-header"><div className="container"><div className="nav-shell">
    <a href="#home" className="brand-lockup"><span className="brand-symbol">✳</span><span>ICE<small>CREATIVE STUDIO</small></span></a>
    <nav className="desktop-nav">{links.map(link => <a key={link.href} href={link.href} onClick={event => { if (link.reveal) { event.preventDefault(); navigate(link.href, true); } }}>{link.label}</a>)}</nav>
    <a href="#contact" className="button button-primary nav-cta">شروع پروژه <ArrowUpLeft size={16} /></a>
    <button className="mobile-toggle" aria-label="منو" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div>{open && <nav className="mobile-nav">{links.map(link => <a key={link.href} href={link.href} onClick={event => { if (link.reveal) { event.preventDefault(); navigate(link.href, true); } else setOpen(false); }}>{link.label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>شروع پروژه</a></nav>}</div></header>;
}
