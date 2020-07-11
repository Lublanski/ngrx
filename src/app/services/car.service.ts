import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  public url = 'http://localhost:3000/Cars';

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url);
  }
}
