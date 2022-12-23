import { Component, OnInit } from '@angular/core';
import { PlayService } from 'src/app/services/play.service';

@Component({
  selector: 'app-choice-viewer',
  templateUrl: './choice-viewer.component.html',
  styleUrls: ['./choice-viewer.component.sass']
})
export class ChoiceViewerComponent implements OnInit {
  score:number
  constructor(private gm:PlayService) { }

  ngOnInit(): void {
    this.score=this.gm.getscore()
  }


  getChoice(n:number){ 
      this.gm.setTokenS(n)
      this.gm.$playerSelected.emit(true)
      
  }
  
  

}
