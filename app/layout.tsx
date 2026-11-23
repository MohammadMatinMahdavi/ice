import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ICE — Creative Intelligence Studio", description: "تولید محتوای خلاقانه با هوش مصنوعی؛ استراتژی، ویدیو و کمپین‌هایی که دیده می‌شوند.", openGraph: { title: "ICE — Creative Intelligence Studio", description: "خلاقیت، با قدرت هوش مصنوعی." } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="fa" dir="rtl"><body>{children}</body></html>; }