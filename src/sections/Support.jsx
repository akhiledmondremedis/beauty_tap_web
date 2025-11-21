import React, { useState } from "react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been submitted.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="support" className="pt-[100px] pb-[110px]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-[690px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            Let's Stay Connected
          </h2>
          <p className="text-base text-body">
           Stay in touch with us for updates, news, and support.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mx-auto w-full max-w-[925px] rounded-lg bg-[#F8FAFB] px-8 py-10 shadow-card dark:bg-[#15182B] dark:shadow-card-dark sm:px-10">
          <form onSubmit={handleSubmit}>
            <div className="-mx-[22px] flex flex-wrap">
              {/* Name */}
              <div className="w-full px-[22px] md:w-1/2">
                <div className="mb-8">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="w-full px-[22px] md:w-1/2">
                <div className="mb-8">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="w-full px-[22px] md:w-1/2">
                <div className="mb-8">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="w-full px-[22px] md:w-1/2">
                <div className="mb-8">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="w-full px-[22px]">
                <div className="mb-8">
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Tell us about yourself"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                  ></textarea>
                </div>
              </div>

              {/* Submit */}
              <div className="w-full px-[22px]">
                <div className="text-center">
                  <p className="mb-5 text-center text-base text-body">
                    By clicking contact us button, you agree to our terms and policy.
                  </p>
                  <button
                    type="submit"
                    className="inline-block rounded-md bg-primary py-[14px] px-11 text-base font-medium text-white hover:bg-opacity-90 transition duration-200"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Support;
