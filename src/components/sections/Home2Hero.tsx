"use client";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import ServiceGuarantees from "@/components/sections/ServiceGuarantees";
import { navigationItems } from "@/constants";
import { slides1 } from "@/constants/Hero";
import BrowseCategories from "./BrowserCategories";

export default function Home2Hero() {
  const [open, setOpen] = useState(true);
  const [index, setIndex] = useState(0);
  const [lastAction, setLastAction] = useState<"next" | "prev" | null>(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides1.length);
    setLastAction("next");
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides1.length) % slides1.length);
    setLastAction("prev");
  };

  return (
    <section className="bg-hero py-4">
      <div className="mx-auto max-w-6xl px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 bg-white gap-4 p-4">
          {/* Left Sidebar - Categories */}
          <div className="relative col-span-1">
            <BrowseCategories/>
          </div>

          {/* Center - Hero Banner */}
          <div className="lg:col-span-2 relative overflow-hidden group">
            <div className="relative w-full sm:h-[420px]">
              <Image
                src={slides1[index].image}
                alt={slides1[index].title}
                fill
                className="object-cover"
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
                  <div className="absolute inset-0 flex items-center py-10 sm:py-16">
                    <div className="max-w-md xl:px-4 px-2">
                      <p className="text-muted font-rubik font-light text-[22px]">
                        {slides1[index].subtitle}
                      </p>
                      <p className="text-primary text-[80px] font-lato font-light leading-none">
                        {slides1[index].title}
                      </p>
                      <p className="text-primary text-[50px] font-rubik font-light leading-none">
                        {slides1[index].title2}
                      </p>

                      <a
                        href={slides1[index].buttonLink}
                        className="bg-black inline-block w-full mt-2 hover:cursor-pointer sm:w-auto px-4 py-2 text-sm font-normal text-white font-rubik bg-hover"
                      >
                        {slides1[index].buttonText}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev/Next Buttons */}
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

          {/* Right Side - Promo Blocks */}
          <div className="lg:col-span-1 space-y-6">
            <div className="relative overflow-hidden w-full h-[198px]">
              <Image
                src="/img/home2-banner1.jpg"
                alt="Storage & Shelving"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
             
            </div>

            <div className="relative  overflow-hidden w-full h-[198px]">
              <Image
                src="/img/home2-banner2.jpg"
                alt="Up to 25% Off"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
             
            </div>
          </div>
        </div>

        <ServiceGuarantees />
      </div>
    </section>
  );
}
