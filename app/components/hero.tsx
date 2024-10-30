import Image from "next/image";
import "../globals.css";

export const Hero = () => 
{
    return (
        <div id="accueil" className="hero-bg">
            <div className="hero-container">
                <div>
                    <h1 className="hero-title">L'immobilier, pour tous</h1>
                    <p className="hero-text">Le crowd-investing axée sur la rénovation énergétique qui permet à chaque utilisateur d’investir selon ses moyens et de récupérer des rentes mensuellement</p>
                </div>
                <div className="hero-image">
                    <div className="content-end"><Image height={300} width={300} alt='Ecran mobile' src="/hero/ecran1.png" /></div>
                    <div className="content-start pl-5"><Image height={300} width={300} alt='Ecran mobile' src="/hero/ecran2.png" /></div>
                </div>
            </div>
        </div>        
    )
}