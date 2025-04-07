import { Link } from 'react-router-dom';
import Github from '../assets/images/github.png';
import LinkedIn from '../assets/images/linkedin.png';
import Facebook from '../assets/images/facebook.png';
export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-4 ">
      <div className="container mx-auto flex items-center justify-around">
        <p>&copy; 2025 Mon Portfolio. Tous droits réservés.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="#" className="text-gray-400 hover:text-white"><img className="w-8" src={LinkedIn} alt="github"></img></Link>
          <Link to="#" className="text-gray-400 hover:text-white"><img className="w-8" src={Github} alt="github"></img></Link>
          <Link to="#" className="text-gray-400 hover:text-white"><img className="w-8" src={Facebook} alt="github"></img></Link>
        </div>
      </div>
    </footer>
  );
}