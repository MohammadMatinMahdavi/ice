
"use client";

import { useState } from "react";
import {
  ArrowUpLeft,
  Menu,
  X,
  Palette,
  Clapperboard,
  Code2,
  Bot,
  Sparkles,
  ChevronDown,
} from "lucide-react";

type HeaderProps = { onReveal: () => void };

const groups = [
  { title: "طراحی و هویت بصری", icon: Palette, items: ["طراحی سایت", "طراحی سایت فروشگاهی", "طراحی UI و UX", "لوگو و هویت بصری", "طراحی پست و استوری", "چاپ و بسته‌بندی", "پرزنتیشن شرکتی"] },
  { title: "توسعه و فناوری", icon: Code2, items: ["برنامه‌نویسی اختصاصی", "توسعه وردپرس", "اپلیکیشن موبایل", "فروشگاه آنلاین", "ربات تلگرام و مینی‌اپ", "CRM اختصاصی", "n8n و Workflow"] },
  { title: "محتوا، ویدیو و رشد", icon: Clapperboard, items: ["ویدیو تبلیغاتی", "ریلز و ویدیو کوتاه", "موشن گرافیک و CGI", "عکاسی و تولید محتوا", "مدیریت شبکه‌های اجتماعی", "تبلیغات و کمپین دیجیتال", "سئو و استراتژی محتوا", "کپی‌رایتینگ"] },
  { title: "هوش مصنوعی و اتوماسیون", icon: Bot, items: ["تصاویر محصول با AI", "ویدیو و آواتار هوشمند", "چت‌بات و ایجنت هوشمند", "اتوماسیون هوشمند", "ابزارهای اختصاصی AI", "مشاوره و پیاده‌سازی AI"] },
];

export function Header({ onReveal }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMegaOpen, setDesktopMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const go = (selector: string) => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDesktopMegaOpen(false);
    onReveal();
    window.setTimeout(() => {
      document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  };

  const target = (service: string) =>
    /AI|هوشمند|چت‌بات|اتوماسیون|ربات|CRM|n8n/.test(service)
      ? "#ai-services"
      : "#creative-services";

  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-shell">
          <a href="#home" className="brand-lockup" aria-label="ICE Creative Studio">
            <span className="brand-symbol">✳</span>
            <span>ICE<small>CREATIVE STUDIO</small></span>
          </a>

          <nav className="desktop-nav" aria-label="منوی اصلی">
            <a href="#home">خانه</a>
            <div className={"nav-services-wrap" + (desktopMegaOpen ? " is-open" : "")}>
              <button
                type="button"
                className="nav-services-trigger"
                aria-expanded={desktopMegaOpen}
                aria-haspopup="true"
                onMouseEnter={() => setDesktopMegaOpen(true)}
                onFocus={() => setDesktopMegaOpen(true)}
                onClick={() => setDesktopMegaOpen((value) => !value)}
              >
                خدمات <ChevronDown className="nav-services-chevron" size={14} />
              </button>
              {desktopMegaOpen && (
                <div className="services-mega">
                  <aside className="services-mega-feature">
                    <span className="services-feature-tag"><Sparkles size={13} /> ICE / SERVICES</span>
                    <div className="services-feature-icon"><Bot size={27} /></div>
                    <h3>خدمات هوشمند، خلاق و اختصاصی</h3>
                    <p>از ایده‌پردازی و طراحی تا توسعه، تولید محتوا و اتوماسیون؛ همه‌چیز برای رشد کسب‌وکار در یک مسیر.</p>
                    <a href="#contact" onClick={() => setDesktopMegaOpen(false)}>
                      درخواست مشاوره <ArrowUpLeft size={16} />
                    </a>
                    <small>مشاوره اولیه · متناسب با نیاز شما</small>
                  </aside>
                  <div className="services-mega-columns">
                    {groups.map((group) => {
                      const Icon = group.icon;
                      return (
                        <section className="services-mega-group" key={group.title}>
                          <h4><Icon size={17} />{group.title}</h4>
                          <ul>
                            {group.items.map((service) => (
                              <li key={service}>
                                <button type="button" onClick={() => go(target(service))}>
                                  <span>{service}<small>{group.title}</small></span>
                                  <ArrowUpLeft size={14} />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </section>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <a href="#portfolio" onClick={(event) => { event.preventDefault(); go("#portfolio"); }}>نمونه‌کارها</a>
            <a href="#faq" onClick={(event) => { event.preventDefault(); go("#faq"); }}>سؤالات</a>
            <a href="#contact" onClick={(event) => { event.preventDefault(); go("#contact"); }}>تماس</a>
          </nav>

          <a href="#contact" className="button button-primary nav-cta" onClick={(event) => { event.preventDefault(); go("#contact"); }}>
            شروع پروژه <ArrowUpLeft size={16} />
          </a>

          <button
            className="mobile-toggle"
            type="button"
            aria-label={mobileOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="mobile-nav" aria-label="منوی موبایل">
            <a href="#home" onClick={() => setMobileOpen(false)}>خانه</a>
            <button
              className="mobile-services-trigger"
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((value) => !value)}
            >
              <span>خدمات</span>
              <ChevronDown className={mobileServicesOpen ? "is-open" : ""} size={17} />
            </button>
            {mobileServicesOpen && (
              <div className="mobile-services-list">
                {groups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <section key={group.title}>
                      <b><Icon size={15} />{group.title}</b>
                      {group.items.map((service) => (
                        <button type="button" key={service} onClick={() => go(target(service))}>
                          {service}<ArrowUpLeft size={13} />
                        </button>
                      ))}
                    </section>
                  );
                })}
              </div>
            )}
            <a href="#portfolio" onClick={(event) => { event.preventDefault(); go("#portfolio"); }}>نمونه‌کارها</a>
            <a href="#faq" onClick={(event) => { event.preventDefault(); go("#faq"); }}>سؤالات</a>
            <a href="#contact" onClick={(event) => { event.preventDefault(); go("#contact"); }}>تماس</a>
            <a href="#contact" className="mobile-project-cta" onClick={(event) => { event.preventDefault(); go("#contact"); }}>
              شروع پروژه <ArrowUpLeft size={16} />
            </a>
          </nav>
        )}
      </div>

      {desktopMegaOpen && (
        <div
          className="services-mega-dismiss-zone"
          aria-hidden="true"
          onMouseEnter={() => setDesktopMegaOpen(false)}
        />
      )}
    </header>
  );
}
