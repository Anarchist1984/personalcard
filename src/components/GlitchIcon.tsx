import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GlitchIconProps {
  Icon: LucideIcon;
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const GlitchIcon: React.FC<GlitchIconProps> = ({ Icon, href, onClick }) => {
  return (
    <a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      onClick={onClick}
      className="glitch-icon-container relative text-text hover:text-secondary transition-colors"
    >
      <Icon className="w-8 h-8 icon-main" />
      <Icon className="w-8 h-8 icon-r absolute top-0 left-0 opacity-0" />
      <Icon className="w-8 h-8 icon-g absolute top-0 left-0 opacity-0" />
      <Icon className="w-8 h-8 icon-b absolute top-0 left-0 opacity-0" />
    </a>
  );
};

export default GlitchIcon;