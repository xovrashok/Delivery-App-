// src/types/index.ts
export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  shopId: string;
}

export interface Shop {
  _id: string;
  name: string;
}
