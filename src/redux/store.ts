import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mapSlice from "./slices/mapSlice";

const rootReducer = combineReducers({
  map: mapSlice
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer
})

export default store
