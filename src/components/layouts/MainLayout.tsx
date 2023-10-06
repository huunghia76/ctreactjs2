import { Tabs, TabsProps } from "antd";
import {
  HomeTemplate,
  HomeTemplateFullFilm,
  HomeTemplateUpcoming,
} from "components";
import Banner from "components/ui/Banner";
import styled from "../../assets/mainLayout.module.css";

export const MainLayout = () => {
  // const navigate = useNavigate();
  const items: TabsProps["items"] = [
    {
      key: "fullFilm",
      label: "TẤT CẢ PHIM",
      children: <HomeTemplateFullFilm />,
    },
    {
      key: "dangChieu",
      label: "PHIM ĐANG CHIẾU",
      children: <HomeTemplate />,
    },
    {
      key: "sapChieu",
      label: "PHIM SẮP CHIẾU",
      children: <HomeTemplateUpcoming />,
    },
  ];

  const onChange = async (key: string) => {console.log(key);
  };

  return (
    <main>
      <br />
      <Banner />
      <Tabs
        defaultActiveKey="fullFilm"
        items={items}
        onChange={onChange}
        className={styled.tabsAntd}
      />
    </main>
  );
};
