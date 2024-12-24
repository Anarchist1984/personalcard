import React, { useState, useEffect } from 'react';

interface ScrambledTextProps {
  text: string;
  isHovered: boolean;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({ text, isHovered }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    if (isHovered) {
      // Trigger scramble effect on hover
      scrambleText();
    }
  }, [isHovered]);

  useEffect(() => {
    scrambleText(); // Initial scramble on page load
  }, []);

  const scrambleText = () => {
    setIsScrambling(true);
    let scrambled = text.split('');
    const originalText = text;
    let interval = setInterval(() => {
      scrambled = scrambled.map((char) =>
        Math.random() > 0.7
          ? String.fromCharCode(33 + Math.random() * 94)
          : char
      );
      setScrambledText(scrambled.join(''));
    }, 50);

    // Stop scrambling after 3 seconds (or change to desired time)
    setTimeout(() => {
      clearInterval(interval);
      setScrambledText(originalText);
      setIsScrambling(false);
    }, 1000);
  };

  return (
    <h1
      className={`text-2xl sm:text-3xl font-bold text-secondary ${
        isScrambling ? 'glitch' : ''
      }`}
      style={{ position: 'relative' }}
    >
      {scrambledText}
    </h1>
  );
};

export default ScrambledText;
