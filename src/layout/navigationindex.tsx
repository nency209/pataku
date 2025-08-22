"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationIndex() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="w-full bg-surface flex items-center justify-evenly px-8 py-10">
      {/* Left side - Breadcrumbs */}
      <div>
        <ol className="flex items-center text-gray-600">
          <li>
            <Link href="/" className="hover:text-black">
              Home
            </Link>
          </li>

          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            const label = segment.charAt(0).toUpperCase() + segment.slice(1);

            return (
              <li key={href} className="flex items-center space-x-2 ml-2">
                <span>/</span>
                <Link href={href} className="text-black">
                  {label}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Right side - Image */}
      <div className="relative h-24 w-1/3">
        <Image
          src="/img/slider1.jpg"
          alt="promotional banner"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
