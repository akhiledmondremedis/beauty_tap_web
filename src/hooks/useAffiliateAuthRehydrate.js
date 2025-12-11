import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAffiliateAuth } from "../redux/slices/affiliateSlice"

export default function useAffiliateAuthRehydrate() {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("affiliate_token")
    const affiliateData = localStorage.getItem("affiliate_data")

    if (token && affiliateData) {
      dispatch(
        setAffiliateAuth({
          token,
          affiliate: JSON.parse(affiliateData),
        })
      )
    }
  }, [dispatch])
}
