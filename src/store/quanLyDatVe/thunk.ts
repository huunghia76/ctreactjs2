import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeServices } from "services/quanLyDatVe";
import { Booked } from "types/QuanLyDatVe";
import { getAccessToken } from "utils";

export const lichChieuPhimThunk = createAsyncThunk(
  "LayThongTinLichChieuPhim/lichChieuPhim",
  async (payload: number, { rejectWithValue }) => {
    try {
      const token = getAccessToken();
      if (token) {
        const data = await quanLyDatVeServices.movieBooking(
          `?MaLichChieu=${payload}`
        );

        return data.data.content;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const datVeThunk = createAsyncThunk(
  "LayThongTinLichChieuPhim/lichChieuPhim",
  async (payload: Booked, { rejectWithValue }) => {
    try {
      const data = await quanLyDatVeServices.postBooked(payload);

      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
