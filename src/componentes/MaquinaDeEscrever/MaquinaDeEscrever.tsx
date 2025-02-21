import { useEffect, useState } from "react";

export function MaquinaDeEscrever({ text="", delay = 100, loop = true }) {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (loop) {
      setTimeout(() => {
        // setDisplayText(""); // Limpa o texto
        setIndex(0); 
      }, 2000); 
    }
  }, [index, text, delay, loop]);

  return <span>{displayText}</span>;
}
