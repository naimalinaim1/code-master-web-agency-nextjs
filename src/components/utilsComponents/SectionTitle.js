const SectionTitle = ({ title, description }) => {
  return (
    <article className="text-[#271356] mt-28 md:mt-40">
      <p className="text-3xl leading-[1.4] md:text-4xl font-bold">{title}</p>
      <p className="w-[92%] md:w-[85%] lg:w-[70%] sm:text-lg mt-6">
        {description}
      </p>
    </article>
  );
};

export default SectionTitle;
