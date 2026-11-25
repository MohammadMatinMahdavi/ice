"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownLeft, ArrowUpLeft, MoveUpRight, Send, Sparkles, Menu, X, Check, Clapperboard, Aperture, Workflow, Bot, Video, Palette, Globe, Instagram, Package, Megaphone } from "lucide-react";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const projects = [
  { no: "01", title: "فرم تازه‌ای از هویت", type: "BRAND IDENTITY", image: "https://images.unsplash.com/photo-1634942536790-2537db6a2b9b?auto=format&fit=crop&w=1200&q=85", size: "work-large" },
  { no: "02", title: "تصویرسازی محصول", type: "AI PRODUCT VISUAL", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=85", size: "" },
  { no: "03", title: "روایت در حرکت", type: "CAMPAIGN / MOTION", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85", size: "" },
  { no: "04", title: "زبان بصری مینیمال", type: "ART DIRECTION", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85", size: "work-wide" },
  { no: "05", title: "جزئیات، هویت می‌سازند", type: "CREATIVE CONTENT", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85", size: "" },
  { no: "06", title: "از ایده تا تجربه", type: "DIGITAL EXPERIENCE", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=85", size: "" },
];

const aiServices = [
  { icon: Package, title: "تصویرسازی محصول با AI", desc: "تصاویر استودیویی و کمپین‌های محصول، بدون محدودیت‌های یک عکاسی سنتی.", from: "شروع از brief شما", tag: "AI VISUALS", tone: "violet" },
  { icon: Video, title: "ویدیو و تبلیغات هوشمند", desc: "ویدیوهای تبلیغاتی، ریلز و روایت‌های متحرک با کنترل هنری دقیق.", from: "پروژه‌ای", tag: "VIDEO / MOTION", tone: "pink" },
  { icon: Aperture, title: "CGI و محتوای سه‌بعدی", desc: "تجربه‌های سه‌بعدی و تصویرسازی‌هایی که توجه را متوقف می‌کنند.", from: "پروژه‌ای", tag: "3D / CGI", tone: "cyan" },
  { icon: Bot, title: "چت‌بات و دستیار هوشمند", desc: "پاسخ‌گویی، دریافت سرنخ و خودکارسازی ارتباط با مشتریان.", from: "راهکار اختصاصی", tag: "AI SYSTEMS", tone: "lime" },
  { icon: Globe, title: "وب‌سایت و ابزار دیجیتال", desc: "وب‌سایت، لندینگ‌پیج و ابزارهای دیجیتال هماهنگ با هدف کسب‌وکار.", from: "راهکار اختصاصی", tag: "WEB / DIGITAL", tone: "violet" },
  { icon: Workflow, title: "اتوماسیون و گردش کار", desc: "اتصال ابزارها و حذف کارهای تکراری برای یک جریان کاری هوشمندتر.", from: "راهکار اختصاصی", tag: "AUTOMATION", tone: "cyan" },
];

const creativeGroups = [
  { icon: Palette, title: "طراحی و هویت برند", items: ["طراحی هویت بصری و لوگو", "طراحی پست و استوری شبکه‌های اجتماعی", "بسته‌بندی و اقلام چاپی", "پروفایل و پرزنتیشن شرکتی"] },
  { icon: Clapperboard, title: "ویدیو و موشن", items: ["ریلز و ویدیوهای کوتاه", "تیزر و ویدیوی معرفی محصول", "موشن گرافیک و انیمیشن لوگو", "سناریو و ایده‌پردازی تبلیغاتی"] },
  { icon: Megaphone, title: "مارکتینگ و رشد", items: ["استراتژی محتوا و کمپین", "مدیریت محتوای شبکه‌های اجتماعی", "ایده‌پردازی و اجرای تبلیغات", "تحلیل و بهینه‌سازی حضور دیجیتال"] },
  { icon: Instagram, title: "دیجیتال و تجربه کاربر", items: ["طراحی وب‌سایت و لندینگ‌پیج", "طراحی تجربه و رابط کاربری", "فروشگاه آنلاین", "مشاوره محصول دیجیتال"] },
];

const faqs = [
  ["ICE چه خدماتی ارائه می‌دهد؟", "از تولید محتوای هوشمند و ویدیوهای تبلیغاتی تا هویت بصری، استراتژی محتوا، طراحی وب و راهکارهای AI؛ خدمات را متناسب با مسئله‌ی هر برند کنار هم قرار می‌دهیم."],
  ["قیمت خدمات چطور مشخص می‌شود؟", "هزینه به محدوده پروژه، تعداد خروجی‌ها، زمان‌بندی و سطح اجرا بستگی دارد. بعد از دریافت brief، پیشنهاد شفاف و متناسب با نیازتان ارائه می‌کنیم."],
  ["آیا برای شروع باید brief کامل داشته باشم؟", "نه. کافی است هدف یا چالشتان را با ما مطرح کنید. در گفت‌وگوی اولیه کمک می‌کنیم نیاز را دقیق‌تر تعریف کنیم."],
  ["آیا از هوش مصنوعی در همه پروژه‌ها استفاده می‌کنید؟", "فقط جایی که ارزش واقعی ایجاد کند. انتخاب ابزار با توجه به کیفیت، هویت برند و نتیجه‌ی مورد انتظار انجام می‌شود و خروجی با نظارت خلاق انسانی شکل می‌گیرد."],
  ["زمان تحویل پروژه چقدر است؟", "زمان‌بندی پس از مشخص‌شدن محدوده و خروجی‌ها اعلام می‌شود. پروژه‌های کوچک و کمپین‌های بزرگ مسیر اجرایی متفاوتی دارند."],
  ["با برندهای خارج از ایران هم همکاری می‌کنید؟", "بله؛ امکان همکاری ریموت و اجرای پروژه برای برندها و تیم‌های مختلف وجود دارد."],
];

const reveal = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: .6, ease: [.22, 1, .36, 1] as const } } };

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["نمونه‌کارها", "#work"], ["خدمات", "#services"], ["مدل همکاری", "#creative"], ["فرآیند", "#process"], ["سؤالات", "#faq"]];
  return <header className="site-header"><div className="container"><div className="nav-shell">
    <a href="#home" className="brand-lockup"><span className="brand-symbol">✳</span><span>ICE<small>CREATIVE STUDIO</small></span></a>
    <nav className="desktop-nav">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <a href="#contact" className="button button-primary nav-cta">شروع یک پروژه <ArrowUpLeft size={16} /></a>
    <button className="mobile-toggle" aria-label="باز کردن منو" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div>{open && <nav className="mobile-nav">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>شروع همکاری</a></nav>}</div></header>;
}

function Hero() {
  const reduced = useReducedMotion();
  const [prompt, setPrompt] = useState("");
  const [sent, setSent] = useState(false);
  const ideas = ["برای محصولم تصاویر تبلیغاتی می‌خوام", "به یک کمپین خلاق نیاز دارم", "می‌خوام برندم رو از نو بسازم"];
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (prompt.trim()) setSent(true); };
  const mail = "mailto:hello@ice.studio?subject=" + encodeURIComponent("شروع پروژه با ICE") + "&body=" + encodeURIComponent(prompt);
  return <section className="hero-v2" id="home">
    <div className="hero-grid-lines" /><div className="hero-glow hero-glow-violet" /><div className="hero-glow hero-glow-cyan" />
    {!reduced && <div className="hero-particles" aria-hidden="true">{Array.from({ length: 20 }, (_, i) => <motion.i key={i} style={{ left: ((i * 37) % 100) + "%", top: ((i * 53) % 100) + "%" }} animate={{ y: [0, -13, 3, 0], opacity: [.15, .75, .2], scale: [.8, 1.2, .8] }} transition={{ duration: 5 + (i % 5), repeat: Infinity, delay: i * .13 }} />)}</div>}
    <div className="container hero-layout">
      <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .12 } } }}>
        <motion.div variants={reveal} className="eyebrow"><span className="eyebrow-mark" /> CREATIVE STUDIO · AI POWERED</motion.div>
        <motion.h1 variants={reveal}>خلاقیت،<br /><span className="gradient-type">برای رشد</span> کسب‌وکار.</motion.h1>
        <motion.p variants={reveal}>از تصویر و ویدیو تا سیستم‌های هوشمند و تجربه‌های دیجیتال؛ ایده‌ات را به چیزی تبدیل می‌کنیم که دیده شود، به یاد بماند و اثر بگذارد.</motion.p>
        <motion.div variants={reveal} className="hero-ctas"><a href="#services" className="button button-primary">کشف خدمات ICE <ArrowUpLeft size={17} /></a><a href="#work" className="text-link">دیدن پروژه‌ها <ArrowUpLeft size={15} /></a></motion.div>
        <motion.div variants={reveal} className="hero-meta"><span className="status-pip" /> برای پروژه‌های منتخب آماده‌ایم <span className="meta-line" /></motion.div>
      </motion.div>
      <motion.div className="brief-card-wrap" initial={{ opacity: 0, y: 28, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .8, delay: .2 }}>
        <div className="brief-card">
          <div className="brief-top"><div className="brief-brand"><span className="brief-icon"><Sparkles size={18} /></span><div><b>ICE PROJECT STARTER</b><small>شروع یک تجربه‌ی تازه</small></div></div><span className="ready-tag"><i /> READY</span></div>
          <div className="brief-intro"><span className="brief-avatar"><Sparkles size={16} /></span><div><small>ICE STUDIO · خوش آمدی</small><p>سلام! برای کسب‌وکارت چه چیزی می‌سازیم؟ از هدفت بگو؛ حتی اگر هنوز ایده‌ات کامل نیست.</p></div></div>
          {sent && <div className="brief-user-message"><small>شرح اولیه‌ی پروژه</small><p>{prompt}</p><a href={mail}>ارسال درخواست به ICE <ArrowUpLeft size={14} /></a></div>}
          <form className="brief-form" onSubmit={submit}><label htmlFor="project-brief">چه چیزی در ذهنته؟</label><textarea id="project-brief" value={prompt} onChange={event => { setPrompt(event.target.value); setSent(false); }} placeholder="مثلاً برای برند پوشاکم یک کمپین خلاق می‌خوام که در شبکه‌های اجتماعی دیده بشه..." rows={3} /><div className="brief-form-bottom"><span>از یک جمله شروع کن؛ جزئیات را با هم پیدا می‌کنیم.</span><button aria-label="ثبت ایده" type="submit" disabled={!prompt.trim()}><Send size={16} /></button></div></form>
          <div className="brief-suggestions"><span>برای شروع:</span>{ideas.map(idea => <button key={idea} type="button" onClick={() => { setPrompt(idea); setSent(false); }}>{idea}</button>)}</div>
          <div className="brief-secure"><Check size={13} /> درخواست اولیه؛ پاسخ‌گویی از طریق ایمیل</div>
        </div>
        <div className="floating-note note-top"><span>✳</span> IDEAS INTO IMPACT</div><div className="floating-note note-bottom"><span /> CREATIVE / AI / DIGITAL</div>
      </motion.div>
    </div>
    <div className="container hero-bottomline"><span>INDEPENDENT CREATIVE STUDIO · 2026</span><a href="#work">برای کشف بیشتر اسکرول کن <ArrowDownLeft size={14} /></a></div>
  </section>;
}

function Ticker() {
  const words = ["AI VISUALS", "BRAND IDENTITY", "VIDEO & MOTION", "SMART SYSTEMS", "DIGITAL EXPERIENCES", "CREATIVE CAMPAIGNS"];
  return <div className="ticker"><div className="ticker-track">{[...words, ...words].map((word, i) => <span key={i}>{word}<i>✳</i></span>)}</div></div>;
}

function Work() {
  return <section className="section-v2 work-section" id="work"><div className="container">
    <div className="section-head-row"><div><div className="eyebrow"><span className="eyebrow-mark" /> SELECTED WORK / CREATIVE DIRECTIONS</div><h2 className="section-title">نمونه‌هایی از <span className="gradient-type">جهان ICE.</span></h2></div><p className="section-intro">هر پروژه یک مسئله‌ی تازه و یک زبان بصری منحصربه‌فرد است. این مسیرهای منتخب، گستره‌ی نگاه خلاق ما را نشان می‌دهند.</p></div>
    <div className="project-grid">{projects.map((project, index) => <motion.a href="#contact" key={project.no} className={"project-card " + project.size} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, delay: index * .06 }}><img src={project.image} alt={project.title} loading="lazy" /><div className="project-shade" /><span className="project-number">{project.no} / 06</span><span className="project-arrow"><ArrowUpLeft size={20} /></span><div className="project-caption"><small>{project.type}</small><h3>{project.title}</h3></div></motion.a>)}</div>
    <p className="work-note">تصاویر فعلی کانسپت‌های بصری برای نمایش سبک اجرا هستند و با پروژه‌های واقعی ICE قابل جایگزینی‌اند.</p>
  </div></section>;
}

function Services() {
  return <section className="section-v2 services-section" id="services"><div className="container">
    <div className="eyebrow"><span className="eyebrow-mark" /> WHAT WE BUILD WITH AI</div>
    <div className="section-head-row services-heading"><h2 className="section-title">تکنولوژی در خدمت <span className="gradient-type">ایده‌ها.</span></h2><div><p className="section-intro">یک خروجی مشخص می‌خواهی یا یک راهکار کامل؟ خدمات هوشمند ICE برای پاسخ به نیازهای واقعی کسب‌وکار طراحی شده‌اند.</p><a href="#contact" className="text-link">همه خدمات را بررسی کنیم <ArrowUpLeft size={15} /></a></div></div>
    <div className="ai-service-grid">{aiServices.map((service, index) => <motion.a href="#contact" className={"ai-service-card tone-" + service.tone} key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: index * .06 }} whileHover={{ y: -7 }}><div className="ai-service-top"><span className="ai-service-icon"><service.icon size={22} /></span><span className="ai-service-tag">{service.tag}</span></div><h3>{service.title}</h3><p>{service.desc}</p><div className="ai-service-bottom"><span>{service.from}</span><i><ArrowUpLeft size={17} /></i></div></motion.a>)}</div>
  </div></section>;
}

function CreativeServices() {
  return <section className="section-v2 creative-section" id="creative"><div className="container">
    <div className="section-head-row"><div><div className="eyebrow"><span className="eyebrow-mark" /> CREATIVE & MARKETING</div><h2 className="section-title">و هرآنچه یک برند برای <span className="gradient-type">درخشیدن</span> نیاز دارد.</h2></div><p className="section-intro">از یک طراحی کوچک تا یک مسیر کامل برند؛ همه‌چیز با توجه به هویت، مخاطب و هدف کسب‌وکار شکل می‌گیرد.</p></div>
    <div className="creative-grid">{creativeGroups.map((group, index) => <motion.article className="creative-card" key={group.title} whileHover={{ y: -5 }} transition={{ duration: .25 }}><div className="creative-card-head"><span><group.icon size={20} /></span><small>0{index + 1} / SERVICE</small></div><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}><span>{item}</span><ArrowUpLeft size={14} /></li>)}</ul><a href="#contact">دریافت مشاوره <MoveUpRight size={14} /></a></motion.article>)}</div>
    <div className="custom-brief"><div><span className="eyebrow"><span className="eyebrow-mark" /> NOT SURE WHERE TO START?</span><h3>هدفت را بگو؛ مسیر مناسب را پیشنهاد می‌دهیم.</h3></div><a className="button button-primary" href="#contact">دریافت پیشنهاد اختصاصی <ArrowUpLeft size={16} /></a></div>
  </div></section>;
}

function Process() {
  const steps = [{ n: "01", title: "نیاز و هدف را می‌شناسیم", desc: "در یک گفت‌وگوی کوتاه، مسئله، مخاطب و نتیجه‌ی مورد انتظار را مشخص می‌کنیم." }, { n: "02", title: "مسیر و پیشنهاد را می‌سازیم", desc: "خروجی‌ها، زمان‌بندی و هزینه را شفاف می‌کنیم و مسیر خلاق را به توافق می‌رسانیم." }, { n: "03", title: "اجرا، بازبینی و تحویل", desc: "با ترکیب ابزارهای مناسب و نظارت انسانی، ایده را به خروجی نهایی تبدیل می‌کنیم." }];
  return <section className="section-v2 process-section" id="process"><div className="container"><div className="section-head-row"><div><div className="eyebrow"><span className="eyebrow-mark" /> HOW IT WORKS</div><h2 className="section-title">سه قدم تا <span className="gradient-type">شروع.</span></h2></div><p className="section-intro">فرآیند همکاری را ساده و شفاف نگه می‌داریم؛ از اولین پیام تا تحویل خروجی نهایی.</p></div><div className="process-grid">{steps.map((step, index) => <motion.article className="process-card" key={step.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}><span className="process-number">{step.n}</span><div className="process-marker"><i /></div><h3>{step.title}</h3><p>{step.desc}</p></motion.article>)}</div></div></section>;
}

function FAQ() {
  return <section className="section-v2 faq-section" id="faq"><div className="container faq-layout"><div><div className="eyebrow"><span className="eyebrow-mark" /> GOOD TO KNOW</div><h2 className="section-title">سؤال داری؟<br /><span className="gradient-type">اینجا جوابش هست.</span></h2><p className="section-intro">اگر هنوز ابهامی باقی مانده، خوشحال می‌شویم مستقیم درباره‌اش صحبت کنیم.</p><a className="text-link" href="#contact">با ما در ارتباط باش <ArrowUpLeft size={15} /></a></div><Accordion type="single" collapsible className="faq-list">{faqs.map(([question, answer], index) => <AccordionItem value={"item-" + index} key={question} className="faq-item"><AccordionTrigger className="faq-trigger"><span>{question}</span><ArrowDownLeft size={17} /></AccordionTrigger><AccordionContent className="faq-answer">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

function Contact() {
  return <section className="contact-section" id="contact"><div className="container"><div className="contact-panel-v2"><div className="contact-orb" /><div className="eyebrow"><span className="eyebrow-mark" /> YOUR NEXT IDEA STARTS HERE</div><h2>بیایید چیزی <span className="gradient-type">متفاوت</span><br />بسازیم.</h2><p>یک پیام کافی است تا درباره‌ی بهترین مسیر برای ایده‌ات صحبت کنیم.</p><a className="button button-primary contact-button" href="mailto:hello@ice.studio?subject=شروع%20پروژه%20با%20ICE">شروع گفت‌وگو با ICE <ArrowUpLeft size={17} /></a><div className="contact-bottom"><span><i /> OPEN FOR SELECT PROJECTS</span><span>ICE STUDIO · CREATIVE × TECHNOLOGY</span></div></div></div></section>;
}

function Footer() {
  return <footer className="footer-v2"><div className="container"><div className="footer-main"><a href="#home" className="brand-lockup footer-brand"><span className="brand-symbol">✳</span><span>ICE<small>CREATIVE STUDIO</small></span></a><p>خلاقیت در نقطه‌ی تلاقی ایده و تکنولوژی.</p><a href="mailto:hello@ice.studio" className="footer-email">hello@ice.studio <MoveUpRight size={15} /></a></div><div className="footer-bottom"><span>© 2026 ICE Studio. All rights reserved.</span><div><a href="#work">نمونه‌کارها</a><a href="#services">خدمات</a><a href="#contact">تماس</a></div><a href="#home">بازگشت به بالا ↑</a></div></div></footer>;
}

export default function IceExperience() {
  return <><SmoothScroll /><Header /><main><Hero /><Ticker /><Work /><Services /><CreativeServices /><Process /><FAQ /><Contact /></main><Footer /></>;
}
