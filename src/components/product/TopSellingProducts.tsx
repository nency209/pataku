'use client'
import { useState } from 'react'
import ProductCard from './ProductCard'
import { newArrivalsProducts } from '@/constants'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TopSellingProducts() {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 4

  const handleNext = () => {
    if (startIndex < newArrivalsProducts.length - visibleCount) {
      setStartIndex(startIndex + 1)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[32px] font-bold font-lato text-black mb-2">
            Top{' '}
            <span className="italic text-[32px] font-light font-lato text-black">
              Selling
            </span>{' '}
            Products
          </h2>
          <p className="text-muted font-rubik font-light text-base">
            Browse the collection of our top selling. You will definitely find
            what you are looking for.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
            }}
          >
            {newArrivalsProducts.map((product, index) => (
              <div
                key={index}
                className="w-1/2 sm:w-1/3 md:w-1/4 flex-shrink-0 px-2"
              >
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

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-1 border border-color shadow"
          >
            <ChevronLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={startIndex >= newArrivalsProducts.length - visibleCount}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-1 border border-color shadow"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
