"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/constants/Hero";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [lastAction, setLastAction] = useState<"next" | "prev" | null>(null);
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
    setLastAction("next");
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setLastAction("prev");
  };

  return (
    <section className="bg-hero py-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[520px] overflow-hidden group">
          {/* AnimatePresence for fade animation */}

          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center py-10 sm:py-16">
                <div className="max-w-md sm:ml-12 lg:ml-16 xl:px-4 px-2">
                  <p className="text-muted font-rubik font-light text-[22px]">
                    {slides[index].subtitle}
                  </p>
                  <p className="text-primary text-[80px] font-lato font-light leading-none">
                    {slides[index].title}
                  </p>
                  <p className="text-primary text-[50px] font-rubik font-light leading-none">
                    {slides[index].title2}
                  </p>

                  <a
                    href={slides[index].buttonLink}
                    className="bg-black inline-block w-full mt-2 hover:cursor-pointer sm:w-auto px-4 py-2 text-sm font-normal text-white font-rubik bg-hover"
                  >
                    {slides[index].buttonText}
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Dots inside image */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {/* Prev button */}
            <button
              onClick={prevSlide}
              className={`w-4 h-4 rounded-full bg-hero ${
                lastAction === "prev" || index === 0
                  ? "border-2 primary-border"
                  : "border-none"
              }`}
            />

            {/* Next button */}
            <button
              onClick={nextSlide}
              className={`w-4 h-4 rounded-full bg-hero ${
                lastAction === "next"
                  ? "border-2 primary-border"
                  : "border-none"
              }`}
            />
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 border border-color
               opacity-0 -translate-x-5 transition-all duration-500 
               group-hover:opacity-100 group-hover:translate-x-0"
          >
            <ChevronLeft className="w-4 h-4 text-muted" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 border border-color
               opacity-0 translate-x-5 transition-all duration-500
               group-hover:opacity-100 group-hover:translate-x-0"
          >
            <ChevronRight className="w-4 h-4 text-muted" />
          </button>
        </div>
      </div>
    </section>
  );
}
