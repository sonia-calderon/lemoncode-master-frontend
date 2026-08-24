export interface Review {
  id: string;
  author: string;
  date: string;
  comment: string;
  rating: number;
}

export interface House {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  price: number;
  image: string;
  amenities: string[];
  reviews: Review[];
  isBooked: boolean;
}

export const createEmptyHouse = (): House => ({
  id: '',
  name: '',
  description: '',
  address: '',
  city: '',
  country: '',
  bedrooms: 0,
  beds: 0,
  bathrooms: 0,
  price: 0,
  image: '',
  amenities: ['', ''],
  reviews: [{ id: '', author: '', date: '', comment: '', rating: 0 }],
  isBooked: false,
});
