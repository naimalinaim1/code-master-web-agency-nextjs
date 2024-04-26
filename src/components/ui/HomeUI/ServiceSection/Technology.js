import SectionSubTitle from "@/components/utilsComponents/SectionSubTitle";
import Image from "next/image";
import img from "@/assets/service/ecommerce.jpg";

const Technology = () => {
  return (
    <div>
      {/* title */}
      <SectionSubTitle
        title="Which technologies will bring maximum value to your business?"
        description="Solve customer problems by choosing cutting-edge technologies for your
            tech stack. Take your business to the next level with the right
            solutions tailored to your own requirements."
      />
      {/* technology */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        <div className="bg-[#271352] text-center px-4 py-12 rounded-md">
          <Image
            className="rounded-full w-20 mx-auto"
            src={img}
            alt="Frontend Development"
            width={80}
            height={80}
          />
          <p className="text-xl font-bold mt-4 mb-6">Frontend Development</p>
          <p className="leading-relaxed">
            We use the most popular frontend frameworks like React.js that
            enable us to create the surface layer of your product.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-4 py-12 rounded-md">
          <Image
            className="rounded-full w-20 mx-auto"
            src={img}
            alt="Backend Development"
            width={80}
            height={80}
          />
          <p className="text-xl font-bold mt-4 mb-6">Backend Development</p>
          <p className="leading-relaxed">
            We use server-side technologies like Node.js and PHP for prototyping
            and development, producing fast and scalable web apps.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-4 py-12 rounded-md">
          <Image
            className="rounded-full w-20 mx-auto"
            src={img}
            alt="Full Stack Development"
            width={80}
            height={80}
          />
          <p className="text-xl font-bold mt-4 mb-6">Full Stack Development</p>
          <p className="leading-relaxed">
            We deliver end-to-end web development, combining frontend and
            backend solutions and other technologies necessary to make your
            product a success.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-4 py-12 rounded-md">
          <Image
            className="rounded-full w-20 mx-auto"
            src={img}
            alt="Landing page"
            width={80}
            height={80}
          />
          <p className="text-xl font-bold mt-4">Next JS</p>
          <p className="text-xl font-bold mt-2 mb-6">Landing page</p>
          <p className="leading-relaxed">
            We use the most popular frontend frameworks like React.js, that
            enable us to create the surface layer of your product.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-4 py-12 rounded-md">
          <Image
            className="rounded-full w-20 mx-auto"
            src={img}
            alt="PSD, Figma To HTML"
            width={80}
            height={80}
          />
          <p className="text-xl font-bold mt-4">PSD To HTML</p>
          <p className="text-xl font-bold mt-2 mb-6">Figma To HTML</p>
          <p className="leading-relaxed">
            We use the most popular frontend frameworks like Tailwind css and
            Bootstrap css that enable us to create the surface layer of your
            product.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-4 py-12 rounded-md">
          <Image
            className="rounded-full w-20 mx-auto"
            src={img}
            alt="PSD, Figma To React"
            width={80}
            height={80}
          />
          <p className="text-xl font-bold mt-4">PSD To React</p>
          <p className="text-xl font-bold mt-2 mb-6">Figma To React</p>
          <p className="leading-relaxed">
            We use the most popular frontend frameworks like React.js that
            enable us to create the surface layer of your product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
