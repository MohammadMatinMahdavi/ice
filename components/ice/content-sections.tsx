"use client";

import { motion } from "framer-motion";
import { ArrowUpLeft, MoveUpRight, Check, Package, Video, Aperture, Bot, Globe, Workflow, Palette, Clapperboard, Megaphone, ShoppingBag, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const request = (service: string) => "mailto:hello@ice.studio?subject=" + encodeURIComponent("درخواست خدمات ICE: " + service) + "&body=" + encodeURIComponent("سلام، برای " + service + " مشاوره و برآورد قیمت می‌خواهم.");
const portfolio = [
  { image: "/images/portfolio/01-product-visuals.jpg", title: "تصویرسازی محصول", type: "AI PRODUCT VISUALS" },
  { image: "/images/portfolio/02-campaign-video.jpg", title: "کمپین و تبلیغات", type: "CAMPAIGN / VIDEO" },
  { image: "/images/portfolio/03-brand-style.jpg", title: "هویت و استایل برند", type: "BRAND IDENTITY" },
  { image: "/images/portfolio/04-creative-details.jpg", title: "خلاقیت در جزئیات", type: "CREATIVE DIRECTION" },
  { image: "/images/portfolio/05-digital-experience.jpg", title: "تجربه دیجیتال", type: "DIGITAL EXPERIENCE" },
  { image: "/images/portfolio/06-visual-design.jpg", title: "طراحی بصری", type: "VISUAL DESIGN" },
  { image: "/images/portfolio/07-product-campaign.jpg", title: "تبلیغات محصول", type: "PRODUCT CAMPAIGN" },
  { image: "/images/portfolio/08-packaging.jpg", title: "طراحی و بسته‌بندی", type: "PACKAGING" },
  { image: "/images/portfolio/09-ui-experience.jpg", title: "طراحی تجربه", type: "DIGITAL / UI" },
  { image: "/images/portfolio/10-creative-content.jpg", title: "محتوای خلاق", type: "CONTENT" },
  { image: "/images/portfolio/11-photo-production.jpg", title: "تولید محتوای تصویری", type: "PRODUCTION" },
  { image: "/images/portfolio/12-brand-space.jpg", title: "فضای برند", type: "ART DIRECTION" },
];
const aiServices = [
  { icon: Package, title: "تصاویر محصول با هوش مصنوعی", desc: "تصاویر حرفه‌ای محصول با کیفیت استودیویی، بدون نیاز به عکاسی سنتی.", price: "استعلام قیمت", tag: "AI VISUALS", tone: "violet" },
  { icon: Video, title: "ویدیو تبلیغاتی و آواتار AI", desc: "ویدیوهای تبلیغاتی و پرزنتورهای هوشمند برای معرفی خدمات و محصولات.", price: "استعلام قیمت", tag: "VIDEO / AVATARS", tone: "pink" },
  { icon: Aperture, title: "تبلیغات CGI و سه‌بعدی", desc: "انیمیشن و تصاویر سه‌بعدی محصول برای کمپین‌هایی که متوقف‌تان می‌کنند.", price: "استعلام قیمت", tag: "CGI / 3D", tone: "cyan" },
  { icon: Bot, title: "چت‌بات و ایجنت هوشمند", desc: "پاسخ‌گویی به مشتریان، دریافت سرنخ و رزرو خودکار در تمام ساعات.", price: "استعلام قیمت", tag: "AI AGENTS", tone: "lime" },
  { icon: Globe, title: "اپلیکیشن و وب‌سایت هوشمند", desc: "ابزارهای اختصاصی، وب‌اپلیکیشن و وب‌سایت متناسب با فرایند کسب‌وکار.", price: "استعلام قیمت", tag: "WEB APPS", tone: "violet" },
  { icon: Workflow, title: "اتوماسیون هوشمند", desc: "اتصال ابزارها و خودکارسازی سرنخ‌ها، رزروها و جریان‌های کاری.", price: "استعلام قیمت", tag: "AUTOMATION", tone: "cyan" },
];
const categories = [
  { icon: Palette, title: "طراحی", items: ["طراحی پست و استوری شبکه‌های اجتماعی", "لوگو و هویت بصری برند", "پرزنتیشن و پروفایل شرکتی", "طراحی چاپ و بسته‌بندی", "طراحی غرفه و نمایشگاه"] },
  { icon: Clapperboard, title: "ویدیو و موشن", items: ["ریلز و ویدیوهای کوتاه", "ویدیو معرفی و تبلیغاتی", "موشن لوگو و موشن گرافیک", "سناریو و ایده‌پردازی تبلیغاتی", "تولید ویدیو و عکاسی"] },
  { icon: Megaphone, title: "مارکتینگ و رشد", items: ["مدیریت ماهانه شبکه‌های اجتماعی", "تبلیغات و کمپین‌های دیجیتال", "سئو محلی و پروفایل کسب‌وکار", "کپی‌رایتینگ و تولید محتوا", "تحلیل و استراتژی شبکه‌های اجتماعی"] },
  { icon: ShoppingBag, title: "وب و تجارت الکترونیک", items: ["طراحی وب‌سایت و لندینگ‌پیج", "راه‌اندازی فروشگاه آنلاین", "طراحی UI/UX", "بهینه‌سازی تجربه خرید"] },
];
const steps = [
  ["01", "نیازت را بگو", "یک پیام یا brief کوتاه کافی است تا بدانیم چه چیزی لازم داری."],
  ["02", "با AI و تخصص انسانی می‌سازیم", "درباره محدوده، هزینه و زمان توافق می‌کنیم؛ سپس اجرا را شروع می‌کنیم."],
  ["03", "راه‌اندازی و تحویل", "فایل نهایی یا راهکار آماده‌ی استفاده را تحویل می‌گیری."],
];
const faqs = [
  ["می‌توانید اپلیکیشن یا چت‌بات اختصاصی بسازید؟", "بله. مسئله‌ی کسب‌وکارت را توضیح بده تا راهکار، زمان‌بندی و برآورد هزینه را پیشنهاد کنیم."],
  ["قیمت‌ها ثابت هستند؟", "قیمت هر پروژه به محدوده و خروجی موردنیاز بستگی دارد. پیش از شروع، پیشنهاد قیمت شفاف ارائه می‌کنیم."],
  ["در فرایند خلاقیت از هوش مصنوعی استفاده می‌کنید؟", "بله، هرجا ارزش واقعی ایجاد کند. خروجی نهایی با کنترل کیفی و حفظ هویت برند آماده می‌شود."],
  ["تحویل پروژه چقدر زمان می‌برد؟", "زمان تحویل به نوع و حجم پروژه بستگی دارد و پس از بررسی brief مشخص می‌شود."],
  ["برای شروع چه اطلاعاتی لازم است؟", "هدف، مخاطب، راهنمای برند یا لوگو، محتوای موجود و زمان موردنظر کمک می‌کند دقیق‌تر شروع کنیم."],
  ["چند مرحله بازبینی در نظر گرفته می‌شود؟", "تعداد خروجی‌ها، بازبینی‌ها و زمان‌بندی پیش از شروع در محدوده پروژه مشخص می‌شوند."],
  ["می‌توانم پروژه تک‌مرحله‌ای سفارش بدهم؟", "بله؛ هم پروژه‌های مستقل و یک‌باره و هم همکاری‌های دوره‌ای قابل انجام‌اند."],
  ["با مشتریان خارج از ایران هم کار می‌کنید؟", "بله، امکان همکاری آنلاین با برندها و تیم‌ها در کشورهای مختلف وجود دارد."],
];
const fade = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .12 }, transition: { duration: .55 } };

export function Portfolio() {
  return <section className="hm-section hm-portfolio" id="portfolio"><div className="container"><div className="hm-section-heading"><div><span className="eyebrow"><span className="eyebrow-mark" /> SELECTED WORK</span><h2>پروژه‌های <span className="gradient-type">منتخب.</span></h2></div><a href="#contact" className="text-link">همکاری روی پروژه بعدی <ArrowUpLeft size={15} /></a></div><div className="hm-portfolio-grid">{portfolio.map((item, i) => <motion.a href="#contact" className="hm-portfolio-item" key={item.title} {...fade} transition={{ duration: .45, delay: (i % 4) * .05 }}><img src={item.image} alt={item.title} loading="lazy" /><div className="hm-portfolio-overlay"><small>{item.type}</small><b>{item.title}</b><i><ArrowUpLeft size={17} /></i></div></motion.a>)}</div><p className="hm-portfolio-note">برای جایگزینی نمونه‌کارها، تصاویر پوشه public/images/portfolio را با پروژه‌های واقعی ICE جایگزین کن.</p></div></section>;
}

export function AIServiceCards() {
  return <section className="hm-section hm-ai-services" id="ai-services"><div className="container"><div className="hm-section-heading hm-services-heading"><div><span className="eyebrow"><span className="eyebrow-mark" /> SERVICES</span><h2>با هوش مصنوعی <span className="gradient-type">چه می‌سازیم؟</span></h2><p>یک خدمت را انتخاب کن یا مسئله‌ات را با ما در میان بگذار.</p></div><span className="hm-price-note">قیمت‌ها پس از بررسی نیاز پروژه اعلام می‌شوند.</span></div><div className="hm-ai-grid">{aiServices.map((service, i) => <motion.article className={"hm-ai-card tone-" + service.tone} key={service.title} {...fade} transition={{ duration: .45, delay: i * .06 }}><div className="hm-ai-card-top"><span><service.icon size={22} /></span><small>{service.tag}</small></div><h3>{service.title}</h3><p>{service.desc}</p><a href={request(service.title)} className="hm-learn-link">درخواست و مشاوره <MoveUpRight size={14} /></a><div className="hm-price-row"><span>{service.price}</span><a href={request(service.title)}>درخواست <ArrowUpLeft size={15} /></a></div></motion.article>)}</div></div></section>;
}

export function CreativeServices() {
  return <section className="hm-section hm-creative-services" id="creative-services"><div className="container"><div className="hm-section-heading"><div><span className="eyebrow"><span className="eyebrow-mark" /> CREATIVE & MARKETING</span><h2>و همه‌چیزهایی که یک آژانس خلاق <span className="gradient-type">ارائه می‌کند.</span></h2><p>خدمات شفاف، قابل سفارش و متناسب با نیاز برند.</p></div></div><div className="hm-category-pricing">{categories.map((category, i) => <article className="hm-price-category" key={category.title}><div className="hm-price-category-head"><span><category.icon size={20} /></span><h3>{category.title}</h3><small>0{i + 1}</small></div><ul>{category.items.map(item => <li key={item}><span>{item}</span><a href={request(item)}>استعلام قیمت <ArrowUpLeft size={13} /></a></li>)}</ul><a className="hm-category-detail" href={request(category.title)}>مشاهده جزئیات <MoveUpRight size={14} /></a></article>)}</div><div className="hm-budget-callout"><div><b>مطمئن نیستی چه خدمتی مناسب توست؟</b><p>هدفت و بودجه‌ات را بگو تا مسیر مناسب را پیشنهاد دهیم.</p></div><a className="button button-primary" href={request("پیشنهاد خدمات و بودجه")}>دریافت پیشنهاد <ArrowUpLeft size={16} /></a></div></div></section>;
}

export function Process() {
  return <section className="hm-section hm-process" id="process"><div className="container"><div className="hm-section-heading"><div><span className="eyebrow"><span className="eyebrow-mark" /> HOW IT WORKS</span><h2>سه قدم <span className="gradient-type">ساده.</span></h2></div></div><div className="hm-steps">{steps.map(([number, title, desc]) => <motion.article className="hm-step" key={number} {...fade}><span>{number}</span><div><h3>{title}</h3><p>{desc}</p></div><i><Check size={16} /></i></motion.article>)}</div></div></section>;
}

export function FAQ() {
  return <section className="hm-section hm-faq" id="faq"><div className="container hm-faq-layout"><div><span className="eyebrow"><span className="eyebrow-mark" /> FAQ</span><h2>سؤالات <span className="gradient-type">متداول.</span></h2><p>جواب سؤالت اینجا نیست؟ از ما بپرس.</p><a href={request("پرسش درباره خدمات")} className="button button-outline">پرسیدن سؤال <MessageCircle size={15} /></a></div><Accordion type="single" collapsible className="hm-faq-list">{faqs.map(([q, a], i) => <AccordionItem value={"faq-" + i} key={q} className="hm-faq-item"><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

export function ProductPromo() {
  return <section className="hm-product-promo"><div className="container"><div className="hm-product-card"><div className="hm-product-orbit" /><div className="hm-product-copy"><span className="eyebrow"><span className="eyebrow-mark" /> BEYOND CREATIVE</span><h2>یک قدم جلوتر؛<br /><span className="gradient-type">سیستم‌های هوشمند</span> برای کسب‌وکار.</h2><p>از چت‌بات و ایجنت‌های پاسخ‌گو تا اتوماسیون فرایندها و ابزارهای اختصاصی؛ راهکارهایی که کارهای روزمره را ساده‌تر می‌کنند.</p><a href="#contact" className="button button-primary">مشاوره راهکار هوشمند <ArrowUpLeft size={16} /></a></div><div className="hm-product-visual"><div className="hm-dashboard"><div className="hm-dashboard-top"><i /><i /><i /><span>ICE / SMART SYSTEMS</span></div><div className="hm-dashboard-content"><div className="hm-dashboard-stat"><small>LEADS CAPTURED</small><b>+128%</b><span>↗ this month</span></div><div className="hm-dashboard-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="hm-dashboard-row"><span /><b>AI ASSISTANT</b><em>ACTIVE</em></div><div className="hm-dashboard-row"><span /><b>WORKFLOW</b><em>READY</em></div></div></div></div></div></div></section>;
}

export function Contact() {
  return <section className="hm-final-cta" id="contact"><div className="container"><div className="hm-final-inner"><span className="eyebrow"><span className="eyebrow-mark" /> LET'S BUILD SOMETHING</span><h2>نمی‌خواهی وارد جزئیات شوی؟<br /><span className="gradient-type">فقط صحبت کنیم.</span></h2><p>یک پیام کافی است؛ راهکار و برآورد اولیه را با هم پیدا می‌کنیم.</p><a href={request("شروع پروژه")} className="button button-primary">گفت‌وگو با ICE <ArrowUpLeft size={17} /></a><small>پاسخ‌گویی از طریق راه ارتباطی ثبت‌شده</small></div></div></section>;
}

export function Footer() {
  return <footer className="hm-footer"><div className="container"><div className="hm-footer-main"><div><a href="#home" className="brand-lockup"><span className="brand-symbol">✳</span><span>ICE<small>CREATIVE STUDIO</small></span></a><p>جایی که خلاقیت با تکنولوژی ملاقات می‌کند.</p></div><div><b>دسترسی سریع</b><a href="#services">خدمات</a><a href="#portfolio">نمونه‌کارها</a><a href="#process">فرآیند همکاری</a><a href="#faq">سؤالات متداول</a></div><div><b>ارتباط با ما</b><a href={request("شروع پروژه")}>شروع پروژه</a><a href="mailto:hello@ice.studio">hello@ice.studio</a><a href="https://instagram.com/ice.studio">Instagram</a></div></div><div className="hm-footer-bottom"><span>© 2026 ICE Studio. All rights reserved.</span><a href="#home">بازگشت به بالا ↑</a></div></div></footer>;
}
