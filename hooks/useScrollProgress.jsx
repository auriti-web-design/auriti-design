import React, { useState, useEffect } from 'react';

// Questo hook personalizzato calcola e restituisce la percentuale di progresso dello scroll della finestra.
const useScrollProgress = () => {
    // Utilizziamo lo stato per tenere traccia della percentuale di completamento dello scroll.
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        // Funzione che aggiorna la percentuale di completamento dello scroll.
        const updateScrollCompletion = () => {
            // Otteniamo la posizione corrente dello scroll.
            const currentProgress = window.scrollY;
            // Calcoliamo l'altezza totale dello scroll della pagina.
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            // Assicuriamoci che scrollHeight non sia 0 per evitare la divisione per zero.
            if (scrollHeight) {
                // Calcoliamo la percentuale di completamento dello scroll e la aggiorniamo nello stato.
                setCompletion((currentProgress / scrollHeight) * 100);
            }
        };

        // Aggiungiamo un listener degli eventi per aggiornare la percentuale di completamento dello scroll.
        window.addEventListener('scroll', updateScrollCompletion);

        // Puliamo il listener degli eventi quando il componente viene smontato per evitare memory leak.
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []); // Utilizziamo un array vuoto come dipendenza per eseguire l'effetto solo una volta all'inizio.

    // Restituiamo la percentuale di completamento dello scroll.
    return completion;
};

export default useScrollProgress;
