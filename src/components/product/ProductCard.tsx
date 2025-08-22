"use client";
import Image from "next/image";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { ProductCardProps } from "@/types";

export default function ProductCard({
  name,
  price,
  originalPrice,
  badges,
  countdown,
  image,
  discount,
}: ProductCardProps) {
  return (
    <div className="cursor-pointer">
      {countdown && (
        <div className="mt-2 text-xs sm:text-sm text-muted flex border border-color  justify-evenly py-3 sm:py-4 ">
          {[
            { value: countdown[0], label: "days" },
            { value: countdown[1], label: "hours" },
            { value: countdown[2], label: "minutes" },
            { value: countdown[3], label: "seconds" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col">
              <p
                key={index}
                className="font-light font-rubik text-lg text-black text-center"
              >
                {String(item.value).padStart(2, "0")}
              </p>
              <span className="font-light font-rubik text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="relative">
        <div className="w-full bg-card flex items-center mt-3 sm:mt-4 ">
          {image ? (
            <div className="relative w-full aspect-[401/480] group">
              <Image
                src={image}
                alt={name}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                className="object-contain bg-card"
              />
              <div className="absolute top-2 right-3 sm:right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full shadow flex items-center justify-center">
                  <Eye className="w-3 h-3 text-muted text-hover hover:cursor-pointer" />
                </button>

                <button className="bg-white p-2 rounded-full shadow flex items-center justify-center">
                  <Heart className="w-3 h-3 text-muted text-hover hover:cursor-pointer" />
                </button>
              </div>

              {/* Cart (bottom-right) */}
              <div className="absolute bottom-1 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full shadow flex items-center justify-center bg-hover border primary-border  hover:cursor-pointer">
                  <ShoppingCart className="w-3 h-3 text-muted hover:text-white  hover:cursor-pointer" />
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-muted text-sm">No image</span>
            </div>
          )}
        </div>

        {badges && badges.length > 0 && (
          <div className="absolute top-6  left-4  bg-black text-white px-1 font-rubik font-light text-xs  ">
            {badges.map((badges, index) => (
              <div key={index}>{badges}</div>
            ))}
          </div>
        )}

        {discount && (
          <div className="absolute top-12  left-4  bg-primary  px-1 text-white font-rubik font-light text-[11px]  ">
            -{discount}%
          </div>
        )}
      </div>

      <div className="mt-3 ">
        <h3 className="text-base font-light font-rubik text-black text-hover">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-base font-light font-rubik text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm font-light font-rubik text-muted line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
