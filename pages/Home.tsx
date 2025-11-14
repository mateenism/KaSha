import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HERO_SLIDES_DATA, SERVICES_DATA, WHY_CHOOSE_US_DATA, COMMITMENT_DATA, PROCESS_STEPS, STATS_DATA, TESTIMONIALS_DATA, CITIES_DATA } from '../constants';
import { PanIndiaIcon, SolutionsIcon, ClientIcon, QualityIcon, QuoteIcon, StarIcon, UsersIcon, CheckCircleIcon, BriefcaseIcon, TargetIcon } from '../components/icons';

const whyUsIconMap: { [key: string]: React.FC<{className?: string}> } = {
    'PanIndia': PanIndiaIcon,
    'Solutions': SolutionsIcon,
    'Quality': QualityIcon,
    'Users': UsersIcon
};

const commitmentIconMap: { [key: string]: React.FC<{className?: string}> } = {
    'Client': ClientIcon,
    'CheckCircle': CheckCircleIcon,
    'Briefcase': BriefcaseIcon,
    'Target': TargetIcon
};

// Fix: Add a helper function to parse hero slide titles and render styled JSX.
// This is needed because the title data was moved from JSX to a string in constants.ts to fix parsing errors.
const renderHeroTitle = (title: React.ReactNode): React.ReactNode => {
    if (typeof title === 'string' && title.includes('|')) {
        const parts = title.split('|');
        if (parts.length === 3) {
            return <>{parts[0]}<span className="text-brand-gold">{parts[1]}</span>{parts[2]}</>;
        }
    }
    return title;
};

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [showAllCities, setShowAllCities] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = HERO_SLIDES_DATA;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, [slides.length]);

    const displayedCities = showAllCities ? CITIES_DATA : CITIES_DATA.slice(0, 8);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
    <div className="dark:bg-brand-dark">
      {/* Hero Carousel Section */}
      <div className="relative h-[80vh] md:h-screen w-full overflow-hidden">
          {/* Background Images */}
          {slides.map((slide, index) => (
              <div
                  key={index}
                  className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  style={{ backgroundImage: `url(${slide.imageUrl})` }}
              />
          ))}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
              {/* Text content container */}
              <div className="relative w-full max-w-4xl h-48 flex items-center justify-center">
                   {slides.map((slide, index) => (
                      <div
                          key={index}
                          className={`absolute inset-0 w-full flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      >
                          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-4">
                              {renderHeroTitle(slide.title)}
                          </h1>
                          <p className="text-lg md:text-xl text-gray-200 font-light max-w-3xl mx-auto">
                              {slide.subtitle}
                          </p>
                      </div>
                  ))}
              </div>
              
              {/* Button */}
              <div className="mt-8">
                  <button
                      onClick={() => navigate('/cost-calculator')}
                      className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                      Plan Your Event
                  </button>
              </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
              {slides.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-brand-gold scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                      aria-label={`Go to slide ${index + 1}`}
                  />
              ))}
          </div>
      </div>

    <section className="bg-brand-dark-secondary text-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {STATS_DATA.map(stat => (
                    <div key={stat.label}>
                        <h3 className="text-4xl md:text-5xl font-bold text-brand-gold">{stat.number}</h3>
                        <p className="text-sm uppercase tracking-widest text-brand-light/70 mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
      
      {/* Who We Are Section */}
      <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-sm uppercase tracking-widest text-brand-gray mb-2">Who We Are</h2>
                    <h3 className="text-4xl font-serif text-brand-dark dark:text-brand-light mb-4">KaSha is a multi-award winning <span className="text-brand-gold">event management</span> company.</h3>
                    <p className="text-brand-gray mb-6">
                       With a passion to present all major traditions, we offer comprehensive event solutions covering ideation, design, planning, production, fabrication, logistics and flawless execution all under one roof.
                    </p>
                    <Link to="/about" className="font-bold text-brand-dark dark:text-brand-light border-b-2 border-brand-gold hover:text-brand-gold transition-colors">
                        Learn More About Us
                    </Link>
                </div>
                 <div className="relative h-96">
                    <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="KaSha Team" className="absolute top-0 left-0 w-[80%] h-[80%] object-cover rounded shadow-lg" />
                    <img src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="KaSha Event Planning" className="absolute bottom-0 right-0 w-[70%] h-[70%] object-cover rounded shadow-2xl border-4 border-white dark:border-brand-dark" />
                </div>
            </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-brand-light-secondary dark:bg-brand-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-sm uppercase tracking-widest text-brand-gray mb-2">Our Services</h2>
            <h3 className="text-4xl font-serif text-brand-dark dark:text-brand-light mb-12">We provide a full range of event services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map(service => (
              <div key={service.id} className="group bg-white dark:bg-brand-dark rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-64">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 text-center flex-grow flex flex-col">
                  <h3 className="text-2xl font-serif text-brand-dark dark:text-brand-light mb-2">{service.title}</h3>
                  <p className="text-brand-gray mb-4 flex-grow">{service.shortDescription}</p>
                   <div className="flex items-baseline justify-center gap-2 mb-6">
                      <span className="text-3xl font-bold text-brand-gold">
                          {formatCurrency(service.discountedPrice)}
                      </span>
                      <span className="text-lg text-brand-gray line-through">
                          {formatCurrency(service.originalPrice)}
                      </span>
                  </div>
                   <Link to={`/services/${service.id}`} className="font-bold text-brand-dark dark:text-brand-light border-b-2 border-brand-gold hover:text-brand-gold transition-colors mt-auto">
                        Learn More
                    </Link>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-16">
            <Link to="/services" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-yellow-500 transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

       {/* Why Choose KaSha Section */}
       <section className="py-20 bg-brand-light dark:bg-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light mb-16">Why Choose <span className="text-brand-gold">KaSha?</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {WHY_CHOOSE_US_DATA.map(item => {
                        const Icon = whyUsIconMap[item.icon];
                        return (
                            <div key={item.title} className="bg-brand-light-secondary dark:bg-brand-dark-secondary p-8 rounded-sm shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-gold/10 text-brand-gold mx-auto mb-6">
                                    {Icon && <Icon className="w-10 h-10"/>}
                                </div>
                                <h3 className="text-xl font-serif text-brand-dark dark:text-brand-light mb-3">{item.title}</h3>
                                <p className="text-brand-gray text-sm">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* Browse Events By City Section */}
        <section className="py-20 bg-brand-light-secondary dark:bg-brand-dark-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-serif text-brand-dark dark:text-brand-light mb-8 text-center">Browse Events By City</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {displayedCities.map(city => {
                        const citySlug = city.name.toLowerCase().replace(/\s+/g, '-');
                        return (
                             <Link to={`/events/${citySlug}`} key={city.name} className="group relative block h-64 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                                <img src={city.imageUrl} alt={city.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h3 className="font-bold text-xl text-white">{city.name}</h3>
                                    <p className="text-sm text-gray-200">{city.events}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                 {CITIES_DATA.length > 8 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAllCities(!showAllCities)}
                            className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-yellow-500 transition-all duration-300"
                        >
                            {showAllCities ? 'Show Less Cities' : 'View All Cities'}
                        </button>
                    </div>
                )}
            </div>
        </section>


      {/* Our Process Section */}
      <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light text-center mb-16">Our Process</h2>
            <div className="relative max-w-5xl mx-auto">
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand-gold/20"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {PROCESS_STEPS.map((step, index) => (
                        <div key={step.title} className="relative text-center p-4">
                             <div className="relative z-10 flex items-center justify-center h-24 w-24 rounded-full bg-brand-light dark:bg-brand-dark border-2 border-brand-gold/20 mx-auto mb-4">
                                <span className="text-4xl font-serif text-brand-gold">{`0${index+1}`}</span>
                            </div>
                            <h3 className="text-xl font-serif text-brand-dark dark:text-brand-light mb-2">{step.title}</h3>
                            <p className="text-brand-gray text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-brand-dark text-brand-light">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif text-center mb-12">Client <span className="text-brand-gold">Stories</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {TESTIMONIALS_DATA.map(testimonial => (
                    <div key={testimonial.id} className="bg-brand-dark-secondary p-8 rounded-sm">
                        <QuoteIcon className="text-brand-gold h-8 w-8 mb-4"/>
                        <p className="text-brand-light/80 italic mb-6">"{testimonial.quote}"</p>
                        <div className="flex items-center mb-2">
                           {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-brand-gold" />)}
                        </div>
                        <h4 className="font-bold text-brand-light tracking-wider">{testimonial.author}</h4>
                        <p className="text-sm text-brand-light/60">{testimonial.event}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="bg-brand-gold text-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h2 className="text-4xl font-serif mb-4">Ready to Create Something Extraordinary?</h2>
                <p className="max-w-2xl mx-auto mb-8">Let's bring your vision to life. Get in touch for a personalized consultation and let the magic begin.</p>
                <button 
                    onClick={() => navigate('/contact')}
                    className="bg-brand-dark text-brand-light font-bold py-3 px-8 rounded-sm hover:bg-black transition-all duration-300 transform hover:scale-105"
                >
                    Schedule Consultation
                </button>
            </div>
        </section>

    </div>
  );
};

export default Home;