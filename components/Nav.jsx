// link (nextjs): Importa il componente Link da Next.js per la navigazione tra le pagine.

import Link from 'next/link';

// next hooks: Importa l'hook usePathname da Next.js per ottenere il percorso corrente della pagina.

import { usePathname } from 'next/navigation';

// framer motion: Importa il modulo motion da Framer Motion per animazioni.

import { motion } from 'framer-motion';

// Array di oggetti che rappresentano i link della barra di navigazione.

const links = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about me' },
    { path: '/projects', name: 'projects' },
    { path: '/contact', name: 'contacts' },
];

// Componente Nav: gestisce la barra di navigazione del sito.

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    // Ottieni il percorso corrente della pagina utilizzando l'hook usePathname.
    const path = usePathname();

    return (
        <nav className={`${containerStyles}`}>
            {/* Mappa gli elementi dell'array links per creare i link della barra di navigazione. */}
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`capitalize ${linkStyles}`}
                        >
                        {/* Aggiunge un'animazione allo span sottolineato quando il link è attivo. */}
                        {link.path === path && (
                            <motion.span 
                                initial={{y: '-100%'}}
                                animate={{y: '0'}}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nav;
