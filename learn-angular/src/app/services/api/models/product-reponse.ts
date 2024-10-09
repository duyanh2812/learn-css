import { RatingResponse } from './rating-response';

export interface ProductResponse {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  image?: string;
  price?: number;
  rating?: RatingResponse;
}
