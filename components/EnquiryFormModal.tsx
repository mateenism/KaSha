import React from 'react';
import { XIcon, SendIcon } from './icons';

interface EnquiryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryFormModal: React.FC<EnquiryFormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-brand-light dark:bg-brand-dark w-full max-w-lg rounded-lg shadow-2xl flex flex-col">
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-brand-dark-secondary">
          <h2 className="text-xl font-serif text-brand-dark dark:text-brand-light">Let's Plan Your Event</h2>
          <button onClick={onClose} className="text-brand-gray hover:text-brand-dark dark:hover:text-brand-light">
            <XIcon className="w-6 h-6" />
          </button>
        </header>
        
        <form className="p-6 space-y-4">
            <p className="text-sm text-brand-gray">You missed our offer, but we'd still love to help! Fill out the form for a personalized consultation.</p>
            <input type="text" placeholder="Your Name" className="w-full p-3 bg-brand-light-secondary dark:bg-brand-dark-secondary rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-dark dark:text-brand-light" />
            <input type="email" placeholder="Your Email" className="w-full p-3 bg-brand-light-secondary dark:bg-brand-dark-secondary rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-dark dark:text-brand-light" />
            <textarea placeholder="Tell us about your event..." rows={4} className="w-full p-3 bg-brand-light-secondary dark:bg-brand-dark-secondary rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-dark dark:text-brand-light"></textarea>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-yellow-500 transition-colors">
                Send Enquiry <SendIcon className="w-5 h-5"/>
            </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryFormModal;
