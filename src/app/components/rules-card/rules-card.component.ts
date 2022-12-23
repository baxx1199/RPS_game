import { Component, OnInit } from '@angular/core';
import { RulesService } from 'src/app/services/rules.service';

@Component({
  selector: 'app-rules-card',
  templateUrl: './rules-card.component.html',
  styleUrls: ['./rules-card.component.sass']
})
export class RulesCardComponent implements OnInit {

  hideCl:boolean=false
  constructor( private switchR:RulesService ) { }

  ngOnInit(): void {
  }

  switchRules(){
      this.switchR.$modal_active.emit(false)
  }

}
