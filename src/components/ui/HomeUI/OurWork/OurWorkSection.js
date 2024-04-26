import SectionTitle from "@/components/utilsComponents/SectionTitle";
import ClientWorkList from "./ClientWorkList";
import OurProject from "./OurProject";

const OurWorkSection = () => {
  return (
    <section className="w-[92%] max-w-7xl mx-auto">
      {/* service description */}
      <SectionTitle
        title="Our Web-Related Projects"
        description="We recognize that the most complex projects demand that our web
            development team pay attention to every detail in the process of
            creating web-based solutions. we've delivered over 100 projects,
            so we know what it takes to execute a seamless and optimized
            web-based software development process."
      />

      <ClientWorkList />
      <OurProject />
    </section>
  );
};

export default OurWorkSection;
