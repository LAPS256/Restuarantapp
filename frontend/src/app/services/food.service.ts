import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_Foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_Foods;
  }
}
