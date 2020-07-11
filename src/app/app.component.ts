import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, CarState } from './appStates';
import { Car } from './models/car.model';
import { Observable } from 'rxjs';
import { selectCars, selectCarList } from './selectors/car.selector';
import { carActions } from './actions/car.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  carState$: Observable<CarState>;
  cars$: Observable<Car[]>;
  public verification = false;

  ngOnInit(): void {
    this.carState$ = this.store.pipe(select(selectCars));
    this.cars$ = this.store.pipe(select(selectCarList));

    this.carState$.subscribe((data) => {
      console.log(data);
    });
  }

  getCars(): void {
    if (this.verification) {
      return;
    } else {
      this.store.dispatch(carActions.requestCars());
      this.verification = true;
    }
  }
}
