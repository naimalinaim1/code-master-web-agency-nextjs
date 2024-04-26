import Link from "next/link";
import { HiArrowSmRight } from "react-icons/hi";

const Button = ({ href, children }) => {
  return (
    <Link href={href}>
      <button className="inline-flex items-center mt-10 text-[#13072E] bg-white py-1 pl-6 rounded-full">
        <span>{children}</span>
        <span className="ml-6 mr-2 block border bg-[#13072E] text-2xl sm:text-3xl text-white p-2.5 rounded-full">
          <HiArrowSmRight />
        </span>
      </button>
    </Link>
  );
};

export default Button;
