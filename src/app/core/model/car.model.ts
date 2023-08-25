import { ICar } from '../interface/car.interface';

export class Car implements ICar {
  // implement the interface
  id: number;
  carid: string;
  instock: boolean;
  horsepower: number;
  price: number;
  currency: string;
  color: string;
  // add a constructor
  constructor(
    id: number,
    carid: string,
    instock: boolean,
    horsepower: number,
    price: number,
    currency: string,
    color: string
  ) {
    this.id = id;
    this.carid = carid;
    this.instock = instock;
    this.horsepower = horsepower;
    this.price = price;
    this.currency = currency;
    this.color = color;
  }
}
