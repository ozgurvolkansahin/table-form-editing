import { Observable } from 'rxjs';
import { ICar } from '../interface/car.interface';
import { IHttpResult } from '../interface/http.interface';

export abstract class CarData {
  abstract getCars(
    page: number,
    pageSize: number
  ): Observable<IHttpResult<ICar[]>>;
}
