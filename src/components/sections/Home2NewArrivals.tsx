"use client";
import { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { newArrivalsProducts } from "@/constants";

export default function Home2NewArrivals() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    if (startIndex < newArrivalsProducts.length - visibleCount) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="overflow-hidden mt-20">
      <div className="max-w-6xl px-4 mx-auto">

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
            Browse the collection of our new products. You will definitely find
            what you are looking for.
          </p>
        </div>

        <div className="overflow-hidden">
          <div
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
          </div>
        </div>
      </div>
    </section>
  );
}
