import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tempSlice from "./slices/tempSlice";

const rootReducer = combineReducers({
    temp: tempSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
