import { Observable } from 'rxjs';

export abstract class SharedHttpData {
  abstract get<T>(url: string): Observable<T>;
}
