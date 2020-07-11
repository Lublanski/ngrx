import { Car } from './models/car.model';

export interface CarState {
  cars: Car[];
  error: any;
}

export interface AppState {
  carState: CarState;
}

