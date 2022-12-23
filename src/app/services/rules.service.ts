import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor() { }

  $modal_active = new EventEmitter<any>()



}
