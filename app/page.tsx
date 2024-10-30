"use client";
import { useEffect, useState } from 'react'
import { Banner } from "./components/banner";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Newsletter } from "./components/newsletter";

export default function Home() 
{

  let links = [["accueil","Accueil"], ["concept","Concept"],["contact","Contact"]]
  let [activeSection, setActiveSection] = useState(links[0][0])

  useEffect(() => 
  {
    let accueil = document.getElementById(links[0][0])
    let concept = document.getElementById(links[1][0])
    let contact = document.getElementById(links[2][0])
    let sections = [accueil, concept, contact]

    const observerOptions = 
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(entries => 
    {
      entries.forEach(entry => 
      {
          if(entry.isIntersecting)
          {
            if (entry.target.id == links[0][0]){setActiveSection(links[0][0])}
            if (entry.target.id == links[1][0]){setActiveSection(links[1][0])}
            if (entry.target.id == links[2][0]){setActiveSection(links[2][0])}
          }
      })
    }, observerOptions)
  
    sections?.forEach(section => {section && observer.observe(section)})
  }, [])

  return (
    <html lang="en">
      <body>
        <Navbar links={links} activeSection={activeSection}/>
        <Hero />
        <Features />
        <Banner />
        <Newsletter />
        <Footer />
      </body>
      </html>
  );
}
