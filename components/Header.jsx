'use client';
import React, { useState, useEffect } from 'react';

// Import dei componenti
import Logo from './Logo'; // Importa il componente del logo
import Nav from './Nav'; // Importa il componente della barra di navigazione
import MobileNav from './MobileNav'; // Importa il componente della barra di navigazione mobile
import ThemeToggler from './ThemeToggler'; // Importa il componente per il cambio tema
import { usePathname } from 'next/navigation'; // Importa l'hook per ottenere il percorso corrente della pagina

// Componente Header: gestisce l'intestazione del sito, compresi il logo, la navigazione e il tema.
const Header = () => {
  // Stato per gestire l'aspetto dell'intestazione in base allo scroll
  const [header, setHeader] = useState(false);
  // Ottieni il percorso corrente della pagina utilizzando l'hook usePathname
  const pathname = usePathname();

  useEffect(() => {
    // Effetto per gestire lo scroll e cambiare l'aspetto dell'intestazione
    const handleScroll = () => {
      // Se lo scroll supera i 50px dall'alto, modifica lo stato dell'intestazione
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    // Aggiungi un listener per lo scroll quando il componente viene montato
    window.addEventListener('scroll', handleScroll);

    // Pulisci l'evento di scroll quando il componente viene smontato per evitare memory leak
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header
      className={`
        ${
          header
            ? 'py-4 bg-primary shadow-lg dark:bg-accent'
            : 'py-6 dark:bg-transparent'
        } sticky top-0 z-30 transition-all ${
          pathname === '/' && 'bg-[#fef9f5]'
        }`}
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* Logo: il logo del sito */}
          <Logo />
          <div className='gap-x-6 flex items-center'>
            {/* Nav: la barra di navigazione del sito */}
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            {/* Theme Toggler: il selettore per il tema chiaro/scuro */}
            <ThemeToggler />
            {/* Mobile Nav: la versione mobile della barra di navigazione */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
