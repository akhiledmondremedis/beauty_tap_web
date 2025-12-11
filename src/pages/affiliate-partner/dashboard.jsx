"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import toast from "react-hot-toast"
import { getAffiliateDashboardData, getAffiliateLink } from "../../utils/api"
import { RootState } from "../../redux/store"
import AffiliateSidebar from "../../components/affiliate/AffiliateSidebar"
import AffiliateHeader from "../../components/affiliate/AffiliateHeader"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts"


const DashboardIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
    </svg>
)

const UsersIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
    </svg>
)

const WalletIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
    </svg>
)

const LinkIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
    </svg>
)

const SettingsIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
)

const CopyIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
    </svg>
)

const LogoutIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
    </svg>
)


const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
)

export default function AffiliateDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("dashboard")
    const [copied, setCopied] = useState(false)

    const { affiliate } = useSelector((state) => state.affiliateAuth)

    const { token } = useSelector((state) => state.affiliateAuth)


    console.log("token", token)
    const [affiliateLink, setAffiliateLink] = useState("")
    const [linkLoading, setLinkLoading] = useState(false)
    const [linkError, setLinkError] = useState("")

    const [dashboardData, setDashboardData] = useState(null)
    const [statsLoading, setStatsLoading] = useState(false)
    const [statsError, setStatsError] = useState("")


    const handleCopy = () => {
        navigator.clipboard.writeText(affiliateLink)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    useEffect(() => {
        const fetchLink = async () => {
            if (!token) return

            try {
                setLinkLoading(true)
                setLinkError("")
                const res = await getAffiliateLink(token)

                if (res?.referralLink) {
                    setAffiliateLink(res.referralLink)
                } else {
                    setLinkError("Unable to load affiliate link.")
                }
            } catch (error) {
                console.error("Affiliate link fetch error:", error)
                setLinkError("Failed to load affiliate link.")
                toast.error("Could not fetch affiliate link. Please try again.")
            } finally {
                setLinkLoading(false)
            }
        }

        fetchLink()
    }, [token])

    useEffect(() => {
        const fetchDashboardStats = async () => {
            if (!token) return

            try {
                setStatsLoading(true)
                setStatsError("")

                const res = await getAffiliateDashboardData(token)

                if (res?.success) {
                    setDashboardData(res)
                } else {
                    setStatsError("Unable to load stats.")
                }
            } catch (err) {
                console.error(err)
                setStatsError("Failed to load stats.")
                toast.error("Could not load dashboard stats.")
            } finally {
                setStatsLoading(false)
            }
        }

        fetchDashboardStats()
    }, [token])

    const stats = [
        { label: "Total Earnings", value: "$4,250.00", change: "+12.5%", positive: true },
        { label: "Total Referrals", value: "156", change: "+8.2%", positive: true },
        // { label: "Link Clicks", value: "2,847", change: "+15.3%", positive: true },
        // { label: "Conversion Rate", value: "5.48%", change: "-0.5%", positive: false },
    ]

    const recentReferrals = [
        {
            id: 1,
            name: "John Smith",
            email: "john@email.com",
            date: "Dec 4, 2025",
            status: "Completed",
            commission: "$25.00",
        },
        {
            id: 2,
            name: "Sarah Johnson",
            email: "sarah@email.com",
            date: "Dec 3, 2025",
            status: "Pending",
            commission: "$15.00",
        },
        {
            id: 3,
            name: "Mike Wilson",
            email: "mike@email.com",
            date: "Dec 2, 2025",
            status: "Completed",
            commission: "$30.00",
        },
        {
            id: 4,
            name: "Emily Brown",
            email: "emily@email.com",
            date: "Dec 1, 2025",
            status: "Completed",
            commission: "$20.00",
        },
        {
            id: 5,
            name: "David Lee",
            email: "david@email.com",
            date: "Nov 30, 2025",
            status: "Pending",
            commission: "$25.00",
        },
    ]

    const earningsData = [
        { month: "Jul", amount: 320 },
        { month: "Aug", amount: 450 },
        { month: "Sep", amount: 380 },
        { month: "Oct", amount: 520 },
        { month: "Nov", amount: 680 },
        { month: "Dec", amount: 750 },
    ]

    const maxEarning = Math.max(...earningsData.map((d) => d.amount))

    const navItems = [
        { id: "dashboard", label: "Dashboard", icon: <DashboardIcon />, path: "/affiliate-partner/dashboard" },
        { id: "referrals", label: "Referrals", icon: <UsersIcon />, path: "/affiliate-partner/referrals" },
        { id: "earnings", label: "Earnings", icon: <WalletIcon />, path: "/affiliate-partner/earnings" },
        { id: "links", label: "Affiliate Links", icon: <LinkIcon />, path: "/affiliate-partner/links" },
        { id: "settings", label: "Settings", icon: <SettingsIcon />, path: "/affiliate-partner/settings" },
    ]

    console.log("dashboard", affiliate)
    return (
        <div className="h-screen bg-gray-100 flex">
            {/* Sidebar Overlay for Mobile */}

            {/* Sidebar */}
            <AffiliateSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
                {/* Header */}

                <AffiliateHeader setSidebarOpen={setSidebarOpen} />

                {/* Dashboard Content */}
                <main className="flex-1 p-6 overflow-auto">
                    {/* Affiliate Link Card */}
                    <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-6 mb-6 text-white">
                        <h3 className="text-lg font-semibold mb-2">
                            Your Affiliate Link {affiliate?.referralCode && `• Code: ${affiliate.referralCode}`}
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="text"
                                value={affiliateLink}
                                readOnly
                                placeholder={linkLoading ? "Loading your affiliate link..." : "Affiliate link not available"}
                                className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-2.5 text-white placeholder-white/70 outline-none"
                            />
                            <button
                                onClick={handleCopy}
                                disabled={linkLoading || !affiliateLink}
                                className="flex items-center justify-center gap-2 bg-white text-teal-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <CopyIcon />
                                {linkLoading ? "Loading..." : copied ? "Copied!" : "Copy Link"}
                            </button>
                        </div>
                        {linkError && (
                            <p className="text-sm text-red-100 mt-2">
                                {linkError}
                            </p>
                        )}
                    </div>

                    {/* Stats Cards */}
                    <div
                        className="grid gap-6 mb-6"
                        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))` }}
                    >
                        {/* Loading State */}
                        {statsLoading && [...Array(2)].map((_, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
                                <div className="h-4 w-24 bg-gray-200 rounded mb-3"></div>
                                <div className="h-6 w-32 bg-gray-300 rounded"></div>
                            </div>
                        ))}

                        {/* Error State */}
                        {!statsLoading && statsError && (
                            <div className="col-span-full text-sm text-red-600">
                                {statsError}
                            </div>
                        )}

                        {/* Data State */}
                        {!statsLoading && !statsError && dashboardData && (
                            <>
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <p className="text-gray-500 text-sm mb-1">Total Earnings</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        ₹{dashboardData.amount || 0}
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <p className="text-gray-500 text-sm mb-1">Total Referred</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {dashboardData.totalReferred || 0}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>



                    {/* Charts & Tables */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Earnings Chart */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Signups</h3>

                            {statsLoading ? (
                                <p className="text-gray-500">Loading chart...</p>
                            ) : statsError ? (
                                <p className="text-red-500">Failed to load chart</p>
                            ) : dashboardData && dashboardData.monthlyCounts ? (
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={dashboardData.monthlyCounts}>
                                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                                        <XAxis
                                            dataKey="month"
                                            tickFormatter={(v) => v.slice(0, 3)}
                                            tick={{ fontSize: 12, fill: "#6B7280" }}
                                        />
                                        <YAxis
                                            tick={{ fontSize: 12, fill: "#6B7280" }}
                                            allowDecimals={false}
                                        />
                                        <Tooltip
                                            formatter={(value) => [`${value} Signups`, "Count"]}
                                        />
                                        <Bar dataKey="count" fill="#0d9488" radius={[6, 6, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            ) : (
                                <p className="text-gray-500 text-center">No data found</p>
                            )}
                        </div>


                        {/* Recent Referrals */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Referrals</h3>

                            {statsLoading ? (
                                <p className="text-gray-600">Loading referrals...</p>
                            ) : statsError ? (
                                <p className="text-red-600 text-sm">{statsError}</p>
                            ) : dashboardData && dashboardData.referredList.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
                                                <th className="pb-3 font-medium">Name</th>
                                                <th className="pb-3 font-medium">Status</th>
                                                <th className="pb-3 font-medium text-right">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {dashboardData.referredList.slice(0, 5).map((ref) => (
                                                <tr key={ref.id}>
                                                    <td className="py-3">
                                                        <p className="font-medium text-gray-900">{ref.name}</p>
                                                        <p className="text-xs text-gray-500">{ref.email}</p>
                                                    </td>
                                                    <td className="py-3">
                                                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${ref.status === "completed"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-yellow-100 text-yellow-700"
                                                            }`}>
                                                            {ref.status}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 text-right text-sm text-gray-900">
                                                        {new Date(ref.createdAt).toLocaleDateString("en-IN")}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <p className="text-gray-500 text-sm">No referrals yet.</p>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
