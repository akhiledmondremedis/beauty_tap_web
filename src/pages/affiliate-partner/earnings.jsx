"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AffiliateSidebar from "../../components/affiliate/AffiliateSidebar"
import AffiliateHeader from "../../components/affiliate/AffiliateHeader"
import { getAffiliateEarnings, getAffiliateTransactions } from "../../utils/api"
import { useSelector } from "react-redux"

export default function EarningsPage() {
  const navigate = useNavigate()
  const [showPayoutModal, setShowPayoutModal] = useState(false)
  const [payoutAmount, setPayoutAmount] = useState("")
  const [payoutMethod, setPayoutMethod] = useState("bank")
  const [activeTab, setActiveTab] = useState("overview")

  const { token } = useSelector((state) => state.affiliateAuth)

  console.log("token", token)

  // API states
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [earningsData, setEarningsData] = useState(null)
  const [transactionsLoading, setTransactionsLoading] = useState(false)
  const [transactionsData, setTransactionsData] = useState(null)

  useEffect(() => {
    fetchEarningsData()
  }, [token])

  // Fetch transactions when tab changes
  useEffect(() => {
      fetchTransactionsData()
    
  }, [token])

  const fetchEarningsData = async () => {
    setLoading(true)
    setError(null)
    try {
      if (!token) {
        // navigate("/login")
        return
      }

      const data = await getAffiliateEarnings(token)
      setEarningsData(data)
    } catch (err) {
      console.error("Error fetching earnings data:", err)
      setError(err.response?.data?.message || "Failed to load earnings data. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const fetchTransactionsData = async () => {
    setTransactionsLoading(true)
    try {
      if (!token) {
        // navigate("/login")
        return
      }

      const data = await getAffiliateTransactions(token)
      setTransactionsData(data)
    } catch (err) {
      console.error("Error fetching transactions data:", err)
      // Don't set main error, just log it since transactions are secondary
    } finally {
      setTransactionsLoading(false)
    }
  }


  const earningsStats = earningsData ? [
    {
      label: "Total Earnings",
      value: `₹${earningsData.totalEarnings?.toFixed(2) || "0.00"}`,
      change: "",
      positive: true
    },
    {
      label: "Available Balance",
      value: `₹${earningsData.availableBalance?.toFixed(2) || "0.00"}`,
      change: "",
      positive: true
    },
    {
      label: "Pending Earnings",
      value: `₹${earningsData.pendingEarnings?.toFixed(2) || "0.00"}`,
      change: "",
      positive: true
    },
    {
      label: "Total Withdrawn",
      value: `₹${earningsData.totalWithdrawn?.toFixed(2) || "0.00"}`,
      change: "",
      positive: true
    },
  ] : []


  const monthlyEarnings = earningsData?.monthlyEarnings || []
  const maxEarning = monthlyEarnings.length > 0
    ? Math.max(...monthlyEarnings.map((e) => e.total || 0))
    : 0

  const payoutTransactions = transactionsData?.transactions?.filter(
    transaction => transaction.type === "PAYOUT"
  ) || []

  const getStatusBadge = (status) => {
    const statusLower = status.toLowerCase()
    const styles = {
      completed: "bg-emerald-100 text-emerald-700",
      pending: "bg-amber-100 text-amber-700",
      failed: "bg-red-100 text-red-700",
    }
    return <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${styles[statusLower] || styles.pending}`}>
      {statusLower}
    </span>
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getTypeBadge = (type) => {
    const styles = {
      commission: "bg-blue-100 text-blue-700",
      payout: "bg-purple-100 text-purple-700",
      bonus: "bg-teal-100 text-teal-700",
    }
    return <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${styles[type]}`}>{type}</span>
  }

  const handlePayoutRequest = (e) => {
    e.preventDefault()
    alert(`Payout request of $${payoutAmount} via ${payoutMethod} submitted successfully!`)
    setShowPayoutModal(false)
    setPayoutAmount("")
  }
  const [sidebarOpen, setSidebarOpen] = useState(false)


  if (loading) {
    return (
      <div className="h-screen bg-stone-50 flex">
        <AffiliateSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <AffiliateHeader setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 p-8">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600 mb-4"></div>
                <p className="text-stone-600">Loading earnings data...</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="h-screen bg-stone-50 flex">
        <AffiliateSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <AffiliateHeader setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 p-8">
            <div className="flex items-center justify-center h-full">
              <div className="text-center max-w-md">
                <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-4">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-medium">{error}</p>
                </div>
                <button
                  onClick={fetchEarningsData}
                  className="px-5 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  Retry
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }


  return (
    <div className="h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <AffiliateSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AffiliateHeader setSidebarOpen={setSidebarOpen} />
        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-stone-800">Earnings</h1>
              <p className="text-stone-500 mt-1">Manage your earnings and payouts</p>
            </div>
            <button
              onClick={() => setShowPayoutModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Request Payout
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {earningsStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-stone-200">
                <p className="text-sm text-stone-500">{stat.label}</p>
                <div className="flex items-end justify-between mt-2">
                  <p className="text-2xl font-bold text-stone-800">{stat.value}</p>
                  {stat.change && (
                    <span className={`text-sm font-medium ${stat.positive ? "text-emerald-600" : "text-red-600"}`}>
                      {stat.change}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Balance Card & Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Available Balance Card */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-xl text-white">
              <p className="text-teal-100 text-sm">Available for Withdrawal</p>
              <p className="text-4xl font-bold mt-2">₹{earningsData?.availableBalance?.toFixed(2) || "0.00"}
              </p>
              <div className="mt-6 pt-4 border-t border-teal-500/30">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-teal-100">Minimum payout</span>
                  <span className="font-medium">₹50.00</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-teal-100">Processing time</span>
                  <span className="font-medium">3-5 business days</span>
                </div>
              </div>
              <button
                onClick={() => setShowPayoutModal(true)}
                className="w-full mt-6 px-4 py-3 bg-white text-teal-700 rounded-lg font-medium hover:bg-teal-50 transition-colors"
              >
                {earningsData?.availableBalance && earningsData.availableBalance < 50
                  ? `Minimum $${(50 - earningsData.availableBalance).toFixed(2)} needed`
                  : "Withdraw Funds"}
              </button>
            </div>

            {/* Earnings Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-stone-200">
              <h3 className="text-lg font-semibold text-stone-800 mb-6">Monthly Earnings</h3>
              <div className="flex items-end justify-between gap-4 h-48">
                {monthlyEarnings.length > 0 ? (
                  <div className="flex items-end justify-between gap-4 h-48">
                    {monthlyEarnings.map((item, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-stone-100 rounded-t-lg relative" style={{ height: "160px" }}>
                          <div
                            className="absolute bottom-0 left-0 right-0 bg-teal-500 rounded-t-lg transition-all duration-500"
                            style={{
                              height: maxEarning > 0
                                ? `${((item.total || 0) / maxEarning) * 100}%`
                                : "0%"
                            }}
                          ></div>
                        </div>
                        <span className="text-xs text-stone-500">{item.month}</span>
                        <span className="text-xs font-medium text-stone-700">₹{item.total || 0}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-48 flex items-center justify-center text-stone-500">
                    No earnings data available
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-stone-200">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-3 font-medium transition-colors relative ${activeTab === "overview" ? "text-teal-600" : "text-stone-500 hover:text-stone-700"
                }`}
            >
              All Transactions
              {activeTab === "overview" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600"></span>}
            </button>
            <button
              onClick={() => setActiveTab("payouts")}
              className={`px-4 py-3 font-medium transition-colors relative ${activeTab === "payouts" ? "text-teal-600" : "text-stone-500 hover:text-stone-700"
                }`}
            >
              Payout History
              {activeTab === "payouts" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600"></span>}
            </button>
          </div>

          {/* Transactions Table */}
          {activeTab === "overview" && (
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
              {transactionsLoading ? (
                <div className="flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-600 mb-4"></div>
                    <p className="text-stone-600">Loading transactions...</p>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-stone-50 border-b border-stone-200">
                      <tr>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-stone-600">Transaction ID</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-stone-600">Date</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-stone-600">Type</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-stone-600">Description</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-stone-600">Status</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-stone-600">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {transactionsData?.transactions?.length > 0 ? (
                        transactionsData.transactions.map((txn) => (
                          <tr key={txn.transactionId} className="hover:bg-stone-50 transition-colors">
                            <td className="px-6 py-4 font-mono text-sm text-stone-600">{txn.transactionId}</td>
                            <td className="px-6 py-4 text-stone-600">{formatDate(txn.date)}</td>
                            <td className="px-6 py-4">{getTypeBadge(txn.type)}</td>
                            <td className="px-6 py-4 text-stone-800">{txn.description || "No description"}</td>
                            <td className="px-6 py-4">{getStatusBadge(txn.status)}</td>
                            <td
                              className={`px-6 py-4 text-right font-semibold ${txn.amount > 0 ? "text-emerald-600" : "text-red-600"}`}
                            >
                              {txn.amount > 0 ? "+" : ""}
                              ₹{Math.abs(txn.amount).toFixed(2)}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="px-6 py-8 text-center text-stone-500">
                            No transactions found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Payout History Table */}
          {activeTab === "payouts" && (
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-stone-50 border-b border-stone-200">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-stone-600">Payout ID</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-stone-600">Date</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-stone-600">Method</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-stone-600">Status</th>
                      <th className="text-right px-6 py-4 text-sm font-semibold text-stone-600">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {payoutTransactions.length > 0 ? (
                      payoutTransactions.map((payout) => (
                        <tr key={payout.transactionId} className="hover:bg-stone-50 transition-colors">
                          <td className="px-6 py-4 font-mono text-sm text-stone-600">{payout.transactionId}</td>
                          <td className="px-6 py-4 text-stone-600">{payout.date}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {payout.method === "Bank Transfer" ? (
                                <svg
                                  className="w-5 h-5 text-stone-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                  />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .757-.629h6.406c2.142 0 3.634.475 4.432 1.41.728.85.939 1.99.646 3.485l-.012.07c-.582 2.966-2.476 4.474-5.631 4.474H8.905l-1.014 5.16a.77.77 0 0 1-.757.629h-.058z" />
                                </svg>
                              )}
                              <span className="text-stone-800">{payout.method}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">{getStatusBadge(payout.status)}</td>
                          <td className="px-6 py-4 text-right font-semibold text-stone-800">₹{payout.amount.toFixed(2)}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="px-6 py-8 text-center text-stone-500">
                          No payout history found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Payout Request Modal */}
      {showPayoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-stone-800">Request Payout</h2>
              <button
                onClick={() => setShowPayoutModal(false)}
                className="p-2 hover:bg-stone-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handlePayoutRequest}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-stone-700 mb-2">Available Balance</label>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <span className="text-2xl font-bold text-stone-800">$3,240.00</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-stone-700 mb-2">Payout Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500">$</span>
                  <input
                    type="number"
                    value={payoutAmount}
                    onChange={(e) => setPayoutAmount(e.target.value)}
                    placeholder="0.00"
                    min="50"
                    max="3240"
                    className="w-full pl-8 pr-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <p className="text-xs text-stone-500 mt-1">Minimum payout: $50.00</p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-stone-700 mb-2">Payout Method</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPayoutMethod("bank")}
                    className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors ${payoutMethod === "bank" ? "border-teal-500 bg-teal-50" : "border-stone-200 hover:border-stone-300"
                      }`}
                  >
                    <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span className="text-sm font-medium text-stone-700">Bank Transfer</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayoutMethod("paypal")}
                    className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors ${payoutMethod === "paypal"
                      ? "border-teal-500 bg-teal-50"
                      : "border-stone-200 hover:border-stone-300"
                      }`}
                  >
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .757-.629h6.406c2.142 0 3.634.475 4.432 1.41.728.85.939 1.99.646 3.485l-.012.07c-.582 2.966-2.476 4.474-5.631 4.474H8.905l-1.014 5.16a.77.77 0 0 1-.757.629h-.058z" />
                    </svg>
                    <span className="text-sm font-medium text-stone-700">PayPal</span>
                  </button>
                </div>
              </div>

              {payoutMethod === "bank" && (
                <div className="mb-6 p-4 bg-stone-50 rounded-lg">
                  <p className="text-sm font-medium text-stone-700">Bank Account</p>
                  <p className="text-sm text-stone-600">Chase Bank ending in ****4532</p>
                </div>
              )}

              {payoutMethod === "paypal" && (
                <div className="mb-6 p-4 bg-stone-50 rounded-lg">
                  <p className="text-sm font-medium text-stone-700">PayPal Account</p>
                  <p className="text-sm text-stone-600">john@email.com</p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowPayoutModal(false)}
                  className="flex-1 px-4 py-3 border border-stone-200 text-stone-700 rounded-lg font-medium hover:bg-stone-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  Request Payout
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
