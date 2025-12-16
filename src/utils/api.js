import axios from "axios";

const API_BASE_URL = "https://prod.beautytap.in/api";
// const API_BASE_URL = "https://www.api.doctorpro.in/api";

const api = axios.create({
    baseURL: API_BASE_URL
});


const toFormData = (obj) => {
    const formData = new FormData();
    Object.keys(obj).forEach((key) => {
        if (obj[key] !== undefined && obj[key] !== null) {
            formData.append(key, obj[key]);
        }
    });
    return formData;
};

export const registerParlour = async (data) => {
    try {
        const formData = toFormData(data);

        const response = await api.post("/public/register", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        return response.data;
    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
};

export const getPlans = async () => {
    try {
        const response = await api.get("/public/plans");
        return response.data;
    } catch (error) {
        console.error("Plans fetch error:", error);
        throw error;
    }
};

export const createSubscription = async (data) => {
    try {
        const body = data;

        const response = await api.post("/public/create-subscription", body, {
            headers: { "Content-Type": "application/json" }
        });

        return response.data;
    } catch (error) {
        console.error("Subscription error:", error);
        throw error;
    }
};

export const createPaymentOrder = async (data) => {
    try {
        const response = await api.post(
            "/public/payment/create-order",
            data, // JSON body
            { headers: { "Content-Type": "application/json" } }
        );

        return response.data;
    } catch (error) {
        console.error("Create order error:", error);
        throw error;
    }
};

export const verifyPayment = async (orderId) => {
    try {

        const body = { orderId: orderId };

        console.log("Sending verification request with payload:", body);

        const response = await api.post(
            "/public/payment/verify",
            body, // JSON
            { headers: { "Content-Type": "application/json" } }
        );

        console.log("Verification response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Payment verify error:", error);
        throw error;
    }
};

export const CreateAffiliate = async (data) => {
    try {

        const body = data;

        console.log("Sending verification request with payload:", body);

        const response = await api.post(
            "/affiliateAuth/register",
            body, // JSON
            { headers: { "Content-Type": "application/json" } }
        );

        console.log("Verification response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Payment verify error:", error);
        throw error;
    }
};

export const AffiliateLogin = async (data) => {
    try {

        const body = data;

        console.log("Sending verification request with payload:", body);

        const response = await api.post(
            "/affiliateAuth/login",
            body, // JSON
            { headers: { "Content-Type": "application/json" } }
        );

        console.log("Verification response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Payment verify error:", error);
        throw error;
    }
};

export const getAffiliateLink = async (token) => {
    try {
        const response = await api.get("/parlour-affiliate/referral/link", {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Affiliate link fetch error:", error);
        throw error;
    }
};

export const getAffiliateDashboardData = async (token) => {
    try {
        const response = await api.get("/parlour-affiliate/affiliatedashboard", {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Affiliate data fetch error:", error);
        throw error;
    }
};

export const getAffiliateEarnings = async (token) => {
    try {
        const response = await api.get("/parlour-affiliate/earningssummary", {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Affiliate earnings fetch error:", error);
        throw error;
    }
};

export const getAffiliateTransactions = async (token) => {
    try {
        const response = await api.get("/parlour-affiliate/earningssummary/transactions", {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Affiliate earnings fetch error:", error);
        throw error;
    }
};

export default api;