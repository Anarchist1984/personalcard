import React, { useState, useEffect } from 'react';
import { Github, Instagram, MessageSquare, Mail } from 'lucide-react';
import GlitchImage from './GlitchImage';
import GlitchIcon from './GlitchIcon';
import alastor from '../images/alastor.jpg';
import ScrambledText from './ScrambledText'; // Import the ScrambledText component

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation(); // Prevent card flip when clicking links
  };

  // Trigger scrambling effect on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="perspective-1000 w-[300px] sm:w-[600px] h-[500px] sm:h-[300px] cursor-pointer"
      onClick={handleFlip}
      onMouseEnter={handleMouseEnter} // Trigger scramble effect on hover
      onMouseLeave={handleMouseLeave} // Stop scrambling when mouse leaves
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-background rounded-xl border-2 border-primary p-6 sm:p-8 shadow-lg shadow-primary/20">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
              <GlitchImage
                src={alastor}
                alt="Profile Picture"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
              />
              <div className="text-text text-center sm:text-left">
                <ScrambledText text="lifeissad" isHovered={isHovered} />{' '}
                {/* Scramble on hover */}
                <p className="text-lg opacity-80">
                  <span className="text-secondary">AKA</span> Lifeissad21,
                  Anarchist1984, George (IRL)
                </p>
                {/* Hide quote on smaller screens */}
                <p className="mt-4 text-lg sm:block hidden">
                  We adore chaos because we love to produce order.
                </p>
              </div>
            </div>

            {/* Icons section */}
            <div className="mt-4 sm:mt-8 flex justify-center gap-8">
              <GlitchIcon
                Icon={Github}
                href="https://github.com/Anarchist1984"
                onClick={handleLinkClick}
              />
              <GlitchIcon
                Icon={Instagram}
                href="https://www.instagram.com/george.p.mathew/profilecard/"
                onClick={handleLinkClick}
              />
              <GlitchIcon
                Icon={MessageSquare}
                href="https://discordapp.com/users/880924125315616768"
                onClick={handleLinkClick}
              />
              <GlitchIcon
                Icon={Mail}
                href="mailto:nerd2923@gmail.com"
                onClick={handleLinkClick}
              />
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-secondary text-lg">
            <p>Click to flip back</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-background rounded-xl border-2 border-primary p-8 shadow-lg shadow-primary/20">
            <div className="h-full flex flex-col justify-between text-text">
              <div>
                <h2 className="text-xl font-bold text-secondary pb-2">
                  About Me
                </h2>
                <p className="text-lg pb-3">
                  HS Student just trying to get through life and into a good
                  college
                </p>
                <h2 className="text-xl font-bold text-secondary pb-2">
                  Interests
                </h2>
                <p className="text-lg">
                  Coding, Fantasy, Medicine, Science, Anything that's genuinely
                  cool and not sports, I would probs be interested in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
