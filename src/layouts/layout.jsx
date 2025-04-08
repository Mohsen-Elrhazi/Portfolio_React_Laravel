import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function Layout() {
  return (
    <>
      <header className="mb-12">
        <Navbar />
      </header>
      <main className="min-h-screen mt-24 ">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
