const Footer = () => {
  return (
    <footer className="bg-[#271352]">
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
                    Web agency explainer videos, product videos, and videos for
                    large brands and innovative startups.
                  </p>
                </aside>
                {/* services link */}
                <nav className="space-y-6 lg:pl-16">
                  <header className="text-2xl font-bold  mb-8">Services</header>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Explainer Video
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      SaaS Product Videos
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Partnership
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Referral Program
                    </a>
                  </p>
                </nav>
                {/* More */}
                <nav className="space-y-6 lg:pl-20">
                  <header className="text-2xl font-bold  mb-8">More</header>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      About us
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Contact us
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Clutch reviews
                    </a>
                  </p>
                </nav>
                {/* Contact us */}
                <nav className="space-y-6">
                  <header className="text-2xl font-bold  mb-8">
                    Contact Us
                  </header>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Phone: <span className="text-lg">+88 01568-123456</span>
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block ">
                      Email:{" "}
                      <span className="text-lg">
                        hello@my-web-agency.surge.sh
                      </span>
                    </a>
                  </p>
                  <p>
                    <a className="text-xl cursor-pointer inline-block">
                      Address:{" "}
                      <span className="text-lg">
                        Zirabo, Ashulia, Dhaka, Bangladesh.
                      </span>
                    </a>
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
