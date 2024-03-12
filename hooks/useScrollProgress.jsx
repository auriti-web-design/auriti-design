import React, { useState, useEffect } from 'react'

const useScrollProgress = () => {

    const [ completion, setCompletion ] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if(scrollHeight) {
                setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
            }
        };
        // Event listener to update scroll
        window.addEventListener('scroll', updateScrollCompletion);

        // clear up event listener on unmount
        return() => window.removeEventListener('scroll', updateScrollCompletion);
    }, []);



  return completion
}

export default useScrollProgress