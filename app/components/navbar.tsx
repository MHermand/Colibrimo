"use client";
import Image from "next/image";
import "../globals.css";
import 'animate.css';

interface Links  
{
    links: string[][],
    activeSection: string,
}

export const Navbar = ({links, activeSection} : Links) => 
{
    const scrollToSection = (id: string) => 
    {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth"});
    };

    return (
        <header>
            <div className="header-style flex">
                <div className="header-logo"></div>
                <ul className="header-items">
                    {links.map((link, index) => (
                        <li key={index}><button className={`header-link ${activeSection == link[0] && "header-active"}`} onClick={()=>scrollToSection(link[0])}>{link[1]}</button></li>
                    ))}
                </ul>
            </div>
        </header>        
    )
}