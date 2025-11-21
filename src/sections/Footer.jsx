import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* Top Section */}
      <div className="bg-[#F8FAFB] pt-[95px] pb-[46px] dark:bg-[#15182A]">
        <div className="w-full px-4">
          <div className="-mx-4 flex flex-wrap">

            {/* Logo & Description (%) */}
            <div className="w-full px-4 container max-w-[1390px]">
              <div
                className="wow fadeInUp mb-11"
                data-wow-delay=".2s"
              >
                <a href="/" className="mb-8 inline-block">
                  <img
                    src="/src/assets/logo.png"
                    alt="logo"
                    className="block w-[250px] dark:hidden"
                  />
                  <img
                    src="/src/assets/logo.png"
                    alt="logo"
                    className="hidden w-[250px] dark:block"
                  />
                </a>

                <p className="text-base text-body text-gray-600 dark:text-gray-300">
                  We are <a href="https://www.edmondremedis.com/"><b>Edmond Remedis</b></a>,
                  the creators of BeautyTap — a smart, modern platform designed to help beauty
                  parlours grow effortlessly. Our mission is to simplify salon management,
                  connect owners with customers instantly, and bring digital innovation to
                  the beauty industry. With user-friendly features, trusted technology,
                  and a vision for upgrading every salon experience, we are committed to
                  taking your beauty business to the next level.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="wow fadeInUp bg-primary py-7 dark:bg-black"
        data-wow-delay=".2s"
      >
        <div className="container max-w-[1390px]">
          <div className="-mx-3 flex flex-wrap">

            {/* Copyright */}
            <div className="order-last w-full px-3 lg:order-first lg:w-1/3">
              <p className="mt-4 text-center text-base text-white lg:mt-0 lg:text-left">
                &copy; 2025 BeautyTap. All rights reserved
              </p>
            </div>

            {/* Social Icons */}
            <div className="w-full px-3 md:w-1/2 lg:w-1/3">
              <div className="mb-4 flex items-center justify-center space-x-5 md:mb-0 md:justify-start lg:justify-center">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61583502156804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-70 hover:opacity-100"
                  aria-label="facebook"
                >
                  <SocialIcon name="facebook" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/beautytap__erpl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-70 hover:opacity-100"
                  aria-label="instagram"
                >
                  <SocialIcon name="instagram" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/beauty-tap-a8989b398/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-70 hover:opacity-100"
                  aria-label="linkedin"
                >
                  <SocialIcon name="linkedin" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@BeautyTap_erpl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-70 hover:opacity-100"
                  aria-label="youtube"
                >
                  <SocialIcon name="youtube" />
                </a>

              </div>
            </div>

            {/* Privacy / Terms */}
            <div className="w-full px-3 md:w-1/2 lg:w-1/3">
              <div className="flex items-center justify-center space-x-4 sm:space-x-8 md:justify-end">
                <a href="/privacy-polcy" className="text-base text-white ">
                  Privacy Policy
                </a>
                <a href="/terms-conditions" className="text-base text-white ">
                  Terms & Conditions
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};


// SVG Social Icons
const SocialIcon = ({ name }) => {
  switch (name) {
    case "facebook":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
            fill="white"
          />
        </svg>
      );

    case "instagram":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 2H17C20.3 2 22 3.7 22 7V17C22 20.3 20.3 22 17 22H7C3.7 22 2 20.3 2 17V7C2 3.7 3.7 2 7 2ZM12 7.5C9.5 7.5 7.5 9.5 7.5 12C7.5 14.5 9.5 16.5 12 16.5C14.5 16.5 16.5 14.5 16.5 12C16.5 9.5 14.5 7.5 12 7.5ZM18 7.2C17.3 7.2 16.8 7.7 16.8 8.4C16.8 9.1 17.3 9.6 18 9.6C18.7 9.6 19.2 9.1 19.2 8.4C19.2 7.7 18.7 7.2 18 7.2Z"
            fill="white"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M6.94 5C6.94 6.1 6.1 6.94 5 6.94C3.9 6.94 3.06 6.1 3.06 5C3.06 3.9 3.9 3.06 5 3.06C6.1 3.06 6.94 3.9 6.94 5ZM7 8.48H3V21H7V8.48ZM13.32 8.48H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.9 14.94 7.13 13.28 10.16V8.48H13.32Z"
            fill="white"
          />
        </svg>
      );

    case "youtube":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M10 15.5L16 12L10 8.5V15.5ZM21.8 7.2C22 8 22 9.3 22 12C22 14.7 22 16 21.8 16.8C21.6 17.6 21.1 18.1 20.3 18.3C19.5 18.5 18.2 18.5 15.5 18.5H8.5C5.8 18.5 4.5 18.5 3.7 18.3C2.9 18.1 2.4 17.6 2.2 16.8C2 16 2 14.7 2 12C2 9.3 2 8 2.2 7.2C2.4 6.4 2.9 5.9 3.7 5.7C4.5 5.5 5.8 5.5 8.5 5.5H15.5C18.2 5.5 19.5 5.5 20.3 5.7C21.1 5.9 21.6 6.4 21.8 7.2Z"
            fill="white"
          />
        </svg>
      );

    default:
      return null;
  }
};

export default Footer;
