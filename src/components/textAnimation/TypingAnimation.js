import React, { useState, useEffect } from 'react';
import './TextAnimation.css';

const TextAnimation = ({ words, fadeDuration = 2000, displayDuration = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const changeWord = () => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, fadeDuration);
    };

    const intervalId = setInterval(changeWord, fadeDuration + displayDuration);

    return () => clearInterval(intervalId);
  }, [words, fadeDuration, displayDuration]);

  return (
    <div className={`fade-${fade ? 'in' : 'out'}`}>
      {words[currentWordIndex]}
    </div>
  );
};

export default TextAnimation;
