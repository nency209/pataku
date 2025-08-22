import { Metadata } from "next";
import { homePageMetadata } from "@/lib/metadata";
import {Header,Footer } from "@/layout";
import Hero from "@/components/sections/Hero";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import NewArrivals from "@/components/sections/NewArrivals";
import PromotionalBanner from "@/components/sections/PromotionalBanner";
import BottomSections from "@/components/sections/BottomSections";
import LivingRoomBanner from "@/components/sections/LivingRoomBanner";
import TopSellingProducts from "@/components/product/TopSellingProducts";
import BlogPosts from "@/components/blog/BlogPosts";
import BrowseCategories from "@/components/sections/BrowserCategories";
import Navbar from "@/components/sections/Navbar";


export const metadata: Metadata = homePageMetadata;

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.2fr_2.3fr] items-center justify-center border-t border-color gap-6">
        <BrowseCategories/>
        <Navbar/>
      </div>
      <Hero />
      <FeaturedCategories />
      <NewArrivals />
      <PromotionalBanner />
      <BottomSections />
      <LivingRoomBanner />
      <TopSellingProducts />
      <BlogPosts />
      <Footer />
    </main>
  );
}
