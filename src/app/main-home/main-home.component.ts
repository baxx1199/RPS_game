import { Component, OnInit } from '@angular/core';
import { RulesService } from '../services/rules.service';
import { PlayService } from 'src/app/services/play.service';
import { ScoreService } from '../services/score.service';


@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.sass']
})
export class MainHomeComponent implements OnInit {
  seeRules:boolean
  selectedToken:boolean=false
  score:number

  constructor(private switchR:RulesService, private gm:PlayService,private sc:ScoreService) { }

  ngOnInit(): void {
        this.switchR.$modal_active.subscribe((res)=>{
            this.seeRules=res
        })
    
        this.gm.$playerSelected.subscribe((res)=>{
          
          this.selectedToken=res
      })
      
      
  }

  rulesSee(){
      this.seeRules=true
  }
  
  
}
