import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  token: null,
  affiliate: null,
}

const affiliateSlice = createSlice({
  name: "affiliateAuth",
  initialState,
  reducers: {
    setAffiliateAuth: (state, action) => {
      state.token = action.payload.token
      state.affiliate = action.payload.affiliate
    },
    logoutAffiliate: (state) => {
      state.token = null
      state.affiliate = null
      localStorage.removeItem("affiliate_token")
    },
  },
})

export const { setAffiliateAuth, logoutAffiliate } = affiliateSlice.actions
export default affiliateSlice.reducer
