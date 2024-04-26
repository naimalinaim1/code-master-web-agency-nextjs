const ClientWorkList = () => {
  return (
    <div className="text-lg  text-center grid gap-y-3 md:gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#F2F5F7] py-10 my-24 rounded-lg">
      <div>
        <p className="text-4xl font-semibold text-[#13072E]">50+</p>
        <p>Frontend Development</p>
      </div>
      <p className="divider md:hidden"></p>
      <div>
        <p className="text-4xl font-semibold text-[#13072E]">34+</p>
        <p>Backend Development</p>
      </div>
      <p className="divider md:hidden"></p>
      <div>
        <p className="text-4xl font-semibold text-[#13072E]">18+</p>
        <p>Full Stack Development</p>
        <p className="divider md:hidden"></p>
      </div>
      <div>
        <p className="text-4xl font-semibold text-[#13072E]">36+</p>
        <p>PSD TO HTML/ NEXT JS</p>
      </div>
    </div>
  );
};

export default ClientWorkList;
