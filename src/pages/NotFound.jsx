import { Link } from "react-router-dom";
// import Robot from "../assets/images/robot.jpg";


export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen text-xl ">
      <h1>Page not Found 404</h1>
      {/* <img src={Robot} alt="robot" className="w-24 h-24 ml-4" /> */}
      <div className="w-px h-8 m-4 bg-gray-400"></div>
      <Link to="/" className="px-4 py-2 border rounded hover:bg-gray-100">Back home page</Link>
    </div>
  );
}
