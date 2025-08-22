"use client";
import Image from "next/image";
import { featuredCategories } from "@/constants/featuredCategories";
import { useState } from "react";

export default function Home2FeaturedCategories() {
  const products = featuredCategories;
  const itemsPerPage = 6; // 3 cols × 2 rows
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // products for current page
  const currentProducts = products.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-6xl px-4 mx-auto">
        {/* header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center">
            <h2 className="text-2xl text-black font-lato font-bold">
              Featured <span className="italic font-light">Categories</span>
            </h2>
            <div className="flex-1 border-t border-color mx-4"></div>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-6 h-6 border flex items-center justify-center border-color text-muted"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m11 15-5-5 5-5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-6 h-6 border flex items-center justify-center border-color text-muted"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m7 15 5-5-5-5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* grid - only 6 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {currentProducts.map((product, index) => (
            <div key={index} className="flex gap-2">
              <div className="relative w-[160px] h-[160px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain border"
                />
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-sm font-rubik font-light text-[#c8c8c8]">
                  MENU TITLE
                </p>
                {Array.isArray(product.description) ? (
                  product.description.map((item, i) => (
                    <p
                      key={i}
                      className="mt-2 text-sm font-rubik font-light text-muted"
                    >
                      {item}
                    </p>
                  ))
                ) : (
                  <p className="text-sm">{product.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
