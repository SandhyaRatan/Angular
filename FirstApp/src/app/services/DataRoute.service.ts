import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRouteService {

  private goals = new BehaviorSubject<string[]>(['Apple', 'Orange', 'Banana'])

  goal = this.goals.asObservable();

constructor() { }



}
