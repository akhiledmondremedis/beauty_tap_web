import React from "react";

const TermsAndConditions = () => {
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
                            Terms & Conditions
                        </h3>
                        <p className="text-base text-body">Last updated: January 2026</p>
                    </div>

                    {/* CONTENT */}
                    <div className="text-body text-[16px] leading-relaxed dark:text-white">
                        <h4 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h4>
                        <p className="mb-6">
                            By downloading, accessing, or using the BeautyTap mobile application or its related
                            services, you agree to be bound by these Terms & Conditions. If you do not agree,
                            please discontinue using the platform immediately.
                        </p>

                        <h4 className="text-xl font-semibold mb-3">2. About BeautyTap</h4>
                        <p className="mb-6">
                            BeautyTap is a salon and beauty parlour management platform created by Edmond Remedis
                            Pvt Ltd. The platform connects salon owners and customers while offering features like
                            booking, customer management, digital records, notifications, and more.
                        </p>

                        <h4 className="text-xl font-semibold mb-3">3. User Responsibilities</h4>
                        <ul className="list-disc pl-6 mb-6">
                            <li>You must provide accurate information during registration.</li>
                            <li>You are responsible for maintaining the confidentiality of your account.</li>
                            <li>You agree not to misuse or attempt unauthorized access to the platform.</li>
                            <li>Salon owners must ensure service details, pricing, and schedules are accurate.</li>
                        </ul>

                        <h4 className="text-xl font-semibold mb-3">4. Service Usage</h4>
                        <p className="mb-6">
                            BeautyTap may update or modify any feature at any time to improve the service. We do not
                            guarantee uninterrupted access, and maintenance may cause temporary downtime.
                        </p>

                        <h4 className="text-xl font-semibold mb-3">5. Payments & Fees</h4>
                        <p className="mb-6">
                            Some features of the BeautyTap platform may require subscription or service-based
                            payments. All fees are non-refundable unless otherwise stated.
                        </p>

                        <h4 className="text-xl font-semibold mb-3">6. Limitation of Liability</h4>
                        <p className="mb-6">
                            BeautyTap and Edmond Remedis Pvt Ltd are not liable for any direct, indirect, or
                            incidental damages resulting from your use of the platform.
                        </p>

                        <h4 className="text-xl font-semibold mb-3">7. Termination</h4>
                        <p className="mb-6">
                            We reserve the right to suspend or terminate your access if you violate these Terms or
                            engage in any unauthorized or illegal activity.
                        </p>

                        <h4 className="text-xl font-semibold mb-3">8. Third-Party Services</h4>
                        <p className="mb-6">
                            BeautyTap may integrate with third-party tools such as payment gateways, SMS providers,
                            or analytics services. We are not responsible for third-party policies or failures.
                        </p>

                        <h4 className="text-xl font-semibold mb-3">9. Changes to Terms</h4>
                        <p className="mb-6">
                            We may update these Terms & Conditions from time to time. Continued use of the platform
                            after changes indicates your acceptance of the updated terms.
                        </p>

                        <h4 className="text-xl font-semibold mb-3">10. Contact Us</h4>
                        <p className="mb-2">For any questions, reach out to us:</p>
                        <p className="font-medium">support@beautytap.in</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;