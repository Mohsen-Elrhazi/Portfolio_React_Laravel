import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function Layout() {
  return (
    <>
      <header className="">
        <Navbar />
      </header>
      <main className="h-auto my-8 ">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
