import { createReducer, on, Action } from '@ngrx/store';
import { carActions } from '../actions/car.actions';
import { CarState } from '../appStates';

export const initialState: CarState = {
  cars: [],
  error: ''
};

const reducer = createReducer(
  initialState,
  on(carActions.requestCars, state => state),
  on(carActions.requestCarSuccess, (state, { carList }) => ({
    cars: carList,
    error: state.error
  })),
  on(carActions.requestCarFail, (state, { erro }) => ({
    cars: state.cars,
    error: erro
  }))
);

export function carReducer(state: CarState | undefined, action: Action): CarState {
  return reducer(state, action);
}
