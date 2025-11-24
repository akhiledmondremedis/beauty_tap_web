import React, { useState, useEffect } from 'react';
import { load } from '@cashfreepayments/cashfree-js';
import logo from "../assets/logo.png";

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [cashfree, setCashfree] = useState(null);

    useEffect(() => {
        const initializeCashfree = async () => {
            const cf = await load({
                mode: "sandbox", // or "production"
            });
            setCashfree(cf);
        };
        initializeCashfree();
    }, []);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            let targetDate = new Date(now.getFullYear(), 0, 22); // January 22nd

            if (now > targetDate) {
                targetDate = new Date(now.getFullYear() + 1, 0, 22);
            }

            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!cashfree) {
            alert("Payment SDK not loaded yet. Please try again.");
            return;
        }

        // NOTE: In a real application, you must call your backend API here to create an order.
        // The backend should return a paymentSessionId.
        // For now, we'll alert the user about this step.

        try {
            // Mocking backend call
            // const response = await fetch('/api/create-order', { method: 'POST', body: ... });
            // const { paymentSessionId } = await response.json();

            const paymentSessionId = "YOUR_PAYMENT_SESSION_ID_FROM_BACKEND";

            if (paymentSessionId === "YOUR_PAYMENT_SESSION_ID_FROM_BACKEND") {
                alert("Integration Pending: Backend must generate a valid paymentSessionId. Check console for details.");
                console.log("To complete payment integration:");
                console.log("1. Create an endpoint on your backend to generate a Cashfree order.");
                console.log("2. Fetch the paymentSessionId from that endpoint here.");
                console.log("3. Call cashfree.checkout({ paymentSessionId })");
                return;
            }

            const checkoutOptions = {
                paymentSessionId: paymentSessionId,
                redirectTarget: "_self",
            };

            cashfree.checkout(checkoutOptions).then((result) => {
                if (result.error) {
                    // This will be true whenever user clicks on close icon inside the modal or any error happens during the payment
                    console.log("User has closed the popup or there is some payment error, Check for Payment Status");
                    console.log(result.error);
                }
                if (result.redirect) {
                    // This will be true when the payment redirection page couldnt be opened in the same window
                    // This is an exceptional case failing to open window commands
                    console.log("Payment redirection");
                }
                if (result.paymentDetails) {
                    // This will be called whenever the payment is completed irrespective of transaction status
                    console.log("Payment has been completed, Check for Payment Status");
                    console.log(result.paymentDetails.paymentMessage);
                }
            });

        } catch (error) {
            console.error("Error initiating payment:", error);
            alert("Failed to initiate payment.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white text-gray-800 font-sans">
            {/* Background with Elegant Gradients & Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-50 via-white to-purple-50 opacity-80"></div>

                {/* Floating Elegant Shapes */}
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-pink-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-purple-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-rose-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob animation-delay-4000"></div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center text-center">

                {/* Logo Container */}
                <div className="relative mb-10 group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-white/60 transform transition duration-500 hover:scale-105">
                        <img src={logo} alt="BeautyTap Logo" className="h-24 md:h-32 object-contain drop-shadow-sm" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
                        We Are Coming Soon
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up font-light">
                    Redefining beauty management. Get ready for an exclusive experience tailored for your parlour.
                </p>

                {/* Countdown Timer */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 animate-fade-in-up delay-200">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="flex flex-col items-center bg-white/60 backdrop-blur-md rounded-2xl p-4 w-24 md:w-32 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform hover:-translate-y-1 transition duration-300">
                            <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-pink-600 mb-1 font-mono">
                                {String(value).padStart(2, '0')}
                            </span>
                            <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-semibold">
                                {unit}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Pre-registration Form */}
                <div className="w-full max-w-md bg-white/70 backdrop-blur-2xl rounded-3xl p-8 border border-white/60 shadow-[0_20px_50px_rgb(0,0,0,0.08)] animate-fade-in-up delay-500 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"></div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">Join the Waitlist</h2>
                    <p className="text-gray-500 mb-8 text-sm">Secure your spot and get early access benefits.</p>

                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 ml-1 uppercase tracking-wider">Parlour Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Luxe Beauty Lounge"
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-gray-900 placeholder-gray-400 transition-all shadow-sm"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 ml-1 uppercase tracking-wider">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-gray-900 placeholder-gray-400 transition-all shadow-sm"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 ml-1 uppercase tracking-wider">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="+91 98765 43210"
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-gray-900 placeholder-gray-400 transition-all shadow-sm"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 ml-1 uppercase tracking-wider">Admin Name</label>
                            <input
                                type="text"
                                placeholder="Your Full Name"
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-gray-900 placeholder-gray-400 transition-all shadow-sm"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 px-6 mt-4 bg-gradient-to-r from-purple-400 to-purple-500 bg-black hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            <span>Pay & Register</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </form>
                </div>

            </div>

            {/* Custom Animations Styles */}
            <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
            animation-delay: 6s;
        }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
        </div>
    );
};

export default ComingSoon;
