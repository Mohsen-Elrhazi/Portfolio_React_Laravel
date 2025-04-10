import { useEffect, useState } from 'react';

function Projets() {
    const [projets, setProjets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/projets')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data);
                setProjets(data); 
            })
    }, []);

    return (
        <div>
            <h2>Liste des projets</h2>
            <ul>
                {projets.map((projet) => (
                    <li key={projet.id}>{projet.nom}</li>
                ))}
            </ul>
        </div>
    );
}

export default Projets;