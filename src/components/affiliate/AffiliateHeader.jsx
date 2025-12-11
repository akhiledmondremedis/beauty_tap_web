import { useSelector } from "react-redux"


const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
)

export default function AffiliateHeader({ setSidebarOpen }) {

    const { affiliate } = useSelector((state) => state.affiliateAuth)

    return (
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                    <MenuIcon />
                </button>
                <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
            </div>

            {affiliate && (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <span className="text-teal-600 font-semibold">
                            {affiliate.name?.split(" ").map(n => n[0]).join("").toUpperCase()}
                        </span>
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-medium text-gray-900">{affiliate.name}</p>
                        <p className="text-xs text-gray-500">{affiliate.email}</p>
                    </div>
                </div>
            )}
        </header>
    )
}
