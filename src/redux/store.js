import { configureStore } from "@reduxjs/toolkit"
import affiliateReducer from "./slices/affiliateSlice"

export const store = configureStore({
  reducer: {
    affiliateAuth: affiliateReducer,
  }
})

export const RootState = () => store.getState()
export const AppDispatch = store.dispatch
