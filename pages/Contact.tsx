import React from 'react';
import { COMPANY_INFO } from '../constants';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, SendIcon, ChevronDownIcon } from '../components/icons';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: COMPANY_INFO.phone,
      subDetails: 'Mon-Sat: 10 AM - 7 PM',
    },
    {
      icon: MailIcon,
      title: 'Email',
      details: COMPANY_INFO.email,
      subDetails: '24-48 hour response time',
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      details: 'Delhi, India',
      subDetails: 'Pan-India Services Available',
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: 'Monday - Saturday',
      subDetails: '10:00 AM - 7:00 PM IST',
    },
  ];

  return (
    <div className="bg-brand-light-secondary dark:bg-brand-dark-secondary pt-20 lg:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Side: Form */}
          <div className="lg:w-3/5 bg-brand-light dark:bg-brand-dark p-8 sm:p-12 rounded-lg shadow-lg">
            <h2 className="text-4xl font-serif font-bold text-brand-dark dark:text-brand-light mb-2">Plan Your Event</h2>
            <p className="text-brand-gray mb-8">Fill out the form below and our team will get back to you within 24 hours</p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark dark:text-brand-light mb-2">Your Name *</label>
                <input type="text" id="name" placeholder="Enter your full name" className="w-full p-3 bg-white dark:bg-brand-dark-secondary border border-gray-200 dark:border-brand-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-dark dark:text-brand-light" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-dark dark:text-brand-light mb-2">Phone Number *</label>
                  <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" className="w-full p-3 bg-white dark:bg-brand-dark-secondary border border-gray-200 dark:border-brand-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-dark dark:text-brand-light" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark dark:text-brand-light mb-2">Email Address *</label>
                  <input type="email" id="email" placeholder="your@email.com" className="w-full p-3 bg-white dark:bg-brand-dark-secondary border border-gray-200 dark:border-brand-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-dark dark:text-brand-light" />
                </div>
              </div>

              <div>
                <label htmlFor="event-type" className="block text-sm font-medium text-brand-dark dark:text-brand-light mb-2">Type of Event *</label>
                <div className="relative">
                    <select id="event-type" className="w-full p-3 pr-10 bg-white dark:bg-brand-dark-secondary border border-gray-200 dark:border-brand-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-dark dark:text-brand-light appearance-none">
                        <option>Select event type</option>
                        <option>Wedding</option>
                        <option>Corporate Event</option>
                        <option>Concert / Show</option>
                        <option>Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-gray">
                        <ChevronDownIcon className="w-5 h-5" />
                    </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark dark:text-brand-light mb-2">Tell Us About Your Event *</label>
                <textarea id="message" placeholder="Share your vision, expected guest count, preferred dates, location..." rows={5} className="w-full p-3 bg-white dark:bg-brand-dark-secondary border border-gray-200 dark:border-brand-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-dark dark:text-brand-light"></textarea>
              </div>

              <div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-bold py-4 px-8 rounded-md hover:bg-yellow-500 transition-colors text-lg">
                  Send Inquiry <SendIcon className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="lg:w-2/5 space-y-6">
            <h2 className="text-4xl font-serif font-bold text-brand-dark dark:text-brand-light">Contact <span className="text-brand-gold">Information</span></h2>
            
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-brand-light dark:bg-brand-dark p-6 rounded-lg shadow-lg flex items-center gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center">
                    <Icon className="w-7 h-7 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark dark:text-brand-light">{item.title}</h3>
                    <p className="text-brand-dark dark:text-brand-light/90">{item.details}</p>
                    <p className="text-sm text-brand-gray">{item.subDetails}</p>
                  </div>
                </div>
              );
            })}
            
            <div className="bg-brand-gold p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-2">Ready to Start?</h3>
              <p className="text-brand-dark/80 mb-6">Schedule a free consultation call to discuss your event requirements.</p>
              <a href={`tel:${COMPANY_INFO.phone.split(',')[0].replace(/\s/g, '')}`} className="w-full inline-flex items-center justify-center gap-2 bg-white text-brand-dark font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors">
                <PhoneIcon className="w-5 h-5"/> Call Now
              </a>
            </div>
          </div>

        </div>
      </div>
      
      <div className="mt-20">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392319246!2d77.0688975472119!3d28.52728033800204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1676885365421!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KaSha Location in Delhi"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;