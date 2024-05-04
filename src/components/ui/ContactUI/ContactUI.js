import Image from "next/image";
import contactImg from "@/assets/contact/contact.jpg";
import SectionSubTitle from "@/components/utilsComponents/SectionSubTitle";
import ContactForm from "./ContactForm";

const ContactUI = () => {
  return (
    <main className="w-[94%] max-w-7xl mx-auto mb-32 md:mb-28">
      <div className="-mt-32 md:mt-[-11rem] mb-8">
        <SectionSubTitle title="GET IN TOUCH" description="discription" />
      </div>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <Image
          src={contactImg}
          alt="Contact Image"
          width={80}
          height={80}
          layout="responsive"
        />
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactUI;
