import React from "react";

const Features = () => {
  return (
    <section id="features" className="relative z-10 pt-[110px]">
      {/* Heading */}
      <div className="container">
        <div
          className="mx-auto mb-14 max-w-[960px] text-center lg:mb-[70px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            Powerful features to grow your salon and enhance customer experience
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            BeautyTap: where beauty pros manage, promote, and shine.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="container max-w-[1390px]">
        <div className="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-md dark:bg-[#1E1E2A] md:pb-1 lg:pt-20 lg:pb-5 xl:px-10">
          <div className="-mx-4 flex flex-wrap">
            {[
              {
                title: "Smart Appointment Booking",
                desc: "Schedule, manage, and confirm bookings in one tap.",
                icon: (
<path d="M33 7.33337H31.1667V5.50004C31.1667 5.01258 30.972 4.54546 30.6252 4.19864C30.2784 3.85183 29.8113 3.65704 29.3238 3.65704C28.8364 3.65704 28.3693 3.85183 28.0225 4.19864C27.6756 4.54546 27.4808 5.01258 27.4808 5.50004V7.33337H16.5191V5.50004C16.5191 5.01258 16.3243 4.54546 15.9775 4.19864C15.6307 3.85183 15.1635 3.65704 14.6761 3.65704C14.1887 3.65704 13.7215 3.85183 13.3747 4.19864C13.0279 4.54546 12.8333 5.01258 12.8333 5.50004V7.33337H11C9.01088 7.33337 7.33331 9.01096 7.33331 11V36.6667C7.33331 38.6558 9.01088 40.3334 11 40.3334H33C34.9891 40.3334 36.6666 38.6558 36.6666 36.6667V11C36.6666 9.01096 34.9891 7.33337 33 7.33337ZM33 36.6667H11V18.3334H33V36.6667ZM11 14.6667V11H33V14.6667H11ZM26.5833 23.8334H30.25V27.5H26.5833V23.8334ZM19.25 23.8334H22.9166V27.5H19.25V23.8334ZM11.9166 23.8334H15.5833V27.5H11.9166V23.8334ZM26.5833 30.25H30.25V33.9167H26.5833V30.25ZM19.25 30.25H22.9166V33.9167H19.25V30.25ZM11.9166 30.25H15.5833V33.9167H11.9166V30.25Z" fill="currentColor"></path>                ),
              },
              {
                title: "Location-Based Salon Finder",
                desc: "Customers can easily find top parlours nearby.",
                icon: (
                  <path d="M22 3.66669C15.1996 3.66669 9.58331 9.28294 9.58331 16.0834C9.58331 25.6667 22 40.3334 22 40.3334C22 40.3334 34.4166 25.6667 34.4166 16.0834C34.4166 9.28294 28.8004 3.66669 22 3.66669ZM22 21.0834C19.2395 21.0834 17 18.8439 17 16.0834C17 13.3229 19.2395 11.0834 22 11.0834C24.7605 11.0834 27 13.3229 27 16.0834C27 18.8439 24.7605 21.0834 22 21.0834Z" />
                ),
              },
              {
                title: "Customer Reviews & Ratings",
                desc: "Build reputation and trust.",
                icon: (
                  <path d="M22 3.66669C11.8746 3.66669 3.66669 11.8746 3.66669 22C3.66669 32.1254 11.8746 40.3334 22 40.3334C32.1254 40.3334 40.3334 32.1254 40.3334 22C40.3334 11.8746 32.1254 3.66669 22 3.66669ZM28.0104 32.0834L22 28.7084L15.9896 32.0834L17.4375 25.3542L12.2084 20.625H19.0625L22 14.2917L24.9375 20.625H31.7917L26.5625 25.3542L28.0104 32.0834Z" />
                ),
              },
              {
                title: "Instant Alerts & Notifications",
                desc: "Stay updated on every booking.",
                icon: (
                  <path d="M22 40.3333C23.1046 40.3333 24 39.4379 24 38.3333H20C20 39.4379 20.8954 40.3333 22 40.3333ZM33 31.6666V20.1666C33 14.8116 29.88 10.2729 24.75 8.97957V8.24992C24.75 7.11892 23.881 6.24992 22.75 6.24992C21.619 6.24992 20.75 7.11892 20.75 8.24992V8.97957C15.62 10.2729 12.5 14.8116 12.5 20.1666V31.6666L9.16663 35V36.3333H34.8333V35L33 31.6666Z" />
                ),
              },
              {
                title: "Business Dashboard",
                desc: "Get insights on your performance.",
                icon: (
<path d="M36.6666 7.33337H7.33331C6.40484 7.33337 5.66663 8.07158 5.66663 9.00004V35C5.66663 35.9285 6.40484 36.6667 7.33331 36.6667H36.6666C37.5951 36.6667 38.3333 35.9285 38.3333 35V9.00004C38.3333 8.07158 37.5951 7.33337 36.6666 7.33337ZM20.1666 31.1667H10.0833V24.75H20.1666V31.1667ZM20.1666 22.5834H10.0833V12.8334H20.1666V22.5834ZM33.9166 31.1667H23.8333V18.3334H33.9166V31.1667ZM33.9166 16.1667H23.8333V12.8334H33.9166V16.1667Z" fill="currentColor"></path>                ),
              },
              {
                title: "Multi-Branch Access",
                desc: "Manage all your outlets under one account.",
                icon: (
<path d="M33 5.5C30.4227 5.5 28.3333 7.58933 28.3333 10.1667C28.3333 12.744 30.4227 14.8333 33 14.8333C35.5773 14.8333 37.6666 12.744 37.6666 10.1667C37.6666 7.58933 35.5773 5.5 33 5.5ZM11 5.5C8.42267 5.5 6.33331 7.58933 6.33331 10.1667C6.33331 12.744 8.42267 14.8333 11 14.8333C13.5773 14.8333 15.6666 12.744 15.6666 10.1667C15.6666 7.58933 13.5773 5.5 11 5.5ZM22 29.3333C19.4227 29.3333 17.3333 31.4227 17.3333 34C17.3333 36.5773 19.4227 38.6667 22 38.6667C24.5773 38.6667 26.6666 36.5773 26.6666 34C26.6666 31.4227 24.5773 29.3333 22 29.3333ZM30.25 25.6667H24.75V18.3333H19.25V25.6667H13.75C13.7516 26.9649 13.056 28.1632 11.9166 28.8333C13.759 29.6709 15.3743 31.0151 16.4749 32.7083C17.8376 30.2483 20.6089 28.8493 23.5 29.3333C24.2645 27.2278 26.4167 25.6667 28.8333 25.6667H30.25C30.2516 26.9649 30.9472 28.1632 32.0866 28.8333C30.2442 29.6709 28.6289 31.0151 27.5283 32.7083C26.1655 30.2483 23.3942 28.8493 20.5031 29.3333C19.7386 27.2278 17.5864 25.6667 15.1698 25.6667H13.75C13.7516 24.3681 14.4472 23.1698 15.5866 22.4998C17.429 21.6622 19.0443 20.318 20.1449 18.6248C21.5076 21.0848 24.2789 22.4838 27.17 21.9998C27.9345 24.1053 30.0867 25.6667 32.5033 25.6667H30.25Z" fill="currentColor"></path>                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="w-full px-4 md:w-1/2 lg:w-1/3"
                data-aos="fade-up"
                data-aos-delay={`${(index + 2) * 100}`}
              >
                <div className="group mx-auto mb-[60px] max-w-[310px] text-center">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray-200 text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Graphics */}
<div class="absolute top-0 right-0 -z-10">
          <svg width="602" height="1154" viewBox="0 0 602 1154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.25" filter="url(#filter0_f_26_84)">
              <circle cx="577" cy="577" r="317" fill="url(#paint0_linear_26_84)"></circle>
            </g>
            <defs>
              <filter id="filter0_f_26_84" x="0" y="0" width="1154" height="1154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur_26_84"></feGaussianBlur>
              </filter>
              <linearGradient id="paint0_linear_26_84" x1="183.787" y1="894" x2="970.173" y2="346.491" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8EA5FE"></stop>
                <stop offset="0.541667" stop-color="#BEB3FD"></stop>
                <stop offset="1" stop-color="#90D1FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
    </section>
  );
};

export default Features;
