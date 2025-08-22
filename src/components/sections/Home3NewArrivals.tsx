"use client";

import Image from "next/image";
import ProductCard from "@/components/product/ProductCard";
import { newArrivalsProducts } from "@/constants";
import { useState } from "react";
import BrowseCategories from "./BrowserCategories";

export default function HomePage() {
  const products = newArrivalsProducts;

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
    <div className="max-w-6xl mx-auto py-8">
      {/* Top Banners */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Image
          src="/img/home3-banner1.jpg"
          alt=""
          width={380}
          height={230}
          className="w-full object-cover border"
        />
        <Image
          src="/img/home3-banner2.jpg"
          alt=""
          width={380}
          height={230}
          className="w-full object-cover border"
        />
        <Image
          src="/img/home3-banner3.jpg"
          alt=""
          width={380}
          height={230}
          className="w-full object-cover border"
        />
      </div>

      {/* Sidebar + Products */}
      <div className="grid grid-cols-[1fr_3.2fr] gap-4">
        {/* Sidebar */}
        <aside className="border rounded-lg p-2 flex flex-col justify-between">
          {/* Categories */}
          <BrowseCategories/>

          {/* Banner */}
          <div className="mt-4">
            <Image
              src="/img/home3-banner8.jpg"
              alt=""
              width={255}
              height={255}
              className="w-full object-cover border"
            />
          </div>
        </aside>

        {/* Products Section */}
        <section>
          <div className="mb-6">
            <div className="flex items-center">
              <h2 className="text-2xl text-black font-lato font-bold ">
                New <span className="italic font-light">Collections </span>Of
                Arrivals
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

            {/* Subtitle */}
            <p className="text-[var(--text-muted)] text-base font-lato mt-2">
              Browse the collection of our new products. You will definitely
              find what you are looking for.
            </p>
          </div>

          {/* Product Grid - 4 per row on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <div
                        className="flex gap-6 not-only:transition-transform duration-500 ease-in-out"
                        style={{
                          transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
                        }}
                      >
                        {newArrivalsProducts.map((product, index) => (
                          <div key={index} className="w-1/3 flex-shrink-0 px-4">
                            <ProductCard
                              name={product.name}
                              price={product.price}
                              badges={product.badges}
                              discount={product.discount}
                              image={product.image}
                              originalPrice={product.originalPrice}
                            />
                          </div>
                        ))}
                      </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
