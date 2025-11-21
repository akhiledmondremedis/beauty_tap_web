import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="pt-[150px] pb-[110px] lg:pt-[220px]">
      <div className="container overflow-hidden lg:max-w-[1250px]">
        <div
          className="wow fadeInUp mx-auto w-full max-w-[850px] rounded-lg bg-[#F8FAFB] py-10 px-6 shadow-card dark:bg-[#15182A] dark:shadow-card-dark sm:p-[50px]"
          data-wow-delay=".2s"
        >
          {/* Title */}
          <div className="text-center mb-10">
            <h3 className="mb-[10px] text-3xl font-bold text-black dark:text-white sm:text-[32px]">
              BeautyTap Privacy Policy
            </h3>
            <p className="text-base text-body">Last updated: January 2026</p>
          </div>

          {/* CONTENT */}
          <div className="text-body text-[16px] leading-relaxed dark:text-white">
            <h4 className="text-xl font-semibold mb-3">1. Introduction</h4>
            <p className="mb-6">
              At BeautyTap, we value your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we collect, use,
              and safeguard your data when you use our mobile app and services.
            </p>

            <h4 className="text-xl font-semibold mb-3">2. Information We Collect</h4>
            <p className="mb-6">
              We may collect personal details such as your name, email address, phone
              number, salon details (if applicable), booking information, and any data
              you provide while using our BeautyTap platform.
            </p>

            <h4 className="text-xl font-semibold mb-3">3. How We Use Your Data</h4>
            <ul className="list-disc pl-6 mb-6">
              <li>To provide and improve BeautyTap services.</li>
              <li>To manage bookings and salon service interactions.</li>
              <li>To communicate updates, notifications, and account details.</li>
              <li>To personalize your BeautyTap user experience.</li>
              <li>To enhance security and prevent fraudulent activity.</li>
            </ul>

            <h4 className="text-xl font-semibold mb-3">4. Cookies</h4>
            <p className="mb-6">
              BeautyTap uses cookies and similar tracking technologies to enhance
              performance and improve user experience. You may adjust cookie settings
              through your browser.
            </p>

            <h4 className="text-xl font-semibold mb-3">5. Data Protection</h4>
            <p className="mb-6">
              We use industry-standard measures to protect your data; however, no
              system is completely secure. We continuously work to enhance data
              security.
            </p>

            <h4 className="text-xl font-semibold mb-3">6. Third-Party Sharing</h4>
            <p className="mb-6">
              We may share limited data with trusted third-party service providers for
              analytics, hosting, payment gateways, and security purposes. BeautyTap
              never sells your personal information.
            </p>

            <h4 className="text-xl font-semibold mb-3">7. Your Rights</h4>
            <p className="mb-6">
              You may request access, correction, or deletion of your data anytime.
              You also have the right to withdraw certain permissions previously
              granted.
            </p>

            <h4 className="text-xl font-semibold mb-3">8. Contact Us</h4>
            <p className="mb-2">For any questions regarding this Privacy Policy, contact BeautyTap:</p>
            <p className="font-medium">support@beautytap.in</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;