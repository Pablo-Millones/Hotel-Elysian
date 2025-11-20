export interface Experience {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}