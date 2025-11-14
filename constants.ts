import { Service, PortfolioItem, Testimonial, HeroSlide } from './types';

export const COMPANY_INFO = {
  name: "KaSha",
  tagline: "India’s Pan-India Event, Wedding & Corporate Experience Company",
  email: "info@kasha.co.in",
  phone: "+91 9810987169, +91 9720588808",
  website: "www.kasha.co.in",
  location: "Delhi, India",
  whatsappUrl: "https://wa.me/919810987169"
};

export const DISCOUNT_OFFER = {
  title: "Exclusive Limited Time Offer!",
  percentage: "20%",
  description: "Book your event consultation this month and receive an exclusive 20% discount on our management fees. Let's create your unforgettable moment, for less.",
  ctaText: "Claim My Discount",
};

export const SERVICES_DATA: Service[] = [
  { id: 'weddings', title: 'Weddings', shortDescription: 'Creating timeless memories with bespoke wedding planning.', description: 'From grand traditional ceremonies to intimate modern celebrations, we handle every detail to make your special day perfect. Our services include venue selection, decor, catering, and complete management.', imageUrl: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', showcaseImages: ['https://images.pexels.com/photos/3280907/pexels-photo-3280907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], originalPrice: 800000, discountedPrice: 650000 },
  { id: 'destination-weddings', title: 'Destination Weddings', shortDescription: 'Exotic locations for your dream wedding.', description: 'We specialize in planning and executing flawless destination weddings across India. From the serene backwaters of Kerala to the royal palaces of Rajasthan, we find the perfect backdrop for your love story.', imageUrl: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', showcaseImages: ['https://images.pexels.com/photos/1130441/pexels-photo-1130441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], originalPrice: 1200000, discountedPrice: 950000 },
  { id: 'corporate-events', title: 'Corporate Events', shortDescription: 'Professional and impactful corporate gatherings.', description: 'We deliver meticulously planned corporate events, including conferences in major Indian tech hubs, seminars, product launches, and award ceremonies, designed to enhance your brand image.', imageUrl: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', showcaseImages: ['https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], originalPrice: 500000, discountedPrice: 425000 },
  { id: 'mice', title: 'MICE', shortDescription: 'End-to-end solutions for MICE events.', description: 'We provide comprehensive services for Meetings, Incentives, Conferences, and Exhibitions, ensuring seamless logistics, engaging content, and memorable experiences for all attendees.', imageUrl: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', showcaseImages: ['https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], originalPrice: 1500000, discountedPrice: 1200000 },
  { id: 'concerts-live-shows', title: 'Concerts & Live Shows', shortDescription: 'Spectacular concerts and live entertainment.', description: 'From artist management to stage production and ticketing, we produce high-energy concerts and live shows that captivate audiences.', imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', showcaseImages: ['https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], originalPrice: 2000000, discountedPrice: 1650000 },
  { id: 'sports-events', title: 'Sports Events', shortDescription: 'Dynamic and large-scale sports event management.', description: 'We manage all aspects of sporting events, including marathons in bustling Indian cities, cricket tournaments, and championships, ensuring a professional and exciting experience.', imageUrl: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', showcaseImages: ['https://images.pexels.com/photos/1263324/pexels-photo-1263324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], originalPrice: 1800000, discountedPrice: 1500000 },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  { id: 1, category: 'Weddings', imageUrl: 'https://images.pexels.com/photos/3779836/pexels-photo-3779836.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1', title: 'Jaipur Palace Wedding' },
  { id: 2, category: 'Corporate', imageUrl: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', title: 'Bangalore Tech Summit' },
  { id: 3, category: 'Concerts', imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', title: 'Mumbai Music Festival' },
  { id: 4, category: 'Weddings', imageUrl: 'https://images.pexels.com/photos/9482124/pexels-photo-9482124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', title: 'Kerala Backwaters Ceremony' },
  { id: 5, category: 'Activations', imageUrl: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1', title: 'Delhi Auto Expo Launch' },
  { id: 6, category: 'Sports', imageUrl: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', title: 'Mumbai Marathon' },
  { id: 7, category: 'Corporate', imageUrl: 'https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1', title: 'Annual Gala Dinner' },
  { id: 8, category: 'Weddings', imageUrl: 'https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', title: 'Udaipur Grandeur' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: 1, quote: "KaSha transformed our dream wedding into a reality. The attention to detail was impeccable, and their team handled everything with such grace and professionalism.", author: "Aisha & Vikram Singh", event: "Destination Wedding in Udaipur" },
  { id: 2, quote: "Our annual corporate conference was the best one yet, thanks to KaSha. The execution was seamless, and they brought our brand's vision to life perfectly.", author: "Rohan Mehta, CEO, TechSolutions", event: "Corporate Conference" },
  { id: 3, quote: "An unforgettable experience! The concert was a massive success, and the production quality was world-class. We look forward to our next collaboration with the KaSha team.", author: "Sunidhi Chauhan's Management", event: "Live Concert in Mumbai" },
];

export const STATS_DATA = [
    { number: '1000+', label: 'Events Created' },
    { number: '500+', label: 'Happy Clients' },
    { number: '15+', label: 'Years of Experience' },
    { number: '25+', label: 'Cities Served' },
];

export const PROCESS_STEPS = [
    { title: 'Consultation', description: 'We start by listening, understanding your vision, goals, and budget to create a solid foundation.' },
    { title: 'Planning', description: 'Our experts craft a detailed plan, covering logistics, vendor management, and creative design.' },
    { title: 'Production', description: 'We bring the vision to life with meticulous attention to detail, from fabrication to technical setup.' },
    { title: 'Execution', description: 'Our on-ground team ensures a flawless event, allowing you to relax and enjoy the moment.' },
];

export const WHY_CHOOSE_US_DATA = [
    { title: 'Pan-India Presence', description: 'Seamless event execution anywhere in the nation, thanks to our extensive network.', icon: 'PanIndia' },
    { title: 'End-to-End Solutions', description: 'From the initial idea to the final execution, we handle every detail under one roof.', icon: 'Solutions' },
    { title: 'Creative Excellence', description: 'Our team of designers and planners are dedicated to pushing creative boundaries.', icon: 'Quality' },
    { title: 'Vendor Network', description: 'Access to a curated network of the best vendors and artists across the country.', icon: 'Users' }
];

export const COMMITMENT_DATA = [
    { title: 'Client-Centric Approach', description: 'Your vision is our top priority. We collaborate closely to bring your dream event to life.', icon: 'Client' },
    { title: 'Unwavering Quality', description: 'We are committed to the highest standards of quality and service in every single detail.', icon: 'CheckCircle' },
    { title: 'Budget Transparency', description: 'Clear and honest pricing with no hidden costs, ensuring you have full control.', icon: 'Briefcase' },
    { title: 'Timely Execution', description: 'Punctuality and precision are the hallmarks of our execution process, ensuring a stress-free experience.', icon: 'Target' }
];

export const CITIES_DATA = [
    { name: 'Delhi', events: '15.2k Events', imageUrl: 'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Mumbai', events: '18.8k Events', imageUrl: 'https://images.pexels.com/photos/1007837/pexels-photo-1007837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Bengaluru', events: '12.5k Events', imageUrl: 'https://images.pexels.com/photos/19639599/pexels-photo-19639599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Chennai', events: '9.3k Events', imageUrl: 'https://images.pexels.com/photos/12842273/pexels-photo-12842273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Kolkata', events: '8.1k Events', imageUrl: 'https://images.pexels.com/photos/10636691/pexels-photo-10636691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Hyderabad', events: '7.9k Events', imageUrl: 'https://images.pexels.com/photos/4014949/pexels-photo-4014949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Jaipur', events: '6.5k Events', imageUrl: 'https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Agra', events: '4.2k Events', imageUrl: 'https://images.pexels.com/photos/1570274/pexels-photo-1570274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Pune', events: '7.5k Events', imageUrl: 'https://images.pexels.com/photos/15913217/pexels-photo-15913217/free-photo-of-shaniwar-wada-pune.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Ahmedabad', events: '6.8k Events', imageUrl: 'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Goa', events: '9.1k Events', imageUrl: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Lucknow', events: '5.3k Events', imageUrl: 'https://images.pexels.com/photos/15787532/pexels-photo-15787532/free-photo-of-rumi-darwaza-lucknow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];


export const TEAM_DATA = [
    { id: 1, name: 'Karan Mehra', role: 'Founder & CEO', imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1', bio: 'With over 15 years in the industry, Karan is the visionary behind KaSha, dedicated to creating unparalleled event experiences.' },
    { id: 2, name: 'Shalini Verma', role: 'Creative Director', imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1', bio: 'Shalini is the artistic force, transforming concepts into breathtaking realities with her innovative design sensibilities.' },
    { id: 3, name: 'Rajiv Singh', role: 'Head of Operations', imageUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1', bio: 'Rajiv ensures flawless execution, managing logistics and on-ground teams with military precision and a calm demeanor.' },
    { id: 4, name: 'Priya Desai', role: 'Lead Wedding Planner', imageUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1', bio: 'Priya specializes in creating magical weddings, personally overseeing every detail to make dream days come true.' },
    { id: 5, name: 'Amit Tandon', role: 'Corporate Events Specialist', imageUrl: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1', bio: 'Amit excels in the corporate world, delivering impactful and professional events that align with brand goals.' },
    { id: 6, name: 'Neha Kapoor', role: 'Client Relations Manager', imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1', bio: 'Neha is the friendly face of KaSha, dedicated to building strong client relationships and ensuring complete satisfaction.' },
];

export const CALCULATOR_SERVICES = [
  { id: 'venue', name: 'Venue & Decoration', cost: 150000 },
  { id: 'catering', name: 'Catering Services', cost: 80000 },
  { id: 'photo', name: 'Photography & Videography', cost: 100000 },
  { id: 'entertainment', name: 'Entertainment & DJ', cost: 75000 },
  { id: 'logistics', name: 'Logistics & Transport', cost: 50000 },
  { id: 'styling', name: 'Makeup & Styling', cost: 40000 },
  { id: 'production', name: 'Stage & Production', cost: 120000 },
  { id: 'sound', name: 'Lighting & Sound', cost: 80000 },
  { id: 'gifting', name: 'Corporate Gifting', cost: 30000 },
];

export const WHY_JOIN_US_CAREERS = [
    { title: 'Career Growth', description: 'Fast-track career progression', icon: 'Briefcase' },
    { title: 'Recognition', description: 'Performance-based rewards', icon: 'Award' },
    { title: 'Great Team', description: 'Collaborative work culture', icon: 'Users' },
    { title: 'Work-Life Balance', description: 'Flexible schedules', icon: 'Heart' },
];

export const JOB_OPENINGS_DATA = [
    { 
        title: 'Event Manager', 
        category: 'Operations',
        description: 'Lead end-to-end event planning and execution for corporate and wedding events.',
        location: 'Delhi/Mumbai', 
        experience: '3-5 years',
        type: 'Full-time' 
    },
    { 
        title: 'Creative Designer', 
        category: 'Design',
        description: 'Create innovative event themes, décor concepts, and visual presentations.',
        location: 'Delhi', 
        experience: '2-4 years',
        type: 'Full-time' 
    },
    { 
        title: 'Operations Coordinator', 
        category: 'Operations',
        description: 'Coordinate logistics, vendors, and on-ground event execution.',
        location: 'Bangalore', 
        experience: '1-3 years',
        type: 'Full-time' 
    },
    { 
        title: 'Sales Executive', 
        category: 'Sales',
        description: 'Drive business development and client acquisition for event services.',
        location: 'Pan-India', 
        experience: '2-5 years',
        type: 'Full-time' 
    },
    { 
        title: 'Social Media Manager', 
        category: 'Marketing',
        description: 'Manage social media presence and digital marketing campaigns.',
        location: 'Delhi', 
        experience: '2-3 years',
        type: 'Full-time' 
    },
    { 
        title: 'Production Manager', 
        category: 'Production',
        description: 'Oversee technical production, stage setup, and audio-visual management.',
        location: 'Mumbai', 
        experience: '4-6 years',
        type: 'Full-time' 
    },
];

// Fix: Replaced JSX in `title` properties with string literals using a `|` delimiter.
// This prevents TypeScript parsing errors in a .ts file. The Home.tsx component
// will parse this string to render the styled title.
export const HERO_SLIDES_DATA: HeroSlide[] = [
  {
    title: "Creating |Unforgettable| Weddings",
    subtitle: "Bespoke wedding planning for timeless memories.",
    imageUrl: "https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Impactful |Corporate| Events",
    subtitle: "Professional and seamless corporate event management across India.",
    imageUrl: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Spectacular |Concerts| & Shows",
    subtitle: "Producing high-energy live entertainment that captivates audiences.",
    imageUrl: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Dreamy |Destination| Weddings",
    subtitle: "From royal palaces to serene backwaters, we find the perfect backdrop for your love story.",
    imageUrl: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Dynamic |Sports| Events",
    subtitle: "Managing large-scale sports events with precision and excitement.",
    imageUrl: "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];