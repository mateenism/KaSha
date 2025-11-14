

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  showcaseImages: string[];
  originalPrice: number;
  discountedPrice: number;
}

export interface PortfolioItem {
  id: number;
  category: 'Weddings' | 'Corporate' | 'Concerts' | 'Sports' | 'Activations';
  imageUrl: string;
  title: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  event: string;
}

export interface HeroSlide {
  // Fix: Changed type from React.ReactNode to string to avoid React dependency in a .ts file.
  // The string is parsed into JSX in the Home.tsx component.
  title: string;
  subtitle: string;
  imageUrl: string;
}