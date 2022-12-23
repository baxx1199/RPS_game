import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  $score = new EventEmitter<number>()
  constructor() { }
}
