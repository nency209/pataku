'use client'
import ProductCard from "@/components/product/ProductCard";
import { newArrivalsProducts } from "@/constants";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NewArrivals() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 10; // 5 × 2 rows

  const totalPages = Math.ceil(newArrivalsProducts.length / itemsPerPage);

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <section className="py-8 md:py-16 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 line-s">
          <h2 className="text-[32px] font-bold font-lato text-black mb-2">
            New 
            <span className="italic text-[32px] font-light font-lato text-black">
              Collections 
            </span>
            Of Arrivals
          </h2>
          <p className="text-muted font-rubik font-light text-base">
            Browse the collection of our new products. You will definitely find
            what you are looking for.
          </p>
        </div>

        {/* Products Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * itemsPerPage;
              const end = start + itemsPerPage;
              const products = newArrivalsProducts.slice(start, end);

              return (
                <div
                  key={pageIndex}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 min-w-full"
                >
                  {products.map((product, index) => (
                    <ProductCard
                      key={index}
                      name={product.name}
                      price={product.price}
                      badges={product.badges}
                      image={product.image}
                      originalPrice={product.originalPrice}
                      discount={product.discount}
                    />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 border border-color text-muted shadow"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 border border-color shadow text-muted"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
