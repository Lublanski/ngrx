import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, tap, mergeMap, catchError } from 'rxjs/operators';
import { CarService } from '../services/car.service';
import { carActions } from '../actions/car.actions';


@Injectable()
export class CarEffect {

  constructor(
    private carService: CarService,
    private actions$: Actions
    ) {}

  getCars$ = createEffect(() => this.actions$.pipe(
    ofType('[App Component] Request Car List'),
    mergeMap(() => this.carService.getCars().pipe(
      map((cars) => ({ type: '[App Component] Request Car List Success', carList: cars})),
      catchError((error) => of(({ type: '[App Component] Request Car List Fail', erro: error })))
    ))
  ));
}
