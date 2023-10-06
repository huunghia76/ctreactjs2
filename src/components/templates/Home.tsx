import { Footer, Header } from "components";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <Header />
      <div id="main-content">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
