const SectionSubTitle = ({ title, description }) => {
  return (
    <div className="text-center text-[#271356] mt-36 md:mt-52">
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
      <p className="mt-3 sm:text-lg w-[92%] md:w-[85%] lg:w-[70%] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionSubTitle;
