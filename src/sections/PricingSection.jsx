import React from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: 0,
      period: "/month",
      desc: "Lorem Ipsum is simply dummythe.",
      features: [
        "60-day chat history",
        "15 GB cloud storage",
        "24/7 Support",
        "Custom Branding Strategy",
      ],
      buttonColor: "bg-black hover:bg-primary dark:bg-[#2A2E44] dark:hover:bg-primary",
    },
    {
      name: "Unlimited",
      price: 2900, // ₹
      period: "/month",
      desc: "Lorem Ipsum is simply dummythe.",
      features: [
        "60-day chat history",
        "35 GB cloud storage",
        "24/7 Support",
        "Custom Branding Strategy",
      ],
      buttonColor: "bg-primary hover:bg-opacity-90",
      popular: true,
    },
    {
      name: "Business",
      price: 4900, // ₹
      period: "/month",
      desc: "Lorem Ipsum is simply dummythe.",
      features: [
        "120-day chat history",
        "1 TB cloud storage",
        "24/7 Support",
        "Custom Branding Strategy",
      ],
      buttonColor: "bg-black hover:bg-primary dark:bg-[#2A2E44] dark:hover:bg-primary",
    },
  ];

  return (
    <section id="pricing" className="relative z-10 pt-[110px]">
      {/* Section Heading */}
      <div className="container">
        <div className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center" data-wow-delay=".2s">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            Choose Your Plan
          </h2>
          <p className="text-base text-body">
            Select the plan that fits your needs and start your journey with us.
          </p>
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="container max-w-[1120px] overflow-hidden">
        <div className="wow fadeInUp mb-[60px] flex items-center justify-center" data-wow-delay=".25s">
          <label htmlFor="togglePlan" className="inline-flex items-center">
            <input type="checkbox" id="togglePlan" className="sr-only" />
            <span className="monthly text-sm font-medium text-black dark:text-white">Monthly</span>
            <span className="mx-5 flex h-[34px] w-[60px] cursor-pointer items-center rounded-full bg-primary p-[3px]">
              <span className="dot block h-7 w-7 rounded-full bg-white duration-300"></span>
            </span>
            <span className="yearly text-sm font-medium text-black dark:text-white">Yearly</span>
          </label>
        </div>

        {/* Pricing Cards */}
        <div className="-mx-6 flex flex-wrap justify-center">
          {plans.map((plan, index) => (
            <div key={index} className="w-full px-6 md:w-1/2 lg:w-1/3">
              <div
                className={`wow fadeInUp mb-10 rounded-xl bg-white py-10 px-9 shadow-card dark:bg-dark dark:shadow-card-dark lg:mb-4 lg:px-7 xl:px-9 relative`}
                data-wow-delay={`${0.2 + index * 0.1}s`}
              >
                {plan.popular && (
                  <span className="absolute top-5 right-5 text-sm font-medium text-primary underline">
                    Most popular
                  </span>
                )}

                <h3 className="mb-2 text-[22px] font-semibold leading-tight text-black dark:text-white">
                  {plan.name}
                </h3>
                <p className="mb-7 text-base text-body">{plan.desc}</p>

                <p className="border-b border-stroke pb-5 text-black dark:border-stroke-dark dark:text-white">
                  <span className="text-[40px] font-bold leading-none">
                    <sup className="text-[22px] font-medium">₹</sup> {plan.price}
                  </span>
                  <span className="text-base text-body"> {plan.period}</span>
                </p>

                <div className="space-y-4 pt-[30px] pb-10">
                  {plan.features.map((feature, i) => (
                    <p key={i} className="flex text-base text-black dark:text-body">
                      <span className="mr-[10px] mt-1">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z"
                            fill="#00BE6C"
                          />
                        </svg>
                      </span>
                      {feature}
                    </p>
                  ))}
                </div>

                <a
                  href="#"
                  className={`block w-full rounded-md py-[10px] px-8 text-center text-base font-medium text-white ${plan.buttonColor}`}
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
