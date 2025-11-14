import React from 'react';
import { XIcon } from './icons';
import { DISCOUNT_OFFER } from '../constants';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const DiscountModal: React.FC<DiscountModalProps> = ({ isOpen, onClose, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-brand-dark w-full max-w-lg rounded-lg shadow-2xl flex flex-col relative overflow-hidden border-2 border-brand-gold/50">
        <div className="absolute top-0 right-0 p-4">
            <button onClick={onClose} className="text-brand-light/50 hover:text-brand-light">
                <XIcon className="w-6 h-6" />
            </button>
        </div>
        
        <div className="p-10 text-center">
            <h2 className="text-2xl font-serif text-brand-gold uppercase tracking-widest">{DISCOUNT_OFFER.title}</h2>
            <div className="my-6">
                <span className="text-8xl font-bold text-brand-light">{DISCOUNT_OFFER.percentage}</span>
                <span className="text-5xl font-serif text-brand-light ml-2">OFF</span>
            </div>
            <p className="text-brand-light/80 max-w-md mx-auto mb-8">
                {DISCOUNT_OFFER.description}
            </p>
            <button 
                onClick={onAccept}
                className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
                {DISCOUNT_OFFER.ctaText}
            </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;
