import { Metadata } from "next";
import { homePageMetadata } from "@/lib/metadata";
import { Header, Footer } from "@/layout";
import Home2Hero from "@/components/sections/Home2Hero";

import BlogPosts from "@/components/blog/BlogPosts";
import LivingRoomBanner from "@/components/sections/LivingRoomBanner";
import Home2LivingRoomBanner from "@/components/sections/Home2LivingRoomBanner";
import Home2NewArrivals from "@/components/sections/Home2NewArrivals";
import { DiningRoomProduct } from "@/components";
import OutdoorFurniture from "@/components/product/OutdoorFurniture";
import Home2Banner from "@/components/sections/Home2Banner";
import Home2FeaturedCategories from "@/components/sections/Home2FeaturesCategories";
import Home2Brand from "@/components/sections/Home2Brand";
import Navbar from "@/components/sections/Navbar";

export const metadata: Metadata = {
  ...homePageMetadata,
  title: "Home Shop 2 | Pataku",
  description:
    "Explore our second home shop variant featuring modern furniture and home decor. Discover unique pieces for your living space.",
};

export default function Home2Page() {
  return (
    <div className="theme-home2">
      <Header />
      <div className="bg-navbar">
        <div className="max-w-6xl mx-auto">
          <Navbar />
        </div>
      </div>

      <Home2Hero />
      <Home2NewArrivals />
      <Home2LivingRoomBanner />
      <DiningRoomProduct />
      <LivingRoomBanner />
      <OutdoorFurniture />
      <Home2Banner />
      <Home2FeaturedCategories />
      <Home2Brand />
      <BlogPosts />
      <Footer />
    </div>
  );
}
