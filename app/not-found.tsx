import "./globals.css";
import Link from 'next/link'
import Image from "next/image";
import { Undo2 } from 'lucide-react';
 
export default function NotFound() {
  return (
    <div id="accueil" className="unknown-bg">
        <div className="unkown-container">
            <ul className="unknown-title">Erreur #404</ul>
            <ul className="unknown-text">La page recherchée n'existe pas <a href="/" className="ml-1"><Undo2 /></a></ul>
        </div>
    </div>
  )
}