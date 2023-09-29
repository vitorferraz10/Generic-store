export interface ProductsType {
  id: string
  object: string
  active: boolean
  created: number
  price: number
  description: any
  images: string[]
  name: string
}

export type ProductShowInfoType = Omit<ProductsType, 'object' | 'created' | 'active'>

export interface Metadata {}
