import HeroSection from "@/components/ui/HomeUI/HeroSection";
import OurWorkSection from "@/components/ui/HomeUI/OurWork/OurWorkSection";
import ServiceSection from "@/components/ui/HomeUI/ServiceSection/ServiceSection";
import Testimonial from "@/components/ui/HomeUI/Testimonial/Testimonial";
import WhyChooseUs from "@/components/ui/HomeUI/WhyChooseUs";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <OurWorkSection />
      <WhyChooseUs />
      <Testimonial />
    </main>
  );
};

export default HomePage;
