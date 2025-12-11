import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("affiliate_token")

  if (!token) {
    return <Navigate to="/affiliate-partner/login" replace />
  }

  return children
}
