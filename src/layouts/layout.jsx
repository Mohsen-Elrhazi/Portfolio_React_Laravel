import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <header>
        {/* <h1>header de app</h1> */}
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>footer de app</h1>
      </footer>
    </>
  );
}
