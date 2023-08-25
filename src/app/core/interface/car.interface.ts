export interface ICar {
  id: number | string;
  carid: number | string;
  instock: boolean;
  horsepower: number;
  price: number;
  currency?: string;
  color: string;
}
