import React from 'react';

const AFFILIATE_URL = "https://www.healthgreenworld.com/?userName=VARGAS24HGW";

interface CTAButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, className = "", onClick }) => {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-block bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-4 px-8 rounded-full shadow-2xl transform transition hover:scale-105 active:scale-95 text-center uppercase tracking-wider text-sm md:text-base ${className}`}
    >
      {text}
    </a>
  );
};

export default CTAButton;