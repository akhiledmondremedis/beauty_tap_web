import axios from "axios";

const API_BASE_URL = "https://prod.beautytap.in/api";

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

export default api;