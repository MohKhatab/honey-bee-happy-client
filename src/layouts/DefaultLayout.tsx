import Navbar from "../components/common/Navbar";
import AskQuestion from "../components/landing/AskQuestion";
import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <AskQuestion />
    </>
  );
}
