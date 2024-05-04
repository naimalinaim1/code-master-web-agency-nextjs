import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#271352] pt-2">
      <div className="bg-white rounded-t-[65px]">
        {/* footer link */}
        <div className="pt-24 pb-52 text-[#13072E] rounded-t-[35px]">
          <div className="footer w-[94%] max-w-7xl mx-auto">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-0 lg:grid-cols-4">
                {/* logo and social link */}
                <aside>
                  <p className="text-3xl font-bold">Image</p>
                  <p className="text-lg my-5">
                    Agency offers full-stack development using Next.js, React,
                    Tailwind, and Bootstrap for seamless frontend and backend
                    solutions tailored to client needs.
                  </p>
                </aside>
                {/* services link */}
                <nav className="space-y-6 lg:pl-10">
                  <header className="text-2xl font-bold mb-8">Services</header>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Websites
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Web Portal
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      E-commerce
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Full Stack Development
                    </a>
                  </p>
                </nav>
                {/* More */}
                <nav className="space-y-6 lg:pl-6">
                  <header className="text-2xl font-bold  mb-8">More</header>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Frontend Development
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Backend Development
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Leanding Page
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Next JS
                    </a>
                  </p>
                </nav>
                {/* Contact us */}
                <nav className="space-y-6">
                  <header className="text-2xl font-bold mb-8">
                    Contact Us
                  </header>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Phone: <span className="text-lg">+88 01568-123456</span>
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block ">
                      Email:&nbsp;
                      <span className="text-lg">
                        hello@my-web-agency.surge.sh
                      </span>
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Address:&nbsp;
                      <span className="text-lg">Dhaka, Bangladesh.</span>
                    </a>
                  </p>
                  <p className="text-xl cursor-pointer inline-block mt-1">
                    <Link
                      href="/contact"
                      className="bg-[#13072E] text-white text-sm font-semibold py-2.5 inline-block px-6 rounded-full"
                    >
                      Message Now
                    </Link>
                  </p>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="text-xl flex justify-between pt-6 pb-10 w-[94%] max-w-7xl mx-auto border-t-2 border-[#ADACB8]">
          <p>&copy; Wardiere Inc. All Rights Reserved 2023</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
