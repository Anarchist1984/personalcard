import React, { useState } from 'react';
import { Github, Instagram, MessageSquare, Mail } from 'lucide-react';
import GlitchImage from './GlitchImage';
import GlitchIcon from './GlitchIcon';
import alastor from '../images/alastor.jpg';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation(); // Prevent card flip when clicking links
  };

  return (
    <div
      className="perspective-1000 w-[600px] h-[300px] cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-background rounded-xl border-2 border-primary p-8 shadow-lg shadow-primary/20">
            <div className="flex gap-8">
              <GlitchImage src={alastor} alt="Profile" />
              <div className="text-text">
                <h1 className="text-3xl font-bold text-secondary">
                  Anarchist1984
                </h1>
                <p className="text-lg opacity-80">Lifeissad, George (IRL)</p>
                <p className="mt-4 text-lg">
                  We adore chaos because we love to produce order.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-8">
              <GlitchIcon
                Icon={Github}
                href="https://github.com"
                onClick={handleLinkClick}
              />
              <GlitchIcon
                Icon={Instagram}
                href="https://instagram.com"
                onClick={handleLinkClick}
              />
              <GlitchIcon
                Icon={MessageSquare}
                href="https://discord.com"
                onClick={handleLinkClick}
              />
              <GlitchIcon
                Icon={Mail}
                href="mailto:example@example.com"
                onClick={handleLinkClick}
              />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-background rounded-xl border-2 border-primary p-8 shadow-lg shadow-primary/20">
            <div className="h-full flex flex-col justify-between text-text">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">
                  About Me
                </h2>
                <p className="text-lg">
                  Digital artist and chaos engineer specializing in creating
                  order from disorder. Always seeking new challenges and
                  opportunities to transform complexity into simplicity.
                </p>
              </div>
              <div className="text-sm">
                <p className="text-secondary">Click to flip back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
