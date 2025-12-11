"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import toast from "react-hot-toast"
import { AffiliateLogin } from "../../utils/api"
import { useDispatch } from "react-redux"
import { setAffiliateAuth } from "../../redux/slices/affiliateSlice"

export default function AffiliatePartnerLogin() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [rememberMe, setRememberMe] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setIsLoading(true)

            const response = await AffiliateLogin(formData)

            toast.success("Login successful! 🎉")

            console.log("res", response)
            // store token if returned
            if (response?.token) {
                localStorage.setItem("affiliate_token", response.token)
                localStorage.setItem("affiliate_data", JSON.stringify(response.affiliate))

                dispatch(setAffiliateAuth({
                    token: response.token,
                    affiliate: response.affiliate
                }))
            }


            navigate("/affiliate-partner/dashboard")

        } catch (error) {
            const errorMsg =
                error?.response?.data?.message ||
                "Invalid email or password. Try again!"
            toast.error(errorMsg)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-600 to-teal-800 p-12 flex-col justify-between">
                <div>
                    <h1 className="text-white text-3xl font-bold">Beautytap Affiliate Partner</h1>
                </div>
                <div className="text-white">
                    <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
                    <p className="text-teal-100 text-lg">
                        Access your dashboard to track earnings, manage referrals, and grow your affiliate business.
                    </p>
                    {/* <div className="mt-8 bg-white/10 rounded-xl p-6">
            <p className="text-teal-100 italic">
              "I've earned over Rs:10,000 in commissions in just 3 months. The platform is incredibly easy to use!"
            </p>
            <p className="mt-4 font-semibold">- Sarah M., Top Affiliate</p>
          </div> */}
                </div>
                <p className="text-teal-200 text-sm">© 2025 Beautytap Affiliate Partner. All rights reserved.</p>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
                        <p className="text-gray-600 mt-2">Access your beautytap affiliate dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                />
                                <span className="text-sm text-gray-600">Remember me</span>
                            </label>
                            <Link to="/affiliate-partner/forgot-password" className="text-sm text-teal-600 hover:text-teal-700">
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white bg-black font-semibold py-2.5 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>

                    <p className="text-center text-gray-600 mt-6">
                        Don't have an account?{" "}
                        <Link to="/affiliate-partner/register" className="text-teal-600 hover:text-teal-700 font-medium">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
