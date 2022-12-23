import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayService } from 'src/app/services/play.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.sass']
})
export class ScoreboardComponent implements OnInit {
  @Input() scoren:number=0
  constructor( ) { 
    
  }

  

  ngOnInit(): void {
    
    
  }

}
