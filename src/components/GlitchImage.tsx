import React from 'react';

interface GlitchImageProps {
  src: string;
  alt: string;
}

const GlitchImage: React.FC<GlitchImageProps> = ({ src, alt }) => {
  return (
    <div className="glitch-container relative w-32 h-32">
      <img
        src={src}
        alt={alt}
        className="glitch-image w-full h-full rounded-full border-2 border-secondary object-cover"
      />
      <img
        src={src}
        alt={alt}
        className="glitch-image--r absolute top-0 left-0 w-full h-full rounded-full border-2 border-secondary object-cover"
      />
      <img
        src={src}
        alt={alt}
        className="glitch-image--g absolute top-0 left-0 w-full h-full rounded-full border-2 border-secondary object-cover"
      />
      <img
        src={src}
        alt={alt}
        className="glitch-image--b absolute top-0 left-0 w-full h-full rounded-full border-2 border-secondary object-cover"
      />
    </div>
  );
};

export default GlitchImage;