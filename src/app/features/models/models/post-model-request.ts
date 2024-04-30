export interface PostModelRequest {
  brandId: number;
  name: string;
  imageUrl: string;
  modelYear: number;
  dailyPrice: number;
  brand: Brand;
}

export interface Brand {
  id: number;
  name: string;
}
