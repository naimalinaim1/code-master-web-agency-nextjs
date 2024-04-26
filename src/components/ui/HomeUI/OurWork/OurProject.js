import Image from "next/image";
import project1 from "@/assets/project/1.png";
import project2 from "@/assets/project/2.jpg";

const OurProject = () => {
  return (
    <div className="text-[#271356] space-y-40 lg:space-y-0">
      {/* project1 */}
      <div className="grid lg:grid-cols-2 items-center">
        <Image
          className="md:h-[650px] w-full"
          src={project1}
          alt=""
          width="100%"
          height="md:h-[650px]"
        />
        <div className="lg:pl-12 mt-10 lg:mt-0">
          <h2 className="text-2xl text-[#271356] font-semibold lg:w-[85%] mb-12">
            Working with ADN in rebuilding the largest French-language animation
            streaming platform
          </h2>
          <div className="text-lg space-y-4">
            <p className="text-[#009DFF]">
              Frontend Development & UI Design Services
            </p>
            <p>
              <span className="text-[#009DFF]">Technologies:</span> React,
              Gatsby, Redux, Storybook.
            </p>
            <p>
              <span className="text-[#009DFF]">Client Expectations:</span> To
              create demo versions of UBS
              {"'"}s apps for personal banking, wealth management, and business
              banking.
            </p>
            <p>
              <span className="text-[#009DFF]">Result of the partnership:</span>{" "}
              Web agency developed web-based frontend mirroring UBS apps, which
              showcased their essential functions without revealing any
              sensitive data. This made it easier for potential clients to
              become familiar with the original apps, and also made the process
              of educating client advisors quick and flawless.
            </p>
          </div>
        </div>
      </div>
      {/* project2 */}
      <div className="grid lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1 lg:pr-12 mt-10 lg:mt-0">
          <h2 className="text-2xl text-[#271356] font-semibold lg:w-[85%] mb-12">
            Working with ADN in rebuilding the largest French-language animation
            streaming platform
          </h2>
          <div className="text-lg space-y-4">
            <p className="text-[#009DFF]">
              Frontend Development & UI Design Services
            </p>
            <p>
              <span className="text-[#009DFF]">Technologies:</span> React,
              Gatsby, Redux, Storybook.
            </p>
            <p>
              <span className="text-[#009DFF]">Client Expectations:</span> To
              create demo versions of UBS
              {"'"}s apps for personal banking, wealth management, and business
              banking.
            </p>
            <p>
              <span className="text-[#009DFF]">Result of the partnership:</span>{" "}
              Web agency developed web-based frontend mirroring UBS apps, which
              showcased their essential functions without revealing any
              sensitive data. This made it easier for potential clients to
              become familiar with the original apps, and also made the process
              of educating client advisors quick and flawless.
            </p>
          </div>
        </div>
        <Image
          className="order-1 lg:order-2 md:h-[650px] w-full"
          src={project2}
          alt=""
          width="100%"
          height="md:h-[650px]"
        />
      </div>
      {/* project3 */}
      <div className="grid lg:grid-cols-2 items-center">
        <Image
          className="md:h-[650px] w-full"
          src={project1}
          alt=""
          width="100%"
          height="md:h-[650px]"
        />
        <div className="lg:pl-12 mt-10 lg:mt-0">
          <h2 className="text-2xl text-[#271356] font-semibold lg:w-[85%] mb-12">
            Working with ADN in rebuilding the largest French-language animation
            streaming platform
          </h2>
          <div className="text-lg space-y-4">
            <p className="text-[#009DFF]">
              Frontend Development & UI Design Services
            </p>
            <p>
              <span className="text-[#009DFF]">Technologies:</span> React,
              Gatsby, Redux, Storybook.
            </p>
            <p>
              <span className="text-[#009DFF]">Client Expectations:</span> To
              create demo versions of UBS
              {"'"}s apps for personal banking, wealth management, and business
              banking.
            </p>
            <p>
              <span className="text-[#009DFF]">Result of the partnership:</span>{" "}
              Web agency developed web-based frontend mirroring UBS apps, which
              showcased their essential functions without revealing any
              sensitive data. This made it easier for potential clients to
              become familiar with the original apps, and also made the process
              of educating client advisors quick and flawless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
