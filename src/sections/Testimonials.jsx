import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Musharof Chowdhury",
      title: "Web Entrepreneur",
      image: "images/author-1.png",
      text: "BeautyTap helped my salon reach more local customers. Easy to use and manage.",
    },
    {
      id: 2,
      name: "Naimur Rahman",
      title: "Product Designer",
      image: "images/author-2.png",
      text: "Perfect for both parlours and clients. Highly recommended.",
    },
    {
      id: 3,
      name: "Devid Miller",
      title: "App Developer",
      image: "images/author-3.png",
      text: "Booking haircuts and grooming sessions is so simple now!",
    },
    {
      id: 4,
      name: "Justin Fernandes",
      title: "SEO Expert",
      image: "images/author-04.png",
      text: "BeautyTap helped my salon reach more local customers. Easy to use and manage.",
    },
  ];

  return (
    <section id="testimonials" className="relative z-10 pt-[110px] pb-[60px]">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-[690px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            What Client's Say
          </h2>
          <p className="text-base text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
            tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
        </div>

        <div className="overflow-hidden lg:max-w-[1160px] mx-auto">
          <div className="-mx-6 flex flex-wrap">
            {testimonials.map((item) => (
              <div key={item.id} className="w-full px-6 lg:w-1/2">
                <div className="mb-[50px] rounded-lg bg-white py-9 px-7 shadow-card dark:bg-dark sm:px-9 lg:px-7 xl:px-9">
                  <div className="mb-5 border-b border-stroke dark:border-stroke-dark">
                    <p className="pb-9 text-base text-body">{item.text}</p>
                  </div>

                  <div className="items-center justify-between sm:flex lg:block xl:flex">
                    <div className="mb-4 flex items-center sm:mb-0 lg:mb-4 xl:mb-0">
                      <div className="mr-4 h-[56px] w-[56px] rounded-full overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div>
                        <h5 className="text-base font-medium text-black dark:text-white">
                          {item.name}
                        </h5>
                        <p className="text-sm text-body">{item.title}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 sm:justify-end lg:justify-start xl:justify-end">
                      <p className="text-base font-medium text-black dark:text-white">5.0</p>
                      <div className="flex items-center space-x-[6px]">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z"
                                fill="#EABF23"
                              />
                            </svg>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
