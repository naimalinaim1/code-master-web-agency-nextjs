import SectionTitle from "@/components/utilsComponents/SectionTitle";
import ServiceItem from "./ServiceItem";
import Technology from "./Technology";

const ServiceSection = () => {
  return (
    <section className="w-[92%] max-w-7xl mx-auto">
      <div className="mt-24 text-[#271356]">
        {/* service description */}
        <SectionTitle
          title="What are web development services?"
          description="Web development encompasses a wide range of services, which include
          delivering websites or web apps, cybersecurity solutions, UX/UI
          design, eCommerce solutions, website architectures, QA testing,
          maintenance, consulting, and even a custom CMS."
        />
        {/* service item and technology */}
        <article className="text-white">
          <ServiceItem />
          <Technology />
        </article>
      </div>
    </section>
  );
};

export default ServiceSection;
