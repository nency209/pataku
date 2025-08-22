import Image from "next/image";

export default function PromotionalBanner() {
  return (
    <section className=" py-8 sm:py-12">
      {/* Right side - Image */}

      <div className="relative w-full">
        <div className="relative w-full h-[360px] sm:h-[420px] ">
          {/* Background Image */}
          <Image
            src="/img/fullwidth-banner-1.jpg"
            alt="promotional banner"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            priority
          />
        </div>

        <div className="absolute top-24 left-96  border-black ">
          {/* Left side - Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-light font-rubik text-[#434343] italic">
              It&apos;s your job to have the idea. It&apos;s <br></br>ours to
              make it happen.
            </h2>
            <p className="text-xl  text-muted font-rubik">
              We are a Melbourne based furniture maker helping <br></br>people
              bring their ideas to life.
            </p>
            <button className="text-lg font-light font-rubik border-t border-black text-[#434343] hover:cursor-pointer text-hover justify-center items-center flex py-4">
              View our products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
