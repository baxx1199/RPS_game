import { Component, Input, OnInit } from '@angular/core';
import { ITokenplayed } from 'src/app/models/tokenplayed.model';
import { PlayService } from 'src/app/services/play.service';


@Component({
  selector: 'app-result-viewer',
  templateUrl: './result-viewer.component.html',
  styleUrls: ['./result-viewer.component.sass']
})
export class ResultViewerComponent implements OnInit {
  stringwinner:string=""
  score:number
  tokens:ITokenplayed[]
  tokePlayer:ITokenplayed
  tokenMachine:ITokenplayed

  constructor(private ps:PlayService) {
    this.tokens=ps.optionsTokens
    this.tokePlayer=this.ps.getPlayerOneToken()
    
    this.animationOfChoice()

    
   }

  
 

  ngOnInit(): void {
    

  }

  resetGame(){
    this.ps.playAgainPulsed()
    this.ps.resetGame()
    
  }
  
   animationOfChoice(){
    
    this.tokenMachine=this.tokens[3]
      const interval= setInterval(()=>{
          this.tokenMachine=this.tokens[Math.floor((Math.random()*(3-0))+0)]
          console.log(1+this.tokenMachine.color)
          console.log(this.tokenMachine.name)
          
      },75)
      setTimeout(()=>{
        clearInterval(interval)
        this.tokenMachine=this.ps.getMachineToken()
        
        this.ps.checkWin()
        this.verificationOfWin()
      },1000)
      
   
  }
  verificationOfWin(){
    if(this.ps.resultWinner=='draw'){
      this.stringwinner=this.ps.resultWinner
    }else{
      this.stringwinner=this.ps.resultWinner+" win"
    }
    this.score=this.ps.getscore()
  }
}
