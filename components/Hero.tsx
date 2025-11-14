import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  imageUrl: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  imageUrl, 
  showButton = false, 
  buttonText = "Plan Your Event", 
  buttonLink = "/cost-calculator" 
}) => {
  const navigate = useNavigate();

  return (
    <div 
      className="relative h-[80vh] md:h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-4 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-light max-w-3xl mx-auto mb-8">
          {subtitle}
        </p>
        {showButton && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                  onClick={() => navigate(buttonLink)}
                  className="w-full sm:w-auto bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                  {buttonText}
              </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;