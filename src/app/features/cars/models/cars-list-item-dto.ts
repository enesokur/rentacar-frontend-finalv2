export interface CarsListItemDto {
  id: number;
  modelId: number;
  plate: string;
  state: number;
  model: Model;
}

export interface Model {
  id: number;
  brandId: number;
  name: string;
  modelYear: number;
  imageUrl: string;
  dailyPrice: number;
  brand: Brand;
}

export interface Brand {
  id: number;
  name: string;
}
