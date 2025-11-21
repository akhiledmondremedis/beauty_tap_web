import React from "react";

const Clients = () => {
  const clients = [
    "images/client-01.svg",
    "images/client-02.svg",
    "images/client-03.svg",
    "images/client-04.svg",
    "images/client-05.svg",
    "images/client-06.svg",
  ];

  return (
    <section className="relative z-10 bg-[#F8FAFB] pt-[70px] pb-[50px] dark:bg-[#15182B]">
      <div className="container mx-auto overflow-hidden lg:max-w-[1200px]">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6"
            >
              <div className="mb-5 text-center">
                <a href="#" className="block">
                  <img
                    src={logo}
                    alt={`client-${index + 1}`}
                    className="mx-auto max-w-full opacity-[65%] hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
