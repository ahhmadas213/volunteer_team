import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import InitiativesSection from "@/components/InitiativesSection";
// import TweetList from "@/components/TweetList";
import ValuesSection from "@/components/ValuesSection";

export default function Home() {
  return (
    <div className="bg-cream ">
      {/* Your content here */}
      {/* <AboutSection/> */}
      <HeroSection />
      {/* <AboutSection/> */}
      <AboutSection />
      <ValuesSection />

      <InitiativesSection />
      <ImageGallery />
      {/* <TweetList/> */}

      {/* <AboutSection/> */}


    </div>
  );
}
