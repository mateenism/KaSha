import React from 'react';
import { COMPANY_INFO } from '../constants';
import { WhatsappIcon, BotIcon, PhoneIcon } from './icons';

interface FloatingActionButtonProps {
    onChatClick: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onChatClick }) => {
    const primaryPhoneNumber = COMPANY_INFO.phone.split(',')[0].replace(/\s/g, '');

    const buttons = [
        {
            id: 'chat',
            label: 'Open AI Chat',
            icon: <BotIcon className="w-7 h-7" />,
            action: onChatClick,
            className: 'bg-brand-dark dark:bg-brand-light text-brand-light dark:text-brand-dark',
            delay: '0.2s'
        },
        {
            id: 'whatsapp',
            label: 'Contact on WhatsApp',
            icon: <WhatsappIcon className="w-8 h-8" />,
            href: COMPANY_INFO.whatsappUrl,
            className: 'bg-[#25D366] text-white',
            delay: '0.1s'
        },
        {
            id: 'call',
            label: 'Call Us',
            icon: <PhoneIcon className="w-7 h-7" />,
            href: `tel:${primaryPhoneNumber}`,
            className: 'bg-blue-500 text-white',
            delay: '0s'
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
            {buttons.map(button => {
                const commonClasses = `w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform opacity-0 animate-fadeIn`;
                
                const style = { 
                    animationDelay: button.delay,
                    animationFillMode: 'forwards' as const
                };

                if (button.href) {
                    return (
                        <a 
                            key={button.id}
                            href={button.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`${commonClasses} ${button.className}`}
                            aria-label={button.label}
                            style={style}
                        >
                            {button.icon}
                        </a>
                    );
                }

                return (
                    <button 
                        key={button.id}
                        onClick={button.action} 
                        className={`${commonClasses} ${button.className}`}
                        aria-label={button.label}
                        style={style}
                    >
                        {button.icon}
                    </button>
                );
            })}
        </div>
    );
};

export default FloatingActionButton;
