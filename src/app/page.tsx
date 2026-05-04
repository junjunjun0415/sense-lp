import HeroSection from "@/components/sections/HeroSection";
import ConceptSection from "@/components/sections/ConceptSection";
import PointsSection from "@/components/sections/PointsSection";
import MenuSection from "@/components/sections/MenuSection";
import StylistSection from "@/components/sections/StylistSection";
import GallerySection from "@/components/sections/GallerySection";
import SalonInfoSection from "@/components/sections/SalonInfoSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <PointsSection />
      <MenuSection />
      <StylistSection />
      <GallerySection />
      <SalonInfoSection />
      <Footer />
    </>
  );
}
