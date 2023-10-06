export type Movie = {
   maPhim: number;
   tenPhim: string;
   biDanh: string;
   trailer: string;
   hinhAnh: string;
   moTa: string;
   maNhom: string;
   ngayKhoiChieu: string;
   danhGia: number;
   hot: boolean;
   dangChieu: boolean;
   sapChieu: boolean;
};

export type MovieDetail = {
   maPhim: number;
   tenPhim: string;
   biDanh: string;
   trailer: string;
   hinhAnh: string;
   moTa: string;
   maNhom: string;
   hot: boolean;
   dangChieu: boolean;
   sapChieu: boolean;
   ngayKhoiChieu: string;
   danhGia: number;
};

export type MoviePosts = {
   heThongRapChieu: [];
   hinhAnh: string;
   diaChi: string;
   tenCumRap: string;
   maCumRap: string;
};
export type HeThongRapChieu = {
   cumRapChieu: []
   logo: string
   maHeThongRap: string
   tenHeThongRap: string
};
export type Rap = {

   diaChi:string
   hinhAnh: string
   lichChieuPhim: []
   maCumRap:string
   tenCumRap:string
};
