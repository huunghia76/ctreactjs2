import { createSlice } from "@reduxjs/toolkit";
import { BoxOfficeList } from "types/QuanLyDatVe";
import { lichChieuPhimThunk } from ".";

type QuanLyDatVe = {
  //
  boxOfficeList?: BoxOfficeList;
};
const initialState: QuanLyDatVe = {};

const quanLyDatVeSlice = createSlice({
  name: "quanLyDatVe",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(lichChieuPhimThunk.fulfilled, (state, { payload }) => {
      state.boxOfficeList = payload;
    });
  },
});
export const { actions: quanLyDatVeActions, reducer: quanLyDatVeReducer } =
  quanLyDatVeSlice;
