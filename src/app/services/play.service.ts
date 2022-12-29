import { EventEmitter, Injectable } from '@angular/core';
import { ITokenplayed } from '../models/tokenplayed.model';
import { ScoreService } from './score.service';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  optionsTokens:ITokenplayed[]=[{
    name:'rock',
    img: '../../../images/icon-rock.svg',
    color: 'rock_btn'
    },
    {
      name:'paper',
      img: '../../../images/icon-paper.svg',
      color: 'paper_btn'
    },
    {
      name:'scissors',
      img: '../../../images/icon-scissors.svg',
      color: 'scissors_btn'
    },
    {
      name:'unknown',
      img: '../../../images/question-solid.svg',
      color: 'unknown_btn'
    }
];

  $playerSelected = new EventEmitter<any>()
  
  playagain:boolean=false


  playedOne:number =0;
  machine:number=0;
  score:number=0
  resultWinner:string

  tokenplayer:ITokenplayed=this.optionsTokens[4]
  tokenMachine:ITokenplayed=this.optionsTokens[4]
  
  

  constructor(private sc:ScoreService) { }

  getPlayerOneToken():ITokenplayed{
      return this.parseTokenToObject( this.playedOne)
  }

  getMachineToken():ITokenplayed{
      return this.parseTokenToObject( this.machine) 
  }

  setTokenS(token:number){
      this.playedOne=token
      this.machine=Math.floor((Math.random()*3)+1);
      
      this.tokenplayer=this.parseTokenToObject(this.playedOne)
      this.tokenMachine=this.parseTokenToObject(this.machine)
 
  }

  parseTokenToObject(n:number):ITokenplayed{
    let tokenString:ITokenplayed
      if( n>0 && n<4 ){
        tokenString=this.optionsTokens[n-1]
      }else{
        tokenString=this.optionsTokens[3]
      }
    return tokenString
  }
  
  playAgainPulsed():void{
    this.playagain=true
  
  }
  resetGame():void{
      if(this.playagain==true){
          this.playedOne=0
          this.machine=0
          this.tokenMachine=this.optionsTokens[3]
          this.tokenplayer=this.optionsTokens[3]
          this.playagain=false
          this.resultWinner=""
          this.$playerSelected.emit(false)
      }
  }
  checkWin(){
      let winner:string = 'draw'
    /* 
        -----------RULES------------
        rock -> 1
        paper -> 2 
        scissors -> 3
        draw --> 0
      */

      if(this.playedOne&&this.machine !== 0){
          if (this.playedOne== this.machine) {
            console.log("Draw")
          } 

          if(this.playedOne==1 && this.machine ==2){
            console.log("machine win")
            winner='machine'
          }else if(this.playedOne==1 && this.machine ==3){
            console.log("you win")
            winner='player'
          }else if(this.playedOne==2 && this.machine ==1){
            console.log("you win")
            winner='player'
          }else if(this.playedOne==2 && this.machine ==3){
            console.log("machine win")
            winner='machine'
          }else if(this.playedOne==3 && this.machine ==1){
            console.log("machine win")
            winner='machine'
          }else if(this.playedOne==3 && this.machine ==2){
            console.log("you win")
            winner='player'
          }
      }
      
      if(winner==='player'){
        this.score++
        
      }else if(winner==='machine'&&this.score>0){
          this.score--

      }
      this.setScore()
      this.resultWinner=winner
    
  }
  getscore():number{
      return this.score
  }
  setScore(){
    this.sc.$score.emit(this.score)
  }

  resetScore(){
    this.score=0
  }

}
