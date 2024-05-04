import Image from "next/image";
import heroImg from "@/assets/hero-image/hero.jpg";
import SectionTitle from "@/components/utilsComponents/SectionTitle";

const AboutPage = () => {
  return (
    <main>
      <section>
        {/* hero section */}
        <div id="gradient-color">
          <div className="w-[94%] max-w-7xl mx-auto rounded py-24 text-white">
            <h1 className="text-5xl font-bold">About Code Master</h1>
            <p className="text-gray-400 mt-4 pl-10 text-xl">
              Since founded 2024. web development company{" "}
              <strong>Code Master.</strong>
            </p>
          </div>
        </div>
        {/* about section */}
        <div className="w-[94%] max-w-7xl mx-auto">
          {/* about: description */}
          <div className="pt-32 grid md:grid-cols-2 gap-4">
            <Image
              src={heroImg}
              alt="Hero image"
              layout="responsive"
              width={400}
              height={430}
            />
            <div className="py-10">
              <h2 className="text-4xl font-bold">Code Master</h2>
              <p className="text-gray-500 text-lg mt-10">
                In the intricate realm of web development, where every pixel
                matters and every line of code shapes the digital landscape,
                finding a partner who not only comprehends the complexity but
                thrives in it is paramount. At Code Master, we embody this ethos
                with unwavering dedication, making us your quintessential choice
                for all your web development needs.
              </p>
              <p className="text-gray-500 text-lg mt-4">
                In a rapidly evolving digital landscape, entrusting your web
                development endeavors to Code Master guarantees more than just a
                website—it ensures a transformative digital presence that
                resonates with your audience, fosters engagement, and drives
                results. Choose Code Master as your web development partner and
                embark on a journey towards digital excellence.
              </p>
            </div>
          </div>
          {/* member image */}
          <div className="mb-60">
            <SectionTitle
              title="Team Member's"
              description="Web development encompasses a wide range of services, which include delivering websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, website architectures, QA testing, maintenance, consulting, and even a custom CMS."
            />
            <div className="grid md:grid-cols-3 gap-3 mt-20">
              <Image src={heroImg} alt="Member Image" layout="responsive" />
              <Image src={heroImg} alt="Member Image" layout="responsive" />
              <Image src={heroImg} alt="Member Image" layout="responsive" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
