import Image from "next/image";
const slides = [
  {
    title: "Comfort & Practicality",
    description:
      "An elegant selection of chair combining comfort & practicality",
    image: "/img/slider8.jpg",
    buttonText: "Shop Now",
  },
  {
    title: "Modern & Stylish",
    description: "Upgrade your home with our modern furniture collection",
    image: "/img/chair2.png",
    buttonText: "Explore",
  },
  {
    title: "Quality & Durability",
    description: "Furniture that lasts and stays beautiful for years",
    image: "/img/chair3.png",
    buttonText: "Discover",
  },
];
export default function About() {
  return (
    <div className="w-full max-w-6xl mx-auto py-24 space-y-16">
      <div className=" grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <Image
            src="/img/about-banner.jpg"
            width={800}
            height={517}
            alt="About banner"
            className="object-contain"
          />
        </div>
        <div className="col-span-1 space-y-12">
          <div className="px-4 space-y-8 ">
            <p className="text-4xl font-bold">WELCOME TO PATAKU.</p>
            <p className="text-sm ">
              PATAKU provide how all this mistaken idea of denouncing pleasure
              and sing pain was born an will give you a complete account of the
              system, and expound the actual teachings of the eat explorer of
              the truth, the mer of human.
            </p>
          </div>

          <div className="px-4 space-y-4 ">
            <p className="text-lg font-bold">WELCOME TO PATAKU.</p>
            <p className="text-sm ">
              PATAKU provide how all this mistaken idea of denouncing pleasure
              and sing pain was born an will give you a complete account of the
              system, and expound the actual teachings of the eat explorer of
              the truth, the mer of human.
            </p>
          </div>
        </div>
      </div>
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

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="space-y-4">
          <p className="text-2xl font-lato font-bold">OUR VISION</p>

          <p className="text-sm font-rubik  font-light pr-4">
            PATAKU provide how all this mistaken idea of denouncing pleasure and
            sing pain was born and will give you an ete account of the system,
            and expound the actual teangs the eat explorer of the truth, the mer
            of human tas assumenda est, omnis dolor repellend
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-lato font-bold">OUR MISSION</p>

          <p className="text-sm font-rubik  font-light pr-4">
            PATAKU provide how all this mistaken idea of denouncing pleasure and
            sing pain was born and will give you an ete account of the system,
            and expound the actual teangs the eat explorer of the truth, the mer
            of human tas assumenda est, omnis dolor repellend
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-lato font-bold">OUR GOAL</p>

          <p className="text-sm font-rubik  font-light pr-4">
            PATAKU provide how all this mistaken idea of denouncing pleasure and
            sing pain was born and will give you an ete account of the system,
            and expound the actual teangs the eat explorer of the truth, the mer
            of human tas assumenda est, omnis dolor repellend
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-2xl font-lato font-bold">
          YOU CAN CHOOSE US BECAUSE<br></br>WE ALWAYS PROVIDE IMPORTANCE...
        </p>
        <p className="text-sm font-rubik  font-light ">
          PATAKU provide how all this mistaken idea of denouncing pleasure and
          sing pain was born <br></br>will give you a complete account of the
          system, and expound the actual
        </p>
      </div>
      <div className=" grid grid-cols-[1fr_0.7fr] gap-40">
        <div className="grid grid-cols-2 space-y-4 gap-20">
          <div className="space-y-4 ">
            <div className="space-y-2  ">
              <p className="text-lg font-bold font-lato">FAST DELIVERY</p>
              <p className="text-sm font-light  font-rubik">
                PATAKU provide how all this mistaken idea of denouncing pleasure
                and sing
              </p>
            </div>
            <div className="space-y-2  ">
              <p className="text-lg font-bold font-lato">SECURE PAYMENT</p>
              <p className="text-sm font-light  font-rubik">
                PATAKU provide how all this mistaken idea of denouncing pleasure
                and sing
              </p>
            </div>
            <div className="space-y-2  ">
              <p className="text-lg font-bold font-lato">EASY ORDER TRACKING</p>
              <p className="text-sm font-light  font-rubik">
                PATAKU provide how all this mistaken idea of denouncing pleasure
                and sing
              </p>
            </div>
            <div className="space-y-2  ">
              <p className="text-lg font-bold font-lato">24/7 SUPPORT</p>
              <p className="text-sm font-light  font-rubik">
                PATAKU provide how all this mistaken idea of denouncing pleasure
                and sing
              </p>
            </div>
          </div>

          <div className="space-y-4 " >
            <div className="space-y-2  ">
              <p className="text-lg font-bold font-lato">QUALITY PRODUCT</p>
              <p className="text-sm font-light font-rubik">
                PATAKU provide how all this mistaken idea of denouncing pleasure
                and sing
              </p>
            </div>
            <div className="space-y-2 ">
              <p className="text-lg font-bold font-lato">MONEY BACK GUARNTEE</p>
              <p className="text-sm font-lightfont-rubik">
                PATAKU provide how all this mistaken idea of denouncing pleasure
                and sing
              </p>
            </div>
            <div className="space-y-2 ">
              <p className="text-lg font-bold font-lato">FREE RETURN</p>
              <p className="text-sm font-light  font-rubik">
                PATAKU provide how all this mistaken idea of denouncing pleasure
                and sing
              </p>
            </div>
           
          </div>
        </div>
       <div className="relative w-full h-80 border ">
  <Image
    src="/img/home3-banner8.jpg"
    fill
    alt="About banner"
    className="object-cover"
  />
</div>

      </div>
    </div>
  );
}
