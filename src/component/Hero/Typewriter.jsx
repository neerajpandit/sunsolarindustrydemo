import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const words = ["HOME", "AIRPORT", "BUILDING", "AGRICULTURE", "HOME"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, textIndex - 1));
        setTextIndex(textIndex - 1);

        if (textIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);

        if (textIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer); // Cleanup timeout on unmount or state change
  }, [currentWordIndex, currentText, isDeleting, textIndex]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="text-4xl font-bold">
        Solar For{' '}
        <span className="text-orange-500">
          {currentText}
        </span>
      </h1>
    </div>
  );
};

export default Typewriter;
