import HashButton from "@/components/utilsComponents/HashButton";
import SectionTitle from "@/components/utilsComponents/SectionTitle";

const WhyChooseUs = () => {
  const data = [
    {
      id: 1,
      buttonName: "#one",
      title: "Reliability",
      description:
        "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
    },
    {
      id: 2,
      buttonName: "#two",
      title: "Transparency",
      description:
        "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. ",
    },
    {
      id: 3,
      buttonName: "#three",
      title: "Simplicity",
      description:
        "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
    },
  ];

  return (
    <section className="w-[92%] max-w-7xl mx-auto">
      <SectionTitle
        title="Reasons to choose Web Agency Inc."
        description="We recognize that the most complex projects demand that our web
          development team pay attention to every detail in the process of
          creating web-based solutions. we've delivered over 100 projects,
          so we know what it takes to execute a seamless and optimized web-based
          software development process."
      />

      {/* items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white mt-24">
        {data.map((item) => (
          <div key={item.id} className="bg-[#271352] p-2  rounded-md">
            <HashButton>{item.buttonName}</HashButton>
            <div className="px-14 py-20">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
