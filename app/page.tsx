import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import InitiativesSection from "@/components/InitiativesSection";
import ValuesSection from "@/components/ValuesSection";

export default function Home() {
  return (
    <div className="bg-cream ">
      <HeroSection />
      <AboutSection />
      <ValuesSection />

      <InitiativesSection />
      <ImageGallery />


    </div>
  );
}
