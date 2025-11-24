import React, { useState, useEffect } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import logo from "../assets/logo.png";
import {
    registerParlour,
    getPlans,
    createPaymentOrder,
    verifyPayment,
} from "../utils/api";

const ComingSoon = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [cashfree, setCashfree] = useState(null);

    // Flow state
    const [step, setStep] = useState("REGISTER"); // REGISTER, PLANS, PAYMENT_PROCESSING, SUCCESS, FAILURE
    const [loading, setLoading] = useState(false);

    // Form and data
    const [formData, setFormData] = useState({
        parlourName: "",
        adminName: "",
        adminEmail: "",
        adminPhone: "",
        address: "",
    });

    const [formErrors, setFormErrors] = useState({
        parlourName: "",
        adminName: "",
        adminEmail: "",
        adminPhone: "",
        address: "",
    });

    const [apiError, setApiError] = useState("");
    const [parlourData, setParlourData] = useState(null);
    const [plans, setPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [currentOrderId, setCurrentOrderId] = useState(null);
    const [paymentVerified, setPaymentVerified] = useState(false);

    useEffect(() => {
        const initializeCashfree = async () => {
            try {
                const cf = await load({
                    mode: "sandbox", // change to "production" when going live
                });
                setCashfree(cf);
            } catch (err) {
                console.error("Cashfree load error:", err);
            }
        };
        initializeCashfree();
    }, []);

    // Check for order_id in URL when component mounts
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const orderId = urlParams.get('order_id');

        if (orderId && step === "REGISTER" && !paymentVerified) {
            console.log("Component mount - Found order_id, starting verification:", orderId);
            setStep("PAYMENT_PROCESSING");
            verifyPaymentStatus(orderId);
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            let targetDate = new Date(now.getFullYear(), 0, 22); // Jan 22

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

    // Input change handler
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((p) => ({ ...p, [name]: value }));

        // Clear field-specific error when user starts typing
        if (formErrors[name]) {
            setFormErrors((p) => ({ ...p, [name]: "" }));
        }

        // Clear API error when user makes any change
        if (apiError) {
            setApiError("");
        }
    };

  
    const validateForm = () => {
        const errors = {};
        let isValid = true;

       
        setFormErrors({
            parlourName: "",
            adminName: "",
            adminEmail: "",
            adminPhone: "",
            address: "",
        });

        if (!formData.parlourName.trim()) {
            errors.parlourName = "Parlour name is required";
            isValid = false;
        } else if (formData.parlourName.trim().length < 2) {
            errors.parlourName = "Parlour name must be at least 2 characters";
            isValid = false;
        }


        if (!formData.adminName.trim()) {
            errors.adminName = "Your name is required";
            isValid = false;
        } else if (formData.adminName.trim().length < 2) {
            errors.adminName = "Name must be at least 2 characters";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.adminEmail.trim()) {
            errors.adminEmail = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(formData.adminEmail)) {
            errors.adminEmail = "Please enter a valid email address";
            isValid = false;
        }

        const phoneRegex = /^[6-9]\d{9}$/; 
        if (!formData.adminPhone.trim()) {
            errors.adminPhone = "Phone number is required";
            isValid = false;
        } else if (!phoneRegex.test(formData.adminPhone.replace(/\D/g, ''))) {
            errors.adminPhone = "Please enter a valid 10-digit phone number";
            isValid = false;
        }


        if (!formData.address.trim()) {
            errors.address = "Address is required";
            isValid = false;
        } else if (formData.address.trim().length < 10) {
            errors.address = "Address must be at least 10 characters";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleRegister = async (e) => {
        e.preventDefault();


        setApiError("");

       
        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            const res = await registerParlour({
                parlourName: formData.parlourName.trim(),
                adminName: formData.adminName.trim(),
                adminEmail: formData.adminEmail.trim(),
                adminPhone: formData.adminPhone.trim(),
                address: formData.address.trim(),
            });

            if (res && res.success) {
                setParlourData(res);
                const plansRes = await getPlans();
                if (plansRes && plansRes.success && Array.isArray(plansRes.plans)) {
                    setPlans(plansRes.plans);
                    setStep("PLANS");
                } else {
                    setApiError("Failed to load subscription plans. Please try again.");
                }
            } else {
                // Handle API error response
                const errorMessage = res?.message || "Registration failed. Please try again.";
                setApiError(errorMessage);
            }
        } catch (err) {
            console.error("Registration error:", err);

            // Handle different types of errors
            if (err.response) {
                // Server responded with error status
                const serverError = err.response.data;
                setApiError(serverError?.message || "Registration failed. Please try again.");
            } else if (err.request) {
                // Network error
                setApiError("Network error. Please check your connection and try again.");
            } else {
                // Other errors
                setApiError("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };


    const verifyPaymentStatus = async (orderId) => {
        if (!orderId) {
            console.error("No order ID provided for verification");
            setStep("FAILURE");
            setPaymentVerified(true);
            return;
        }

        setLoading(true);

        try {
            console.log("Verifying payment for order:", orderId);
            const verificationResult = await verifyPayment(orderId);

            console.log("Full verification result:", verificationResult);

            const isSuccess =
                verificationResult?.status === "success" ||
                verificationResult?.order_status === "PAID" ||
                verificationResult?.payment_status === "SUCCESS" ||
                verificationResult?.paymentStatus === "SUCCESS" ||
                verificationResult?.success === true;

            console.log("Payment verification success:", isSuccess);

            if (isSuccess) {
                setStep("SUCCESS");
            } else {
                setStep("FAILURE");
            }

            setPaymentVerified(true);

        } catch (error) {
            console.error("Payment verification error:", error);
            setStep("FAILURE");
            setPaymentVerified(true);
        } finally {
            setLoading(false);
        }
    };

   
    const handlePlanSelect = async (plan) => {
        if (!parlourData || !parlourData.parlourId) {
            setApiError("Missing parlour data. Please register again.");
            return;
        }

        if (!cashfree) {
            setApiError("Payment system is not ready. Please try again.");
            return;
        }

        setSelectedPlan(plan);
        setLoading(true);
        setPaymentVerified(false); // Reset verification flag
        setApiError(""); // Clear any previous errors

        try {
           
            const returnUrl = `${window.location.origin}/payment/status?order_id=@order_id@`;

            console.log("Return URL:", returnUrl);

            const orderPayload = {
                parlourId: parlourData.parlourId,
                planId: plan.id,
                returnUrl: returnUrl
            };

            console.log("Creating order with payload:", orderPayload);

            const orderRes = await createPaymentOrder(orderPayload);
            console.log("Order response:", orderRes);

            if (!orderRes || !orderRes.payment_session_id || !orderRes.order_id) {
                console.error("Invalid order response:", orderRes);
                setApiError("Failed to create payment order. Please try again.");
                setLoading(false);
                return;
            }

            setCurrentOrderId(orderRes.order_id);
            const checkoutOptions = {
                paymentSessionId: orderRes.payment_session_id,
                redirectTarget: "_self",
            };
            setStep("PAYMENT_PROCESSING");
            cashfree.checkout(checkoutOptions)
                .then((result) => {
                    console.log("Cashfree checkout result:", result);
                    if (result?.paymentDetails) {
                        console.log("Payment details received:", result.paymentDetails);
                        verifyPaymentStatus(orderRes.order_id);
                    }
                  // If user closes the popup or navigates away without completing payment
                    else if (result?.error) {
                        console.warn("Cashfree checkout error:", result.error);
                        // User closed the popup, stay on plans screen
                        setStep("PLANS");
                        setLoading(false);
                    }
                    // For other cases, rely on URL parameter check
                })
                .catch((error) => {
                    console.error("Checkout promise error:", error);
                    // If checkout fails, go back to plans
                    setStep("PLANS");
                    setLoading(false);
                });

        } catch (err) {
            console.error("Create order error:", err);
            setApiError("Failed to initiate payment. Please try again.");
            setStep("PLANS");
            setLoading(false);
        }
    };

    // Handle back to plans from failure screen
    const handleBackToPlans = () => {
        setStep("PLANS");
        setCurrentOrderId(null);
        setPaymentVerified(false);
        setApiError("");
    };


    const handleRestartRegistration = () => {
        setStep("REGISTER");
        setFormData({
            parlourName: "",
            adminName: "",
            adminEmail: "",
            adminPhone: "",
            address: "",
        });
        setFormErrors({
            parlourName: "",
            adminName: "",
            adminEmail: "",
            adminPhone: "",
            address: "",
        });
        setApiError("");
        setParlourData(null);
        setPlans([]);
        setSelectedPlan(null);
        setCurrentOrderId(null);
        setPaymentVerified(false);
    };

    const ErrorMessage = ({ message }) => (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
            <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {message}
            </div>
        </div>
    );

   
    const FieldError = ({ message }) => (
        <p className="mt-1 text-sm text-red-600">{message}</p>
    );

    // Right-side dynamic content
    const renderRightCard = () => {
      
        if (loading && step !== "PAYMENT_PROCESSING") {
            return (
                <div className="w-full max-w-md relative group">
                    {/* Glass Background (no gradients) */}
                    <div className="absolute inset-0 rounded-2xl bg-white/50 backdrop-blur-xl shadow-xl border border-white/70"></div>

                    {/* Card */}
                    <div className="relative p-8 md:p-10 rounded-2xl text-center">

                        {/* Smooth Loader */}
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-300 border-t-slate-900 mx-auto mb-4"></div>

                        <p className="text-slate-700 font-medium tracking-wide">
                            Processing...
                        </p>
                    </div>
                </div>
            );
        }

        if (step === "PAYMENT_PROCESSING") {
            return (
                <div className="w-full max-w-md relative animate-fade-in-up">
                    <div className="absolute inset-0 rounded-3xl bg-white/40 backdrop-blur-xl shadow-xl border border-white/60"></div>

                    <div className="relative px-8 py-12 rounded-3xl text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full border-4 border-slate-300 border-t-slate-900 animate-spin"></div>

                        <h2 className="text-2xl font-bold text-slate-900 mb-2">
                            {loading ? "Verifying Payment..." : "Processing Payment..."}
                        </h2>

                        <p className="text-slate-600 text-sm">
                            {loading
                                ? "Please wait while we securely verify your transaction."
                                : "Please complete the payment in the opened tab."
                            }
                        </p>

                        {!loading && (
                            <p className="text-xs text-slate-400 mt-4">
                                If the payment window didn't open, please allow popups.
                            </p>
                        )}
                    </div>
                </div>
            );
        }


        if (step === "PLANS") {
            return (
                <div className="w-full max-w-xl mx-auto animate-fade-in-up">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-slate-200 shadow-lg">

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                            Select a Plan
                        </h2>
                        {apiError && <ErrorMessage message={apiError} />}
                        <div
                            className={`grid gap-6 ${plans?.length === 1 ? "grid-cols-1 place-items-center" : "md:grid-cols-2"
                                }`}
                        >
                            {plans && plans.length > 0 ? (
                                plans.map((plan) => (
                                    <div
                                        key={plan.id}
                                        className="w-full max-w-sm flex flex-col justify-between 
                                border border-slate-200 rounded-2xl p-6 
                                hover:shadow-xl transition-all bg-white
                                hover:border-purple-500"
                                    >
                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-900 mb-1">
                                                {plan.name}
                                            </h3>

                                            <p className="text-slate-500 text-sm mb-4">
                                                {plan.description}
                                            </p>

                                            <div className="text-3xl font-bold text-purple-600 mb-1">
                                                ₹{plan.price}
                                            </div>

                                            <div className="text-sm text-slate-400 mb-4">
                                                {plan.tenure}
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handlePlanSelect(plan)}
                                            disabled={loading}
                                            className="w-full py-3 mt-2 bg-purple-600 text-white 
                                    rounded-xl font-semibold hover:bg-purple-700 
                                    transition disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {loading ? "Processing..." : "Choose Plan"}
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-2 text-center text-slate-500">
                                    No plans available at the moment.
                                </div>
                            )}
                        </div>

                        <p className="text-center text-xs text-slate-400 mt-6">
                            Transactions secured by Cashfree Payments
                        </p>
                    </div>
                </div>
            );
        }
        return (
          <div className="w-full max-w-md">


                <div className="bg-white rounded-3xl p-10 shadow-2xl shadow-purple-500/10 border border-gray-100">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Join Today
                        </h3>
                        <p className="text-gray-500 mt-2">Get early access to exclusive features</p>
                    </div>

             
                    {apiError && <ErrorMessage message={apiError} />}

                    <form onSubmit={handleRegister} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Parlour Name
                                </label>
                                <input
                                    name="parlourName"
                                    value={formData.parlourName}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Luxe Beauty Lounge"
                                    className={`w-full px-4 py-3 bg-gray-50 border rounded-2xl 
                                    focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all
                                    ${formErrors.parlourName ? 'border-red-300' : 'border-gray-200'}`}
                                    required
                                />
                                {formErrors.parlourName && <FieldError message={formErrors.parlourName} />}
                            </div>

                            {/* Name + Phone */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        name="adminName"
                                        value={formData.adminName}
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Full Name"
                                        className={`w-full px-4 py-3 bg-gray-50 border rounded-2xl 
                                        focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all
                                        ${formErrors.adminName ? 'border-red-300' : 'border-gray-200'}`}
                                        required
                                    />
                                    {formErrors.adminName && <FieldError message={formErrors.adminName} />}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone
                                    </label>
                                    <input
                                        name="adminPhone"
                                        value={formData.adminPhone}
                                        onChange={handleInputChange}
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className={`w-full px-4 py-3 bg-gray-50 border rounded-2xl 
                                        focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all
                                        ${formErrors.adminPhone ? 'border-red-300' : 'border-gray-200'}`}
                                        required
                                    />
                                    {formErrors.adminPhone && <FieldError message={formErrors.adminPhone} />}
                                </div>
                            </div>

                           
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    name="adminEmail"
                                    value={formData.adminEmail}
                                    onChange={handleInputChange}
                                    type="email"
                                    placeholder="name@example.com"
                                    className={`w-full px-4 py-3 bg-gray-50 border rounded-2xl 
                                    focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all
                                    ${formErrors.adminEmail ? 'border-red-300' : 'border-gray-200'}`}
                                    required
                                />
                                {formErrors.adminEmail && <FieldError message={formErrors.adminEmail} />}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Address
                                </label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    rows="2"
                                    placeholder="Full parlour address"
                                    className={`w-full px-4 py-3 bg-gray-50 border rounded-2xl 
                                    focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none
                                    ${formErrors.address ? 'border-red-300' : 'border-gray-200'}`}
                                    required
                                ></textarea>
                                {formErrors.address && <FieldError message={formErrors.address} />}
                            </div>
                        </div>

                      
                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                relative z-20 
                                w-full py-4 px-6 
                                !bg-gradient-to-r from-purple-600 to-pink-600 
                                text-white font-bold tracking-wide
                                rounded-2xl
                                shadow-lg hover:shadow-xl 
                                transform hover:scale-[1.02] 
                                transition-all duration-200 
                                disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none
                            "
                        >
                            {loading ? "Processing..." : "Register →"}
                        </button>

                        <p className="text-center text-xs text-gray-400 mt-4">
                            Secured by Cashfree Payments
                        </p>
                    </form>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 text-slate-800 font-sans selection:bg-purple-200 selection:text-purple-900">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob"></div>
                <div className="absolute top-[10%] right-[-10%] w-[45vw] h-[45vw] bg-pink-200/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-4000"></div>

                <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                {/* Left Side: Branding & Countdown */}
                <div className="flex-1 text-center lg:text-left max-w-2xl">
                    <div className="inline-block relative mb-8 group cursor-pointer">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm ring-1 ring-white/50">
                            <img src={logo} alt="BeautyTap Logo" className="h-16 md:h-20 object-contain" />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
                        We Are <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-gradient-x">
                            Coming Soon
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                        Experience the future of parlour management. Exclusive access for early adopters.
                    </p>

                 
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} className="flex flex-col items-center justify-center w-20 h-24 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group hover:scale-105 transition-transform duration-300">
                                <span className="text-3xl font-bold text-slate-800 tabular-nums group-hover:text-purple-600 transition-colors">
                                    {String(value).padStart(2, "0")}
                                </span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium mt-1">
                                    {unit}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

               
                {renderRightCard()}
            </div>

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
        @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease infinite;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
            @keyframes spin-smooth {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .animate-spin-smooth {
        animation: spin-smooth 1.3s linear infinite;
    }

    @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
        animation: fade-in-up 0.7s ease forwards;
    }
      `}</style>
        </div>
    );
};

export default ComingSoon;