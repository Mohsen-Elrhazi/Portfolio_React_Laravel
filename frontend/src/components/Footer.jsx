import { Link } from 'react-router-dom';
import Github2 from '../assets/images/github2.png';
import LinkedIn2 from '../assets/images/linkedin2.png';
import Facebook2 from '../assets/images/facebook2.png';

export default function Footer() {
  return (
    <footer className="border-t-2 w-[calc(100%-10rem)] m-auto py-6  bottom-0 left-0 right-0 bg-white z-0">
      <div className="container mx-auto flex  items-center justify-evenly">
        <div className="text-center ">
          <p className="text-gray-800">Designed & Developed by Mohsen Elrhazi</p>
        </div>
        <div className="text-center ">
          <p className="text-gray-800">&copy; 2025 Mon Portfolio. Tous droits réservés.</p>
        </div>
        <div className="flex justify-between items-center space-x-16">
          <Link to="#" className="hover:scale-110 transition-transform duration-300 ">
            <img className="w-7" src={LinkedIn2} alt="linkedin"  style={{ filter: 'drop-shadow(0px 0px 12px #e2270a)' }}></img>
          </Link>
          <Link to="#" className="hover:scale-110 transition-transform duration-300">
            <img className="w-7" src={Github2} alt="github"></img>
          </Link>
          <Link to="#" className="hover:scale-110  transition-transform duration-300">
            <img className="w-7" src={Facebook2} alt="facebook"></img>
          </Link>
        </div>
      </div>
    </footer>
  );
}