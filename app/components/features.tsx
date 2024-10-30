import Image from "next/image";
import "../globals.css";

export const Features = () => {
    return (
        <div id="concept" className="feature-style">
            <div className="feature-title">Le Concept</div>
            <div className="feature-grid">
                <div className="feature-item">
                    <div className="feature-icon"><Image height={50} width={50} alt='Rentable' src="/features/rentable.png" /></div>
                    <div className="feature-content">
                        <h3 className="title">Rentable</h3>
                        <p className="desc">Nous ciblons des immeubles de caractère avec une rentabilité nette annuelle supérieure à 5%.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-icon"><Image height={50} width={50} alt='Adaptable' src="/features/adaptable.png" /></div>
                    <div className="feature-content">
                        <h3 className="title">Adaptable</h3>
                        <p className="desc">Nos projets sont accessibles par tranche de 50€ et revendables à tout moment sur le marché secondaire.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-icon"><Image height={50} width={50} alt='Durable' src="/features/durable.png" /></div>
                    <div className="feature-content">
                        <h3 className="title">Durable</h3>
                        <p className="desc">Notre mission consiste à redonner vie à des bâtiments anciens grâce à la rénovation énergétique.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-icon"><Image height={50} width={50} alt='Local' src="/features/local.png" /></div>
                    <div className="feature-content">
                        <h3 className="title">Local</h3>
                        <p className="desc">Nous concentrons nos efforts sur le marché que nous connaissons, la région des Haut-de-France.</p>
                    </div>
                </div>
            </div>
        </div>       
    )
}