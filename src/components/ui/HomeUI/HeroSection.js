import Button from "@/components/utilsComponents/Button";
import HashButton from "@/components/utilsComponents/HashButton";
import Image from "next/image";
import heroImg from "@/assets/hero-image/hero.jpg";

const HeroSection = () => {
  return (
    <section>
      <div id="gradient-color">
        <div className="w-[94%] max-w-7xl mx-auto text-center md:text-left grid md:grid-cols-12 items-center gap-y-10 md:gap-4 rounded py-24">
          <div className="text-white col-span-12 md:col-span-7">
            <HashButton>#flexiblesolutions</HashButton>
            <div className="text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-5xl space-y-3 font-semibold mt-12 mb-6">
              <h1 className="hidden md:block">Achieve your</h1>
              <h2 className="md:hidden leading-normal text-center">
                Achieve your business goals with web development solutions
              </h2>
              <h2 className="hidden md:block">Business goals with</h2>
              <h3 className="hidden md:block">Web development solutions</h3>
            </div>
            <p className="sm:text-lg">
              We design and build industry-leading web-based products that bring
              value to your customers, delivered with compelling UX.
            </p>
            <Button href="/service">Start Development</Button>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="mx-auto md:rounded-full" style={{ width: "96%" }}>
              <Image
                src={heroImg}
                alt="Hero image"
                layout="responsive"
                width={500}
                height={430}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
