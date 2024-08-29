/* 
  41. Working with Layout Routes 
    1.create layout
    2.nested routes

*/

import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
