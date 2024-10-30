import Image from "next/image";
import "../globals.css";
import { Play } from "lucide-react";

export const Banner = () => {
    return (
        <div className="banner-style">
            <div className="banner-item">
                <Image height={1920} width={1080} alt='Banner' src="/banner/image.png" /> 
                <div className="banner-player">
                    <a href="https://player.vimeo.com/video/172601404?autoplay=1"><Play className="banner-icon" color="white" size={30}/></a>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>    
            </div>
        </div>       
    )
}