import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyPayment } from "../utils/api";

const PaymentStatus = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(null); // "success" | "failed"

    useEffect(() => {
        const verifyNow = async () => {
            const urlParams = new URLSearchParams(location.search);
            const orderId = urlParams.get("order_id");

            if (!orderId) {
                navigate("/coming-soon", { replace: true });
                return;
            }

            try {
                console.log("Verifying payment for order:", orderId);
                const response = await verifyPayment(orderId);

                console.log("API Verification Full Response:", response);

                const isSuccess =
                    response?.status === "success" ||
                    response?.paymentStatus === "SUCCESS" ||
                    response?.order_status === "PAID" ||
                    response?.success === true;

                setStatus(isSuccess ? "success" : "failed");
            } catch (error) {
                console.error("Verification error:", error);
                setStatus("failed");
            } finally {
                setLoading(false);
            }
        };

        verifyNow();
    }, [location, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
           
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-50 rounded-full opacity-60"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-50 rounded-full opacity-70"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-50 rounded-full opacity-50"></div>
            </div>

            <div className="relative z-10 bg-white border border-slate-100 shadow-sm rounded-3xl px-8 py-12 text-center w-[90%] max-w-md animate-fade-in-up">
              
                {loading && (
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <div className="w-20 h-20 rounded-full border-4 border-slate-100 border-t-emerald-500 animate-spin"></div>
                        </div>
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold text-slate-800">Verifying Payment</h2>
                            <p className="text-slate-500 text-sm">Please wait while we confirm your transaction</p>
                        </div>
                    </div>
                )}

               
                {!loading && status === "success" && (
                    <div className="space-y-8">
                      
                        <div className="flex justify-center">
                            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" 
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-slate-800">Registration Successful!</h2>
                            <div className="space-y-3">
                                <p className="text-slate-600 leading-relaxed">
                                    Welcome to our BeautyTap! Your account has been created successfully.
                                </p>
                                <p className="text-slate-500 text-sm">
                                    Login details have been sent to your email address.
                                </p>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button
                            onClick={() => navigate("/coming-soon", { replace: true })}
                          className="w-full py-3 mt-2 bg-purple-600 text-white 
                                    rounded-xl font-semibold hover:bg-purple-700 
                                    transition disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                            Continue to Dashboard
                        </button>

                        {/* Additional Info */}
                        <div className="pt-4 border-t border-slate-100">
                            <p className="text-xs text-slate-400">
                                Need help? Contact our support team
                            </p>
                        </div>
                    </div>
                )}

                {/* Failure State */}
                {!loading && status === "failed" && (
                    <div className="space-y-8">
                        {/* Icon */}
                        <div className="flex justify-center">
                            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center border border-red-100">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" 
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-slate-800">Payment Failed</h2>
                            <div className="space-y-3">
                                <p className="text-slate-600 leading-relaxed">
                                    We couldn't process your payment at this time.
                                </p>
                                <p className="text-slate-500 text-sm">
                                    Please check your payment details and try again.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <button
                                onClick={() => navigate("/coming-soon", { replace: true })}
                               className="w-full py-3 mt-2 bg-purple-600 text-white 
                                    rounded-xl font-semibold hover:bg-purple-700 
                                    transition disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                Try Again
                            </button>
                            {/* <button
                                onClick={() => navigate("/", { replace: true })}
                                className="w-full py-3 bg-white text-slate-700 font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors duration-200"
                            >
                                Back to Home
                            </button> */}
                        </div>

                        {/* Support Info */}
                        <div className="pt-4 border-t border-slate-100">
                            <p className="text-xs text-slate-400">
                                Having trouble? Contact support@beautytap.com
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-2 text-slate-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs">Secured by Cashfree Payments</span>
                </div>
            </div>

            <style>{`
                @keyframes fade-in-up {
                    0% { 
                        opacity: 0; 
                        transform: translateY(20px) scale(0.95); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0) scale(1); 
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
            `}</style>
        </div>
    );
};

export default PaymentStatus;