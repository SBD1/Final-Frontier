import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;

        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.substring(0,i+1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    return displayText;

};

export const Typewriter = ({text, speed, className}) => {
    const displayText = useTypewriter(text, speed);
    return <p className={className}>{displayText}</p>;
}

export default Typewriter;