import SectionSubTitle from "@/components/utilsComponents/SectionSubTitle";
import Image from "next/image";
import website from "@/assets/service/website.jpg";
import webPortal from "@/assets/service/web-portal.jpg";
import eCommerce from "@/assets/service/ecommerce.jpg";

const ServiceItem = () => {
  return (
    <div>
      {/* title */}
      <SectionSubTitle
        title="What Web Solution Do You Need?"
        description="Our battle-tested developers specialize in a wide range of web
          development services. Here are some of the solutions that we can
          deliver for you."
      />
      {/* service items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        <div className="bg-[#271352] text-center py-12  px-3 md:px-6 lg:px-8 mx-auto rounded-md">
          <Image
            className="rounded-full w-20 mx-auto"
            src={website}
            alt=""
            width={80}
            height={80}
          />
          <p className="text-2xl font-bold mt-4 mb-6">Websites</p>
          <p className="leading-relaxed text-lg">
            Since 2024, web agency works with web portals for different
            audiences: customers, business partners, ecommerce users, patients,
            vendors, interest-based communities. A well-designed website is a
            powerful marketing and communication tool that helps build trust and
            generate leads.
          </p>
        </div>
        <div className="bg-[#271352] text-center py-12  px-3 md:px-6 lg:px-8 mx-auto rounded-md">
          <Image
            className="rounded-full w-20 mx-auto"
            src={webPortal}
            alt=""
            width={80}
            height={80}
          />
          <p className="text-2xl font-bold mt-4 mb-6">Web Portal</p>
          <p className="leading-relaxed text-lg">
            Since 2024, web agency works with web portals for different
            audiences: customers, business partners, ecommerce users, patients,
            vendors, interest-based communities. A well-designed website is a
            powerful marketing and communication tool that helps build trust and
            generate leads.
          </p>
        </div>
        <div className="bg-[#271352] text-center py-12  px-3 md:px-6 lg:px-8 mx-auto rounded-md">
          <Image
            className="rounded-full w-20 mx-auto"
            src={eCommerce}
            alt=""
            width={80}
            height={80}
          />
          <p className="text-2xl font-bold mt-4 mb-6">E-commerce</p>
          <p className="leading-relaxed text-lg">
            Since 2024, web agency works with web portals for different
            audiences: customers, business partners, ecommerce users, patients,
            vendors, interest-based communities. A well-designed website is a
            powerful marketing and communication tool that helps build trust and
            generate leads.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
