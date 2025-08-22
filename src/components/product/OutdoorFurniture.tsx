"use client";
import Image from "next/image";
import { useState } from "react";
import { newArrivalsProducts } from "@/constants";
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function DiningRoomProduct() {
  const tabs = ["Featured Product", "Chair", "Sofa"];
  const [active, setActive] = useState(0);

  const products = newArrivalsProducts;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="max-w-6xl mx-auto my-20">
      {/* Title and Tabs */}
      <div className="flex justify-between items-center  pb-2 mb-6">
        <h2 className="text-2xl font-bold font-lato">
          Outdoor <span className="italic font-light font-rubik text-2xl">Furniture</span>
        </h2>
        <div className="flex-1 border-t border-color mx-4" ></div>
        <div className="flex gap-2 text-sm">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`pb-1 px-2 hover:text-primary transition-colors duration-200 ${
                idx === active
                  ? "border-2 border-primary text-primary"
                  : "text-muted"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Products + Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Products Grid (2 rows × 3 cols inside slider) */}
        <div className="lg:col-span-3 relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="grid grid-cols-3 gap-8 min-w-full"
              >
                {products
                  .slice(
                    pageIndex * itemsPerPage,
                    pageIndex * itemsPerPage + itemsPerPage
                  )
                  .map((product, index) => (
                    <div key={index} className="flex  items-center text-center">
                      <div className="relative w-24 h-24">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="mt-1 flex flex-col ">
                        <p className="mt-2 text-base font-light font-rubik text-black text-hover hover:cursor-pointer">{product.name}</p>
                        <div>
                          {product.originalPrice && (
                            <span className="text-sm font-light font-rubik text-muted line-through mr-2">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                          <span className="text-base font-light font-rubik text-primary">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-muted p-1 border border-color shadow"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-1 text-muted border border-color shadow"
          >
             <ChevronRight />
          </button>
        </div>

        {/* Right Side Banner */}
        <div className="relative row-span-2 col-span-1 w-full h-full">
           <Image
            src="/img/home2-banner5.jpg"
            alt="Dining Offer"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}



        