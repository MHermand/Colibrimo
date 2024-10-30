import Image from "next/image";
import "../globals.css";
import 'animate.css';
import { Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="footer-bg">
            <div className="footer-image">
                <Image height={1920} width={1080} alt='Logo' src="/footer/logo.png" />
                <div className="footer-content">
                    <span>© 2024 - Créé par <a href="https://www.linkedin.com/in/maxence-hermand-6193a531/" target="_blank"> Maxence Hermand</a></span>
                </div>    
            </div>
        </footer>       
    )
}