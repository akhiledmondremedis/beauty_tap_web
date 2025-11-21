import React from "react";
import About1 from "../assets/about-1-light.png";
import About2 from "../assets/about-2-light.png";

const Benefits = () => {
  return (
    <section id="benefits" className="relative pt-[150px]">
      <div className="container lg:max-w-[1120px] mx-auto">
        <div
          className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
          data-wow-delay=".2s"
          style={{ visibility: "visible", animationDelay: "0.2s" }}
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            BeautyTap Benefits
          </h2>
          <p className="text-base text-body">
            Experience beauty and business made smarter — all in one app.
          </p>
        </div>

        {/* First Row */}
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          {/* Left Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0">
              <img src={About2} alt="about" className="mx-auto max-w-full" />

              <div className="absolute top-0 right-5 -z-10">
                {/* Decorative SVG 1 */}
                <svg
                  width="72"
                  height="50"
                  viewBox="0 0 72 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_33_10)">
                    <path
                      d="M21.8126 0.216481C21.8159 0.143661 21.8196 0.071493 21.8237 0C21.8203 0.0723874 21.8165 0.144547 21.8126 0.216481C21.4747 7.63863 25.1425 21.8522 42.5976 21.0032C35.4678 21.503 21.3391 26.5685 21.822 42.8298C21.6005 35.7375 17.0094 21.7229 0.441399 21.645C0.291298 21.6473 0.144104 21.6477 0 21.6462C0.148069 21.6447 0.2952 21.6443 0.441399 21.645C7.47462 21.5363 20.8883 17.1617 21.8126 0.216481Z"
                      fill="#7083F5"
                    ></path>
                    <path
                      d="M58.7832 24.2896C58.7851 24.2459 58.7874 24.2025 58.7898 24.1597C58.7878 24.2031 58.7855 24.2464 58.7832 24.2896C58.5804 28.7428 60.7811 37.271 71.2541 36.7616C66.9763 37.0614 58.499 40.1008 58.7888 49.8576C58.6559 45.6022 55.9013 37.1934 45.9605 37.1467C45.8704 37.1481 45.782 37.1482 45.6956 37.1474C45.7844 37.1465 45.8727 37.1462 45.9605 37.1467C50.1803 37.0815 58.2286 34.4567 58.7832 24.2896Z"
                      fill="#7ED8FF"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_33_10">
                      <rect width="71.2541" height="49.8779" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-full rounded-[20px] bg-gradient-1">
                <div className="absolute left-10 -top-12 -z-10">
                  {/* Decorative SVG 2 */}
                  {/* (You can keep this SVG block as is — it's syntactically valid JSX now) */}
                </div>
                <div className="absolute top-0 left-0 h-full w-full bg-texture"></div>
              </div>
            </div>
          </div>

          {/* Right Content */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="lg:max-w-[510px]">
                <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
                 Empower Your Business Digitally
                </h2>
                <span className="mb-4 block text-lg font-medium text-primary md:text-[22px]">
                  Boost your salon’s growth with smart tools.
                </span>

                <p className="mb-[30px] text-base leading-relaxed text-body">
Salon owners can manage appointments, showcase services, and attract new clients using BeautyTab’s all-in-one business dashboard.
Send offers, track performance, and manage multiple branches easily.
                </p>
{[
  { num: 1, title: "Easy appointment management" },
  { num: 2, title: "Smart promotion & customer reach" },
].map((item) => (
  <div className="mb-[15px] flex items-center" key={item.num}>
    <div className="mr-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white">
      {item.num < 10 ? `0${item.num}` : item.num}
    </div>
    <div>
      <h5 className="text-xl font-medium text-black dark:text-white">
        {item.title}
      </h5>
    </div>
  </div>
))}

              </div>
            </div>
        </div>

        {/* Second Row */}
        <div className="pt-[100px]">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            {/* Left Text */}

          <div className="w-full px-4 lg:w-1/2">
            <div className="lg:ml-auto lg:max-w-[510px]">

              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
                Discover & Connect Easily
              </h2>
              <span className="mb-4 block text-lg font-medium text-primary md:text-[22px]">
                Find the perfect salon near you in seconds.
              </span>
              <p className="mb-[30px] text-base leading-relaxed text-body">
BeautyTab helps users discover <b>top-rated salons and parlours nearby</b> with just one tap.
See distance, timing, offers, and reviews — everything in one place.
              </p>
{[
  { num: 1, title: "Location-based search" },
  { num: 2, title: "Real-time salon availability" },
].map((item) => (
  <div className="mb-[15px] flex items-center" key={item.num}>
    <div className="mr-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white">
      {item.num < 10 ? `0${item.num}` : item.num}
    </div>
    <div>
      <h5 className="text-xl font-medium text-black dark:text-white">
        {item.title}
      </h5>
    </div>
  </div>
))}
            </div>
          </div>

            {/* Right Image */}
            <div className="order-first w-full px-4 lg:order-last lg:w-1/2">
              <div className="relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mr-0 lg:mb-0">
                <img src={About1} alt="about" className="mx-auto max-w-full" />
<div class="absolute top-0 right-5 -z-10">
                    <svg width="72" height="50" viewBox="0 0 72 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_34_10)">
                        <path d="M21.8126 0.216481C21.8159 0.143661 21.8196 0.071493 21.8237 0C21.8203 0.0723874 21.8165 0.144547 21.8126 0.216481C21.4747 7.63863 25.1425 21.8522 42.5976 21.0032C35.4678 21.503 21.3391 26.5685 21.822 42.8298C21.6005 35.7375 17.0094 21.7229 0.441399 21.645C0.291298 21.6473 0.144104 21.6477 0 21.6462C0.148069 21.6447 0.2952 21.6443 0.441399 21.645C7.47462 21.5363 20.8883 17.1617 21.8126 0.216481Z" fill="#FF9996"></path>
                        <path d="M58.7832 24.2896C58.7851 24.2459 58.7874 24.2025 58.7898 24.1597C58.7878 24.2031 58.7855 24.2464 58.7832 24.2896C58.5804 28.7428 60.7811 37.271 71.2541 36.7616C66.9763 37.0614 58.499 40.1008 58.7888 49.8576C58.6559 45.6022 55.9013 37.1934 45.9605 37.1467C45.8704 37.1481 45.782 37.1482 45.6956 37.1474C45.7844 37.1465 45.8727 37.1462 45.9605 37.1467C50.1803 37.0815 58.2286 34.4567 58.7832 24.2896Z" fill="#FFCB78"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_34_10">
                          <rect width="71.2541" height="49.8779" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div> 
                  

                <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-full rounded-[20px] bg-gradient-2">
                  <div className="absolute left-10 -top-12 -z-10">
                    {/* Decorative SVG (pink one) — remains valid JSX */}
                  </div>
                  <div className="absolute top-0 left-0 h-full w-full bg-texture"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
