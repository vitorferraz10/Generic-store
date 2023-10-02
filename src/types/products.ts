export interface ProductsType {
  id: string
  object: string
  active: boolean
  created: number
  price: number
  currency?: string
  description: any
  images: string[]
  name: string
}

export type ProductCartType = {
  name: string;
  description: string;
  id: string;
  price: number;
  images: string[];
  quantity: number;
  value: number;
  price_data: Record<string, unknown>;
  product_data: Record<string, unknown>;
  formattedValue: string;
  formattedPrice: string;
};




export type ProductShowInfoType = Omit<ProductsType, 'object' | 'created' | 'active'>

export interface CardProductsTypes extends ProductShowInfoType {
  size: 'small' | 'default'
}


export interface Metadata {}
