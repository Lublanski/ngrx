import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState, CarState } from '../appStates';

// export const selectCarState = (state: AppState) => state.carState;

export const selectCarState = createFeatureSelector<AppState, CarState>(
  'carState'
);

export const selectCars = createSelector(
  selectCarState,
  (state: CarState) => state
);

export const selectCarList = createSelector(
  selectCarState,
  (state: CarState) => state.cars
);
