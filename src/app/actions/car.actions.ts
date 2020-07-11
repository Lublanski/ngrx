import { createAction, props } from '@ngrx/store';
import { Car } from '../models/car.model';

const requestCarList = createAction('[App Component] Request Car List');

const requestCarListSuccess = createAction(
  '[App Component] Request Car List Success',
  props<{ carList: Car[] }>()
);

const requestCarListFail = createAction(
  '[App Component] Request Car List Fail',
  props< {erro: any} >()
);

export const carActions = {
  requestCars: requestCarList,
  requestCarSuccess: requestCarListSuccess,
  requestCarFail: requestCarListFail
};
