"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownLeft, ArrowUpLeft, ChevronDown, MoveUpRight, Send, Sparkles, WandSparkles, Clapperboard, Aperture, Workflow, Boxes, Layers3, Menu, X, ShieldCheck } from "lucide-react";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
 {no:"01",icon:WandSparkles,title:"تولید محتوای هوشمند",desc:"تصویر، ویدیو و محتوای شبکه‌های اجتماعی با ترکیب ابزارهای AI و نگاه خلاق انسانی.",tags:["AI Visuals","Social Content"]},
 {no:"02",icon:Clapperboard,title:"ویدیو و کمپین تبلیغاتی",desc:"از ایده و سناریو تا ویدیوهای تبلیغاتی، تیزر محصول و روایت‌های بصری ماندگار.",tags:["Campaigns","Motion"]},
 {no:"03",icon:Aperture,title:"هویت بصری و طراحی",desc:"ساخت زبان بصری منسجم برای برند؛ از هویت و کی‌ویژوال تا طراحی محتوای کمپین.",tags:["Branding","Art Direction"]},
 {no:"04",icon:Workflow,title:"استراتژی و سیستم محتوا",desc:"شناخت مخاطب، ستون‌های محتوایی و برنامه‌ای روشن برای ارتباط مؤثر و رشد پیوسته.",tags:["Strategy","Growth"]},
 {no:"05",icon:Boxes,title:"اتوماسیون خلاق",desc:"اتصال ابزارها و طراحی جریان‌های هوشمند برای ساده‌تر و سریع‌تر شدن کارها.",tags:["Automation","AI"]},
 {no:"06",icon:Layers3,title:"تجربه و محصول دیجیتال",desc:"طراحی لندینگ‌پیج و تجربه‌های دیجیتال سریع، هدفمند و هماهنگ با شخصیت برند.",tags:["Web","Digital"]}
];
const projects = [
 {no:"01",title:"فرمِ تازه‌ای از هویت",type:"BRAND IDENTITY / CONCEPT",image:"https://images.unsplash.com/photo-1634942536790-2537db6a2b9b?auto=format&fit=crop&w=1100&q=85",cls:"project-tall"},
 {no:"02",title:"تصویرسازی محصول",type:"AI PRODUCT VISUAL / CONCEPT",image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1100&q=85",cls:""},
 {no:"03",title:"روایت در حرکت",type:"CAMPAIGN / MOTION CONCEPT",image:"https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1100&q=85",cls:""},
 {no:"04",title:"زبان بصری مینیمال",type:"ART DIRECTION / CONCEPT",image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1100&q=85",cls:"project-wide"}
];
const process = [
 {n:"01",title:"گفت‌وگو و کشف",desc:"از هدف، مسئله و مخاطبت می‌شنویم تا صورت درست پروژه را پیدا کنیم."},
 {n:"02",title:"ایده و مسیر خلاق",desc:"جهت بصری، استراتژی، خروجی‌ها و زمان‌بندی را شفاف و دقیق مشخص می‌کنیم."},
 {n:"03",title:"ساخت و اجرا",desc:"ایده را با ابزارهای مناسب، تکنولوژی و نظارت خلاق انسانی به خروجی تبدیل می‌کنیم."},
 {n:"04",title:"تحویل و همراهی",desc:"خروجی نهایی را تحویل می‌دهیم و برای قدم بعدی در کنار برندت می‌مانیم."}
];
const faqs = [
 ["ICE دقیقاً چه خدماتی ارائه می‌دهد؟","ما در زمینه تولید محتوای هوشمند، ویدیو و کمپین تبلیغاتی، هویت بصری، استراتژی محتوا، اتوماسیون و تجربه‌های دیجیتال فعالیت می‌کنیم."],
 ["برای شروع همکاری چه اطلاعاتی لازم است؟","در ابتدا کافی است هدف، نوع کسب‌وکار و مسئله‌ای را که می‌خواهید حل کنید با ما در میان بگذارید. جزئیات را در گفت‌وگوی اولیه مشخص می‌کنیم."],
 ["آیا از هوش مصنوعی در تمام پروژه‌ها استفاده می‌کنید؟","از AI جایی استفاده می‌کنیم که واقعاً کیفیت، سرعت یا امکان خلاقانه بهتری ایجاد کند. انتخاب ابزار تابع نیاز پروژه است."],
 ["هزینه و زمان اجرای پروژه چطور مشخص می‌شود؟","پس از شناخت محدوده کار، خروجی‌های موردنیاز و زمان‌بندی، برآورد اختصاصی ارائه می‌کنیم؛ پیش از شروع، همه موارد شفاف خواهد بود."],
 ["آیا پروژه‌های خارج از تولید محتوا هم می‌پذیرید؟","بله؛ طراحی تجربه دیجیتال، لندینگ‌پیج و راهکارهای اتوماسیون نیز بخشی از خدمات ICE هستند."]
];
const reveal = {hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1] as const}}};

function Header(){
 const [open,setOpen]=useState(false);
 const links=[["خانه","#home"],["نمونه‌کارها","#work"],["خدمات","#services"],["فرآیند","#process"],["سؤالات","#faq"]];
 return <header className="site-header"><div className="container"><div className="nav-shell">
  <a href="#home" className="brand-lockup"><span className="brand-symbol">✳</span><span>ICE<small>CREATIVE STUDIO</small></span></a>
  <nav className="desktop-nav">{links.map(([t,h])=><a key={h} href={h}>{t}</a>)}</nav>
  <a href="#contact" className="button button-primary nav-cta">شروع یک پروژه <ArrowUpLeft size={16}/></a>
  <button className="mobile-toggle" aria-label="باز کردن منو" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div>{open&&<nav className="mobile-nav">{links.map(([t,h])=><a key={h} href={h} onClick={()=>setOpen(false)}>{t}</a>)}<a href="#contact" onClick={()=>setOpen(false)}>شروع همکاری</a></nav>}</div></header>;
}

function Hero(){
 const reduced=useReducedMotion();const [prompt,setPrompt]=useState("");const [sent,setSent]=useState(false);
 const ideas=["برای برندم یک هویت بصری متفاوت می‌خوام","به یک کمپین تبلیغاتی خلاق نیاز دارم","می‌خوام محتوای اینستاگرامم حرفه‌ای‌تر بشه"];
 const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();if(prompt.trim())setSent(true)};
 const mail="mailto:hello@ice.studio?subject="+encodeURIComponent("شروع پروژه با ICE")+"&body="+encodeURIComponent(prompt);
 return <section className="hero-v2" id="home">
  <div className="hero-grid-lines"/><div className="hero-glow hero-glow-violet"/><div className="hero-glow hero-glow-cyan"/>
  {!reduced&&<div className="hero-particles" aria-hidden="true">{Array.from({length:18},(_,i)=><motion.i key={i} style={{left:((i*37)%100)+"%",top:((i*53)%100)+"%"}} animate={{y:[0,-14,4,0],opacity:[.2,.8,.25],scale:[.8,1.25,.8]}} transition={{duration:5+(i%5),repeat:Infinity,delay:i*.16}}/>)}</div>}
  <div className="container hero-layout">
   <motion.div className="hero-copy" initial="hidden" animate="show" variants={{hidden:{},show:{transition:{staggerChildren:.13}}}}>
    <motion.div variants={reveal} className="eyebrow"><span className="eyebrow-mark"/> CREATIVE THINKING. INTELLIGENT MAKING.</motion.div>
    <motion.h1 variants={reveal}>ایده‌های بزرگ،<br/><span className="gradient-type">تجربه‌های</span> <span className="outline-type">متفاوت.</span></motion.h1>
    <motion.p variants={reveal}>ما در ICE خلاقیت را با تکنولوژی پیوند می‌زنیم؛ از هویت و محتوای برند تا کمپین، تجربه دیجیتال و راهکارهای هوشمند.</motion.p>
    <motion.div variants={reveal} className="hero-ctas"><a href="#work" className="button button-primary">دیدن پروژه‌ها <ArrowUpLeft size={17}/></a><a href="#services" className="text-link">خدمات ما <ArrowUpLeft size={15}/></a></motion.div>
    <motion.div variants={reveal} className="hero-meta"><span className="status-pip"/> ایده‌ات را بگو؛ از همین‌جا شروع می‌کنیم <span className="meta-line"/></motion.div>
   </motion.div>
   <motion.div className="brief-card-wrap" initial={{opacity:0,y:32,scale:.97}} animate={{opacity:1,y:0,scale:1}} transition={{duration:.8,delay:.22}}>
    <div className="brief-card">
     <div className="brief-top"><div className="brief-brand"><span className="brief-icon"><Sparkles size={18}/></span><div><b>ICE PROJECT STARTER</b><small>دستیار شروع پروژه</small></div></div><span className="ready-tag"><i/> READY</span></div>
     <div className="brief-intro"><span className="brief-avatar"><Sparkles size={16}/></span><div><small>ICE STUDIO · خوش آمدی</small><p>سلام! چه چیزی در ذهنته؟ کمی از ایده یا چالشت برامون بگو تا مسیر مناسب رو با هم پیدا کنیم.</p></div></div>
     {sent&&<div className="brief-user-message"><small>شرح اولیه‌ی پروژه</small><p>{prompt}</p><a href={mail}>ارسال به تیم ICE <ArrowUpLeft size={14}/></a></div>}
     <form className="brief-form" onSubmit={submit}><label htmlFor="project-brief">پروژه‌ات رو در یک جمله توصیف کن</label><textarea id="project-brief" value={prompt} onChange={e=>{setPrompt(e.target.value);setSent(false)}} placeholder="مثلاً برای محصول جدیدم به یک کمپین تصویری جسورانه نیاز دارم..." rows={3}/><div className="brief-form-bottom"><span>بدون فرم طولانی، فقط از ایده‌ات شروع کن.</span><button aria-label="ارسال ایده" type="submit" disabled={!prompt.trim()}><Send size={16}/></button></div></form>
     <div className="brief-suggestions"><span>یا یکی از این‌ها:</span>{ideas.map(x=><button key={x} type="button" onClick={()=>{setPrompt(x);setSent(false)}}>{x}</button>)}</div>
     <div className="brief-secure"><ShieldCheck size={13}/> این فرم فعلاً برای ثبت اولیه و ارسال درخواست است.</div>
    </div>
    <div className="floating-note note-top"><span>✳</span> IDEAS INTO IMPACT</div><div className="floating-note note-bottom"><span/> CREATIVE / AI / DIGITAL</div>
   </motion.div>
  </div>
  <div className="container hero-bottomline"><span>INDEPENDENT CREATIVE STUDIO · 2026</span><a href="#work">اسکرول برای کشف بیشتر <ArrowDownLeft size={14}/></a></div>
 </section>;
}

function Marquee(){const words=["CREATIVE DIRECTION","AI CONTENT","BRAND SYSTEMS","CAMPAIGNS","DIGITAL EXPERIENCES"];return <div className="ticker"><div className="ticker-track">{[...words,...words].map((w,i)=><span key={i}>{w}<i>✳</i></span>)}</div></div>}

function Work(){return <section className="section-v2 work-section" id="work"><div className="container">
 <div className="section-head-row"><div><div className="eyebrow"><span className="eyebrow-mark"/> SELECTED DIRECTIONS</div><h2 className="section-title">کارهایی برای <span className="gradient-type">متفاوت دیده‌شدن.</span></h2></div><p className="section-intro">هر پروژه از یک مسئله شروع می‌شود و به یک زبان بصری اختصاصی می‌رسد. اینجا چند مسیر مفهومی برای نمایش جهان خلاق ICE می‌بینی.</p></div>
 <div className="project-grid">{projects.map((p,i)=><motion.a href="#contact" key={p.no} className={"project-card "+p.cls} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,delay:i*.08}}><img src={p.image} alt={p.title}/><div className="project-shade"/><span className="project-number">{p.no} / 04</span><span className="project-arrow"><ArrowUpLeft size={20}/></span><div className="project-caption"><small>{p.type}</small><h3>{p.title}</h3></div></motion.a>)}</div>
 <p className="work-note">تصاویر این بخش برای نمایش جهت هنری و کانسپت هستند؛ نمونه‌کارهای نهایی ICE پس از آماده‌شدن جایگزین می‌شوند.</p>
 </div></section>}

function Services(){return <section className="section-v2 services-section" id="services"><div className="container"><div className="eyebrow"><span className="eyebrow-mark"/> WHAT WE DO</div><div className="section-head-row services-heading"><h2 className="section-title">از فکر تا <span className="gradient-type">اجرا.</span><br/>همه‌چیز یکپارچه.</h2><div><p className="section-intro">خدمات ما برای حل مسئله‌های واقعی برند طراحی شده‌اند؛ می‌توانی یک خدمت را انتخاب کنی یا چند قابلیت را در قالب یک پروژه کنار هم قرار بدهی.</p><a href="#contact" className="text-link">برای پروژه‌ات مشورت بگیر <ArrowUpLeft size={15}/></a></div></div>
 <div className="service-list">{services.map(s=><motion.a href="#contact" className="service-row" key={s.no} initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.2}} transition={{delay:Number(s.no)*.035}}><span className="service-no">{s.no}</span><span className="service-icon"><s.icon size={23}/></span><span className="service-main"><b>{s.title}</b><small>{s.desc}</small></span><span className="service-tags">{s.tags.map(t=><i key={t}>{t}</i>)}</span><span className="service-go"><ArrowUpLeft size={18}/></span></motion.a>)}</div>
 </div></section>}

function Approach(){return <section className="approach-section"><div className="container approach-inner"><div className="approach-orbit orbit-one"/><div className="approach-orbit orbit-two"/><div className="approach-copy"><div className="eyebrow"><span className="eyebrow-mark"/> OUR POINT OF VIEW</div><h2>تکنولوژی سرعت می‌دهد؛<br/><span className="gradient-type">خلاقیت جهت.</span></h2><p>ابزارهای هوشمند فقط زمانی ارزشمندند که در خدمت یک ایده‌ی درست باشند. ما میان سرعت تکنولوژی و دقت نگاه انسانی تعادل می‌سازیم تا خروجی فقط زیبا نباشد؛ اثرگذار هم باشد.</p><a href="#contact" className="button button-outline">درباره پروژه‌ات حرف بزن <ArrowUpLeft size={16}/></a></div><div className="approach-stamp"><span>ICE</span><small>HUMAN CRAFT<br/>× AI POWER</small><i>✳</i></div></div></section>}

function Process(){return <section className="section-v2 process-section" id="process"><div className="container"><div className="section-head-row"><div><div className="eyebrow"><span className="eyebrow-mark"/> THE ICE METHOD</div><h2 className="section-title">مسیر روشن،<br/><span className="gradient-type">خروجی دقیق.</span></h2></div><p className="section-intro">فرآیند همکاری را ساده و شفاف نگه می‌داریم؛ تا از اولین گفت‌وگو بدانی چه اتفاقی قرار است بیفتد.</p></div><div className="process-grid">{process.map((p,i)=><motion.article className="process-card" key={p.n} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}><span className="process-number">{p.n}</span><div className="process-marker"><i/></div><h3>{p.title}</h3><p>{p.desc}</p></motion.article>)}</div></div></section>}

function FAQ(){return <section className="section-v2 faq-section" id="faq"><div className="container faq-layout"><div><div className="eyebrow"><span className="eyebrow-mark"/> GOOD TO KNOW</div><h2 className="section-title">سؤال داری؟<br/><span className="gradient-type">طبیعیه.</span></h2><p className="section-intro">چند پاسخ کوتاه برای اینکه با خیال راحت‌تری شروع کنی. اگر سؤال دیگری داری، مستقیم با ما در ارتباط باش.</p><a className="text-link" href="#contact">سؤال دیگه‌ای دارم <ArrowUpLeft size={15}/></a></div><Accordion type="single" collapsible className="faq-list">{faqs.map(([q,a],i)=><AccordionItem value={"item-"+i} key={q} className="faq-item"><AccordionTrigger className="faq-trigger"><span>{q}</span><ChevronDown size={18}/></AccordionTrigger><AccordionContent className="faq-answer">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>}

function Contact(){return <section className="contact-section" id="contact"><div className="container"><div className="contact-panel-v2"><div className="contact-orb"/><div className="eyebrow"><span className="eyebrow-mark"/> HAVE A PROJECT IN MIND?</div><h2>بیایید چیزی <span className="gradient-type">به‌یادماندنی</span><br/>بسازیم.</h2><p>از یک ایده‌ی اولیه تا یک پروژه‌ی کامل؛ فقط کافیه شروع کنیم.</p><a className="button button-primary contact-button" href="mailto:hello@ice.studio?subject=شروع%20پروژه%20با%20ICE">شروع گفت‌وگو با ICE <ArrowUpLeft size={17}/></a><div className="contact-bottom"><span><i/> OPEN FOR SELECT PROJECTS</span><span>ICE STUDIO · CREATIVE × TECHNOLOGY</span></div></div></div></section>}

function Footer(){return <footer className="footer-v2"><div className="container"><div className="footer-main"><a href="#home" className="brand-lockup footer-brand"><span className="brand-symbol">✳</span><span>ICE<small>CREATIVE STUDIO</small></span></a><p>خلاقیت در نقطه‌ی تلاقی ایده و تکنولوژی.</p><a href="mailto:hello@ice.studio" className="footer-email">hello@ice.studio <MoveUpRight size={15}/></a></div><div className="footer-bottom"><span>© 2026 ICE Studio. All rights reserved.</span><div><a href="#work">نمونه‌کارها</a><a href="#services">خدمات</a><a href="#contact">تماس</a></div><a href="#home">بازگشت به بالا ↑</a></div></div></footer>}

export default function IceExperience(){return <><SmoothScroll/><Header/><main><Hero/><Marquee/><Work/><Services/><Approach/><Process/><FAQ/><Contact/></main><Footer/></>}
