"use client";
import ProductCard from "@/components/product/ProductCard";
import Image from "next/image";
import { newArrivalsProducts } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function BottomSections() {
  const useSlider = (items: any[], itemsPerPage: number) => {
    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = () => {
      if (startIndex > 0) setStartIndex(startIndex - itemsPerPage);
    };

    const handleNext = () => {
      if (startIndex + itemsPerPage < items.length)
        setStartIndex(startIndex + itemsPerPage);
    };

    const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

    return { visibleItems, handlePrev, handleNext, startIndex };
  };

  const dealsSlider = useSlider(newArrivalsProducts, 2);
  const popularSlider = useSlider(newArrivalsProducts, 6);

  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Deals of The Week */}
          <div className="relative">
            <div className="mb-4 md:mb-8">
              <h2 className="text-[32px] font-bold font-lato text-black mb-2">
                Deals{" "}
                <span className="italic text-[32px] font-light font-lato text-black">
                  of The
                </span>{" "}
                Week
              </h2>
              <p className="text-muted font-rubik font-light text-base">
                Deals of the Week are a selection of flash deals updated every
                week!
              </p>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {dealsSlider.visibleItems.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={dealsSlider.handlePrev}
              disabled={dealsSlider.startIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 border border-color text-muted disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={dealsSlider.handleNext}
              disabled={
                dealsSlider.startIndex + 2 >= newArrivalsProducts.length
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 text-muted border-color  border disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Popular Products */}
          <div className="relative">
            <div className="mb-6 md:mb-8">
              <h2 className="text-[32px] font-bold font-lato text-black mb-2">
                Some{" "}
                <span className="italic text-[32px] font-light font-lato text-black">
                  Popular{" "}
                </span>
                Products
              </h2>
              <p className="text-muted font-rubik font-light text-base">
                We offer the best selection furniture at prices you will love!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {popularSlider.visibleItems.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-gray-200"
                >
                  <div className="w-24 h-24 flex-shrink-0 mt-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-light text-black font-rubik">
                      {product.name}
                    </span>
                    <span className="text-base font-light text-muted font-rubik">
                      {product.originalPrice && (
                        <span className="text-sm font-light text-muted font-rubik px-2 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      ${product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={popularSlider.handlePrev}
              disabled={popularSlider.startIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 border border-color text-muted disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={popularSlider.handleNext}
              disabled={
                popularSlider.startIndex + 6 >= newArrivalsProducts.length
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 border  border-color text-muted  disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
