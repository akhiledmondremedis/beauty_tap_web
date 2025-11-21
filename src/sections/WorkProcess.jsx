import React from "react";

const WorkProcess = () => {
  return (
    <section id="work-process" className="relative z-10 pt-[110px]">
      {/* Section Title */}
      <div className="container">
        <div className="mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            How it Works?
          </h2>
          <p className="text-base text-body">
            Get started in minutes — beauty made simple, smart, and seamless.
          </p>
        </div>
      </div>

      {/* Work Process Cards */}
      <div className="container max-w-[1390px]">
        <div className="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-card dark:bg-dark dark:shadow-card-dark md:pb-1 lg:pt-20 lg:pb-5 xl:px-10">
          <div className="-mx-4 flex flex-wrap justify-center">
            {/* Step 1 */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="group mx-auto mb-[60px] max-w-[310px] text-center">
                <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                  {/* Download Icon */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_40_12)">
                      <path
                        d="M21.6667 16.6667H30L20 26.6667L10 16.6667H18.3333V5H21.6667V16.6667ZM6.66668 31.6667H33.3333V20H36.6667V33.3333C36.6667 33.7754 36.4911 34.1993 36.1785 34.5118C35.866 34.8244 35.442 35 35 35H5.00001C4.55798 35 4.13406 34.8244 3.8215 34.5118C3.50894 34.1993 3.33334 33.7754 3.33334 33.3333V20H6.66668V31.6667Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_12">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                  Download the App
                </h3>
                <p className="text-base text-body">
                  Get BeautyTab from Play Store or App Store.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="group mx-auto mb-[60px] max-w-[310px] text-center">
                <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                  {/* Profile Icon */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_40_15)">
                      <path
                        d="M20 36.6667C10.795 36.6667 3.33333 29.205 3.33333 20C3.33333 10.795 10.795 3.33337 20 3.33337C29.205 3.33337 36.6667 10.795 36.6667 20C36.6667 29.205 29.205 36.6667 20 36.6667ZM11.6883 30.4267C14.0476 32.3129 16.9795 33.3382 20 33.3334C23.2833 33.3334 26.2883 32.1467 28.6117 30.18C27.5262 29.0663 26.2284 28.1815 24.7951 27.578C23.3617 26.9746 21.8219 26.6647 20.2667 26.6667C18.6543 26.6648 17.0592 26.9981 15.5824 27.6454C14.1057 28.2927 12.7796 29.2398 11.6883 30.4267ZM9.36 28.0334C10.7608 26.5468 12.4511 25.3629 14.3269 24.5546C16.2027 23.7462 18.2241 23.3306 20.2667 23.3334C22.2361 23.3308 24.1866 23.7173 26.0062 24.4707C27.8259 25.224 29.4788 26.3294 30.87 27.7234C32.2968 25.7152 33.1394 23.3511 33.3043 20.8932C33.4692 18.4354 32.9499 15.9798 31.8041 13.7991C30.6584 11.6184 28.9309 9.79775 26.8133 8.53912C24.6957 7.28049 22.2708 6.6331 19.8077 6.66879C17.3445 6.70448 14.9394 7.42185 12.8592 8.7413C10.779 10.0608 9.10493 11.9307 8.02282 14.1437C6.94071 16.3567 6.49282 18.8262 6.72886 21.2783C6.9649 23.7304 7.87562 26.0691 9.36 28.035V28.0334ZM20 21.6667C18.2319 21.6667 16.5362 20.9643 15.286 19.7141C14.0357 18.4638 13.3333 16.7682 13.3333 15C13.3333 13.2319 14.0357 11.5362 15.286 10.286C16.5362 9.03575 18.2319 8.33337 20 8.33337C21.7681 8.33337 23.4638 9.03575 24.714 10.286C25.9643 11.5362 26.6667 13.2319 26.6667 15C26.6667 16.7682 25.9643 18.4638 24.714 19.7141C23.4638 20.9643 21.7681 21.6667 20 21.6667Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_15">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                  Create Your Profile
                </h3>
                <p className="text-base text-body">
                  As a user or salon owner.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="group mx-auto mb-[60px] max-w-[310px] text-center">
                <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                  {/* Heart Icon */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_40_18)">
        <path
          d="M33.3333 22.5V17.5L36.6667 15.8333L35.4167 11.6667L31.6667 12.5C31.0833 11.4167 30.3333 10.4167 29.4167 9.58333L30.8333 5.83333L26.6667 4.58333L25 8.33333H20L18.3333 4.58333L14.1667 5.83333L15.5833 9.58333C14.6667 10.4167 13.9167 11.4167 13.3333 12.5L9.58333 11.6667L8.33333 15.8333L11.6667 17.5V22.5L8.33333 24.1667L9.58333 28.3333L13.3333 27.5C13.9167 28.5833 14.6667 29.5833 15.5833 30.4167L14.1667 34.1667L18.3333 35.4167L20 31.6667H25L26.6667 35.4167L30.8333 34.1667L29.4167 30.4167C30.3333 29.5833 31.0833 28.5833 31.6667 27.5L35.4167 28.3333L36.6667 24.1667L33.3333 22.5ZM22.5 25C20.0147 25 18 22.9853 18 20.5C18 18.0147 20.0147 16 22.5 16C24.9853 16 27 18.0147 27 20.5C27 22.9853 24.9853 25 22.5 25Z"
          fill="currentColor"
        />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_18">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                  Set Up Your Preferences
                </h3>
                <p className="text-base text-body">
                  Choose services, timings, and location.
                </p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="group mx-auto mb-[60px] max-w-[310px] text-center">
                <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                  {/* Heart Icon */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_40_18)">
<path
    d="M28.3333 5H27.5V3.33333H24.1667V5H15.8333V3.33333H12.5V5H11.6667C9.08934 5 7.5 6.58934 7.5 9.16667V31.6667C7.5 34.244 9.08934 35.8333 11.6667 35.8333H28.3333C30.9107 35.8333 32.5 34.244 32.5 31.6667V9.16667C32.5 6.58934 30.9107 5 28.3333 5ZM28.3333 31.6667H11.6667V15H28.3333V31.6667ZM20 18.3333L21.9628 22.3212L26.3333 22.9445L23.1667 26.0478L23.9228 30.3889L20 28.3333L16.0772 30.3889L16.8333 26.0478L13.6667 22.9445L18.0372 22.3212L20 18.3333Z"
    fill="currentColor"
  />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_18">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                  Book. Manage. Shine.
                </h3>
                <p className="text-base text-body">
                  Experience seamless beauty scheduling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Graphics */}
      <div className="absolute -top-28 left-0 -z-10 hidden md:block">
        <svg
          width="632"
          height="1179"
          viewBox="0 0 632 1179"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.25" filter="url(#filter0_f_38_24)">
            <circle
              cx="42.5"
              cy="589.5"
              r="329.5"
              fill="url(#paint0_linear_38_24)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_38_24"
              x="-547"
              y="0"
              width="1179"
              height="1179"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur
                stdDeviation="130"
                result="effect1_foregroundBlur_38_24"
              />
            </filter>
            <linearGradient
              id="paint0_linear_38_24"
              x1="-366.218"
              y1="919"
              x2="451.176"
              y2="349.901"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8EA5FE" />
              <stop offset="0.541667" stopColor="#BEB3FD" />
              <stop offset="1" stopColor="#90D1FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute right-0 top-20 -z-10">
        <svg
          width="637"
          height="1277"
          viewBox="0 0 637 1277"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2" filter="url(#filter0_f_38_23)">
            <circle
              cx="638.5"
              cy="638.5"
              r="388.5"
              fill="url(#paint0_linear_38_23)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_38_23"
              x="0"
              y="0"
              width="1277"
              height="1277"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_38_23"
              />
            </filter>
            <linearGradient
              id="paint0_linear_38_23"
              x1="250"
              y1="250"
              x2="1168.59"
              y2="782.957"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8FE8" />
              <stop offset="1" stopColor="#FFC960" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default WorkProcess;
