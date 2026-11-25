"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/ice/header";
import { Hero } from "@/components/ice/hero";
import { ServiceStrip } from "@/components/ice/service-strip";
import { WhatWeDo } from "@/components/ice/what-we-do";
import { Portfolio, AIServiceCards, CreativeServices, Process, FAQ, ProductPromo, Contact, Footer } from "@/components/ice/content-sections";

export default function IceExperience() {
  const [showMore, setShowMore] = useState(false);
  const revealMore = () => setShowMore(true);
  const toggleMore = () => setShowMore(value => !value);

  return (
    <>
      <SmoothScroll />
      <Header onReveal={revealMore} />
      <main>
        <Hero />
        <ServiceStrip />
        <WhatWeDo onReveal={revealMore} onToggle={toggleMore} expanded={showMore} />
        <AnimatePresence initial={false}>
          {showMore && (
            <motion.div
              key="expanded-details"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: .4 }}
            >
              <Portfolio />
              <AIServiceCards />
              <CreativeServices />
              <Process />
              <FAQ />
              <ProductPromo />
            </motion.div>
          )}
        </AnimatePresence>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
