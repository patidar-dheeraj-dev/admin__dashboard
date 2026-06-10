import { createSlice } from "@reduxjs/toolkit";
import { stats, activities, chartData } from "./dashboardData";

const initialState = {
  balance: "€ 320.845,20",
  growth: "15.8%",
  stats,
  activities,
  chartData,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;