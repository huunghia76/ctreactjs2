import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AuthLayout, Home, MainLayout } from "components";
import { Account, Login, Register, Contact } from "pages";
import Detail from "components/ui/Detail";
import { MovieBooking } from "pages/MovieBooking";

export const router: RouteObject[] = [
   {
      path: "/",
      element: <Home />,
      children: [
         {
            index: true,
            element: <MainLayout />,
         },
         {
            path: PATH.account,
            element: <Account />,
         },
         {
            path: PATH.contact,
            element: <Contact />,
         },
      ],
   },
   {
      path: PATH.movieBooking,
      element: <MovieBooking />,
   },
   {
      path: "/detail",
      element: <Detail />,
      children: [],
   },
   {
      element: <AuthLayout />,
      children: [
         {
            path: PATH.login,
            element: <Login />,
         },
         {
            path: PATH.register,
            element: <Register />,
         },
      ],
   },
];
