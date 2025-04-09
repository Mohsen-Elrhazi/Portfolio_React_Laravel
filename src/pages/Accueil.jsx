import { useState, useEffect } from 'react';
import '../assets/styles/Accueil.css';
import Profile from '../assets/images/profile.avif';
import { Link } from 'react-router-dom';

const PortfolioMain = () => {
  // État pour le texte qui change
  const [profession, setProfession] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  // Liste des professions à afficher
  const professions = ["développeur", "designer", "créateur", "innovateur"];
  
  // Effet pour l'animation du texte
  useEffect(() => {
    // Référence actuelle de la profession
    const currentProfession = professions[index % professions.length];
    
    let timer;
    
    if (isTyping) {
      // Si on est en train d'écrire
      if (profession.length < currentProfession.length) {
        // Continuer à ajouter des caractères
        timer = setTimeout(() => {
          setProfession(currentProfession.substring(0, profession.length + 1));
        }, 120);
      } else {
        // Attendre avant d'effacer
        timer = setTimeout(() => setIsTyping(false), 1500);
      }
    } else {
      // Si on est en train d'effacer
      if (profession.length > 0) {
        // Continuer à supprimer des caractères
        timer = setTimeout(() => {
          setProfession(profession.substring(0, profession.length - 1));
        }, 60);
      } else {
        // Passer à la profession suivante
        timer = setTimeout(() => {
          setIndex(index + 1);
          setIsTyping(true);
        }, 500);
      }
    }
    
    return () => clearTimeout(timer);
  }, [profession, index, isTyping, professions]);
  
  return (
    <section className="portfolio-section">
      
      
      <div className="content-container">
        <h1 className="name-heading">Mohsen Elrhazi</h1>
        
        <div className="typing-container">
          <p className="typing-text">
            Je suis <span className="profession">
              {profession}
              <span className="cursor"></span>
            </span>
          </p>
        </div>
        
        <p className="description">
          Passionné par la création numérique, j'apporte des solutions innovantes et 
          élégantes à travers mes compétences techniques et créatives. Je transforme 
          des idées en expériences utilisateur mémorables.
        </p>
        
        <div className="buttons-container">
          <Link to="/contact" className="contact-button">
            Contactez-moi
          </Link>
          <button className="download-button">
            Télécharger CV
          </button>
        </div>
      </div>

      <div className="image-container">
        <img 
          src={Profile}
          alt="Photo de profil" 
          className="profile-image"
        />
      </div>
    </section>
  );
};

export default PortfolioMain;