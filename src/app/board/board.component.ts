import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {


  numbers = Array(12).fill(0).map((x,i)=>i);
  numbers2 = Array(12).fill(0).map((x,i)=>i);
  dice_numbers : number = 0
  red_token = [[10,1,0],[8,3,1],[8,1,2],[10,3,3]];
  red_token_start = [[10,1],[8,3],[8,1],[10,3]];
  red_token_status = [true,true,true,true]
  red_completed = [false,false,false,false]
  red_count = 0

  blue_token = [[1,1,0],[1,3,1],[3,1,2],[3,3,3]]
  blue_token_status = [true,true,true,true]
  blue_token_start = [[1,1],[1,3],[3,1],[3,3]]
  blue_completed = [false,false,false,false]
  blue_count = 0

  green_token = [[1,10,0],[3,10,1],[1,8,2],[3,8,3]]
  green_token_status = [true,true,true,true]
  green_token_start = [[1,10],[3,10],[1,8],[3,8]]
  green_completed = [false,false,false,false]
  green_count = 0

  yellow_token = [[10,10,0],[10,8,1],[8,10,2],[8,8,3]]
  yellow_token_status = [true,true,true,true]
  yellow_token_start = [[10,10],[10,8],[8,10],[8,8]]
  yellow_completed = [false,false,false,false]
  yellow_count = 0

  turn_order = [[11,5],[5,0],[0,6],[6,11]]

  flag = 0
  diceRoll = false
  num = 0
  playing_token =   this.red_token
  playing_token_status = this.red_token_status

  rollDice(){
    this.dice_numbers = Math.floor(Math.random()*(7 - 1) + 1);
    //this.dice_numbers = 6
    if(this.num == 0){
      this.playing_token = this.red_token
      if(this.dice_numbers == 6){
        this.flag = 4
        if(this.red_token[0][1] == 6 && this.red_token[0][0] > 6 && !(this.red_completed[0])){
          this.flag -= 1
        }
        else{
          this.red_token_status[0] = false
        }
        if(this.red_token[1][1] == 6 && this.red_token[1][0] > 6 && !(this.red_completed[1])){
          this.flag -= 1
        }
        else{
          this.red_token_status[1] = false
        }
        if(this.red_token[2][1] == 6 && this.red_token[2][0] > 6 && !(this.red_completed[2])){
          this.flag -= 1
        }
        else{
          this.red_token_status[2] = false
        }
        if(this.red_token[3][1] == 6 && this.red_token[3][0] > 6 && !(this.red_completed[3])){
          this.flag -= 1
        }
        else{
          this.red_token_status[3] = false
        }
        if(this.flag != 0 ){
          this.flag = 6
        }
      }
      else{
        if( !(this.red_completed[0])){
          if(!(this.red_token[0][0] == this.red_token_start[0][0] && this.red_token[0][1] == this.red_token_start[0][1])){
            if(!(this.red_token[0][1] == 6  && this.red_token[0][0] + this.dice_numbers>12 )){
              console.log((this.red_token[0][0] == this.red_token_start[0][0] && this.red_token[0][1] == this.red_token_start[0][0]))
              this.red_token_status[0] = false;
              this.flag = 1;
            }
          }
        }
        if( !(this.red_completed[1])){
          if(!(this.red_token[1][0] == this.red_token_start[1][0] && this.red_token[1][1] == this.red_token_start[1][1])){
          if(!(this.red_token[1][1] == 6  && this.red_token[1][0] + this.dice_numbers>12)){
            this.red_token_status[1] = false;
            this.flag = 1;
          }
          }
        }
        if( !(this.red_completed[2])){
          if(!(this.red_token[2][0] == this.red_token_start[2][0] && this.red_token[2][1] == this.red_token_start[2][1])){
          if(!(this.red_token[2][1] == 6  && this.red_token[2][0] + this.dice_numbers>12)){
            this.red_token_status[2] = false;
            this.flag = 1;
          }
          }
        }
        if( !(this.red_completed[3])){
          if(!(this.red_token[3][0] == this.red_token_start[3][0] && this.red_token[3][1] == this.red_token_start[3][1])){
          if(!(this.red_token[3][1] == 6  && this.red_token[3][0] + this.dice_numbers>12)){
            this.red_token_status[3] = false;
            this.flag = 1;
          }
          }
        }
      }
    }
    if(this.num == 1){
      this.playing_token = this.blue_token
      if(this.dice_numbers == 6){
        this.flag = 4
        if(this.blue_token[0][0] == 6 && this.blue_token[0][1] < 5 && !(this.blue_completed[0])){
          this.flag -= 1
        }
        else{
          this.blue_token_status[0] = false
        }
        if(this.blue_token[1][0] == 6 && this.blue_token[1][1] < 5 && !(this.blue_completed[1])){
          this.flag -= 1
        }
        else{
          this.blue_token_status[1] = false
        }
        if(this.blue_token[2][0] == 6 && this.blue_token[2][1] < 5 && !(this.blue_completed[2])){
          this.flag -= 1
        }
        else{
          this.blue_token_status[2] = false
        }
        if(this.blue_token[3][0] == 6 && this.blue_token[3][1] < 5 && !(this.blue_completed[3])){
          this.flag -= 1
        }
        else{
          this.blue_token_status[3] = false
        }
        if(this.flag != 0 ){
          this.flag = 6
        }
      }
      else{
        if(!(this.blue_completed[0])){
          if(!(this.blue_token[0][0] == this.blue_token_start[0][0] && this.blue_token[0][1] == this.blue_token_start[0][1])){
            if(!(this.blue_token[0][0] == 6  && this.blue_token[0][1] - this.dice_numbers < -1)){
              console.log((this.blue_token[0][0] == this.blue_token_start[0][0] && this.blue_token[0][1] == this.blue_token_start[0][0]))
              this.blue_token_status[0] = false;
              this.flag = 1;
            }
          }
        }
        if(!(this.blue_completed[1])){
          if(!(this.blue_token[1][0] == this.blue_token_start[1][0] && this.blue_token[1][1] == this.blue_token_start[1][1])){
          if(!(this.blue_token[1][0] == 6  && this.blue_token[1][1] - this.dice_numbers < -1)){
            this.blue_token_status[1] = false;
            this.flag = 1;
          }
          }
        }
        if(!(this.blue_completed[2])){
          if(!(this.blue_token[2][0] == this.blue_token_start[2][0] && this.blue_token[2][1] == this.blue_token_start[2][1])){
          if(!(this.blue_token[2][0] == 6  && this.blue_token[2][1] - this.dice_numbers < -1)){
            this.blue_token_status[2] = false;
            this.flag = 1;
          }
          }
        }
        if(!(this.blue_completed[0])){
          if(!(this.blue_token[3][0] == this.blue_token_start[3][0] && this.blue_token[3][1] == this.blue_token_start[3][1])){
            if(!(this.blue_token[3][0] == 6  && this.blue_token[3][1] - this.dice_numbers < -1)){
              this.blue_token_status[3] = false;
              this.flag = 1;
            }
          }
        }
      }
    }
    if(this.num == 2){
      this.playing_token = this.green_token
      if(this.dice_numbers == 6){
        this.flag = 4
        if(this.green_token[0][1] == 5 && this.green_token[0][0] < 5 && !(this.green_completed[0])){
          this.flag -= 1
        }
        else{
          this.green_token_status[0] = false
        }
        if(this.green_token[1][1] == 5 && this.green_token[1][0] < 5 && !(this.green_completed[1])){
          this.flag -= 1
        }
        else{
          this.green_token_status[1] = false
        }
        if(this.green_token[2][1] == 5 && this.green_token[2][0] < 5 && !(this.green_completed[2])){
          this.flag -= 1
        }
        else{
          this.green_token_status[2] = false
        }
        if(this.green_token[3][1] == 5 && this.green_token[3][0] < 5 && !(this.green_completed[3])){
          this.flag -= 1
        }
        else{
          this.green_token_status[3] = false
        }
        if(this.flag != 0 ){
          this.flag = 6
        }
      }
      else{
        if( !(this.green_completed[0])){
          if(!(this.green_token[0][0] == this.green_token_start[0][0] && this.green_token[0][1] == this.green_token_start[0][1])){
            if(!(this.green_token[0][1] == 5  && this.green_token[0][0] - this.dice_numbers < -1)){
              console.log((this.green_token[0][0] == this.green_token_start[0][0] && this.green_token[0][1] == this.green_token_start[0][0]))
              this.green_token_status[0] = false;
              this.flag = 1;
            }
          }
        }
        if( !(this.green_completed[1])){
          if(!(this.green_token[1][0] == this.green_token_start[1][0] && this.green_token[1][1] == this.green_token_start[1][1])){
          if(!(this.green_token[1][1] == 5  && this.green_token[1][0] - this.dice_numbers < -1)){
            this.green_token_status[1] = false;
            this.flag = 1;
          }
          }
        }
        if( !(this.green_completed[2])){
          if(!(this.green_token[2][0] == this.green_token_start[2][0] && this.green_token[2][1] == this.green_token_start[2][1])){
          if(!(this.green_token[2][1] == 5  && this.green_token[2][0] - this.dice_numbers < -1)){
            this.green_token_status[2] = false;
            this.flag = 1;
          }
          }
        }
        if( !(this.green_completed[3])){
          if(!(this.green_token[3][0] == this.green_token_start[3][0] && this.green_token[3][1] == this.green_token_start[3][1])){
          if(!(this.green_token[3][1] == 5  && this.green_token[3][0] - this.dice_numbers < -1)){
            this.green_token_status[3] = false;
            this.flag = 1;
          }
          }
        }
      }
    }
    if(this.num == 3){
      this.playing_token = this.yellow_token
      if(this.dice_numbers == 6){
        this.flag = 4
        if(this.yellow_token[0][0] == 5 && this.yellow_token[0][1] > 6 && !(this.yellow_completed[0])){
          this.flag -= 1
        }
        else{
          this.yellow_token_status[0] = false
        }
        if(this.yellow_token[1][0] == 5 && this.yellow_token[1][1] > 6 && !(this.yellow_completed[1])){
          this.flag -= 1
        }
        else{
          this.yellow_token_status[1] = false
        }
        if(this.yellow_token[2][0] == 5 && this.yellow_token[2][1] > 6 && !(this.yellow_completed[2])){
          this.flag -= 1
        }
        else{
          this.yellow_token_status[2] = false
        }
        if(this.yellow_token[3][0] == 5 && this.yellow_token[3][1] > 6 && !(this.yellow_completed[3])){
          this.flag -= 1
        }
        else{
          this.yellow_token_status[3] = false
        }
        if(this.flag != 0 ){
          this.flag = 6
        }
      }
      else{
        if(!(this.yellow_completed[0])){
          if(!(this.yellow_token[0][0] == this.yellow_token_start[0][0] && this.yellow_token[0][1] == this.yellow_token_start[0][1])){
            if(!(this.yellow_token[0][0] == 5  && this.yellow_token[0][1] + this.dice_numbers>12)){
              console.log((this.yellow_token[0][0] == this.yellow_token_start[0][0] && this.yellow_token[0][1] == this.yellow_token_start[0][0]))
              this.yellow_token_status[0] = false;
              this.flag = 1;
            }
          }
        }
        if(!(this.yellow_completed[1])){
          if(!(this.yellow_token[1][0] == this.yellow_token_start[1][0] && this.yellow_token[1][1] == this.yellow_token_start[1][1])){
          if(!(this.yellow_token[1][0] == 5  && this.yellow_token[1][1] + this.dice_numbers>12)){
            this.yellow_token_status[1] = false;
            this.flag = 1;
          }
          }
        }
        if(!(this.yellow_completed[2])){
          if(!(this.yellow_token[2][0] == this.yellow_token_start[2][0] && this.yellow_token[2][1] == this.yellow_token_start[2][1])){
          if(!(this.yellow_token[2][0] == 5  && this.yellow_token[2][1] + this.dice_numbers>12)){
            this.yellow_token_status[2] = false;
            this.flag = 1;
          }
          }
        }
        if(!(this.yellow_completed[3])){
          if(!(this.yellow_token[3][0] == this.yellow_token_start[3][0] && this.yellow_token[3][1] == this.yellow_token_start[3][1])){
          if(!(this.yellow_token[3][0] == 5  && this.yellow_token[3][1] + this.dice_numbers>12)){
            this.yellow_token_status[3] = false;
            this.flag = 1;
          }
          }
        }
      }
    }
    if(this.flag == 0){
      this.num = (this.num + 1)%4;
    }
    else{
      this.diceRoll = true
    }
  }

  tokenPlay(id : number){
    this.isWinning(id)
    if(!(this.playing_token[id][0] > 4 && this.playing_token[id][0] <7 ) &&!(this.playing_token[id][1] > 4 && this.playing_token[id][1] <7 ) && this.dice_numbers == 6){
      this.playing_token[id][0] = this.turn_order[this.num][0]
      this.playing_token[id][1] = this.turn_order[this.num][1]
      this.dice_numbers = 0
    }
    else{
      console.log(this.dice_numbers)
      while(this.dice_numbers){
        if(this.playing_token[id][1] ==5 ){
          if(this.playing_token[id][0] ==7){
            this.playing_token[id][1] = 4;
            this.playing_token[id][0] =6
          }
          else{
            if(this.playing_token[id][0] == 0){
              this.playing_token[id][1] = 6
            }
            else{
              this.playing_token[id][0] -= 1
            }
          }

        }
        else{
          if(this.playing_token[id][1] ==6 ){
            if(this.playing_token[id][0] ==4){
              this.playing_token[id][1] = 7;
              this.playing_token[id][0] = 5 ;
            }
            else{
              if(this.playing_token[id][0] == 11){
                this.playing_token[id][1] = 5
              }
              else{
                this.playing_token[id][0] += 1
              }
            }

          }
          else{
            if(this.playing_token[id][0] ==5 ){
              if(this.playing_token[id][1] ==4){
                this.playing_token[id][0] = 4;
                this.playing_token[id][1] =5;
              }
              else{
                if(this.playing_token[id][1] == 11){
                  this.playing_token[id][0] = 6
                }
                else{
                  this.playing_token[id][1] += 1
                }
              }

            }
            else{
              if(this.playing_token[id][0] ==6 ){
                if(this.playing_token[id][1] ==7){
                  this.playing_token[id][0] = 7;
                  this.playing_token[id][1] = 6 ;
                }
                else{
                  if(this.playing_token[id][1] == 0){
                    this.playing_token[id][0] = 5
                  }
                  else{
                    this.playing_token[id][1] -= 1
                  }
                }

              }
            }
          }
        }
        this.dice_numbers = this.dice_numbers - 1
        delay(10000);
      }
    }
    if(this.flag!= 6){
      this.num = (this.num+1)%4;
    }
    this.overLappingToken(id)
    this.red_token_status = [true,true,true,true]
    this.blue_token_status = [true,true,true,true]
    this.yellow_token_status = [true,true,true,true]
    this.green_token_status = [true,true,true,true]
    this.diceRoll = false
    this.flag = 0
    if(this.red_count == 4){
      alert('red wins')
      window.location.reload()
    }
    if(this.blue_count == 4){
      alert('blue wins')
      window.location.reload()
    }
    if(this.green_count == 4){
      alert('green wins')
      window.location.reload()
    }
    if(this.yellow_count == 4){
      alert('yellow wins')
      window.location.reload()
    }
  }

  overLappingToken(id : number){
    if(this.playing_token != this.red_token){
      if(this.playing_token[id][0] == this.red_token[0][0] && this.playing_token[id][1] == this.red_token[0][1]){
        this.red_token[0][0] = this.red_token_start[0][0]
        this.red_token[0][1] = this.red_token_start[0][1]
      }
      if(this.playing_token[id][0] == this.red_token[1][0] && this.playing_token[id][1] == this.red_token[1][1]){
        this.red_token[1][0] = this.red_token_start[1][0]
        this.red_token[1][1] = this.red_token_start[1][1]
      }
      if(this.playing_token[id][0] == this.red_token[2][0] && this.playing_token[id][1] == this.red_token[2][1]){
        this.red_token[2][0] = this.red_token_start[2][0]
        this.red_token[2][1] = this.red_token_start[2][1]
      }
      if(this.playing_token[id][0] == this.red_token[3][0] && this.playing_token[id][1] == this.red_token[3][1]){
        this.red_token[3][0] = this.red_token_start[3][0]
        this.red_token[3][1] = this.red_token_start[3][1]
      }
    }
    if(this.playing_token != this.blue_token){
      if(this.playing_token[id][0] == this.blue_token[0][0] && this.playing_token[id][1] == this.blue_token[0][1]){
        this.blue_token[0][0] = this.blue_token_start[0][0]
        this.blue_token[0][1] = this.blue_token_start[0][1]
      }
      if(this.playing_token[id][0] == this.blue_token[1][0] && this.playing_token[id][1] == this.blue_token[1][1]){
        this.blue_token[1][0] = this.blue_token_start[1][0]
        this.blue_token[1][1] = this.blue_token_start[1][1]
      }
      if(this.playing_token[id][0] == this.blue_token[2][0] && this.playing_token[id][1] == this.blue_token[2][1]){
        this.blue_token[2][0] = this.blue_token_start[2][0]
        this.blue_token[2][1] = this.blue_token_start[2][1]
      }
      if(this.playing_token[id][0] == this.blue_token[3][0] && this.playing_token[id][1] == this.blue_token[3][1]){
        this.blue_token[3][0] = this.blue_token_start[3][0]
        this.blue_token[3][1] = this.blue_token_start[3][1]
      }
    }
    if(this.playing_token != this.green_token){
      if(this.playing_token[id][0] == this.green_token[0][0] && this.playing_token[id][1] == this.green_token[0][1]){
        this.green_token[0][0] = this.green_token_start[0][0]
        this.green_token[0][1] = this.green_token_start[0][1]
      }
      if(this.playing_token[id][0] == this.green_token[1][0] && this.playing_token[id][1] == this.green_token[1][1]){
        this.green_token[1][0] = this.green_token_start[1][0]
        this.green_token[1][1] = this.green_token_start[1][1]
      }
      if(this.playing_token[id][0] == this.green_token[2][0] && this.playing_token[id][1] == this.green_token[2][1]){
        this.green_token[2][0] = this.green_token_start[2][0]
        this.green_token[2][1] = this.green_token_start[2][1]
      }
      if(this.playing_token[id][0] == this.green_token[3][0] && this.playing_token[id][1] == this.green_token[3][1]){
        this.green_token[3][0] = this.green_token_start[3][0]
        this.green_token[3][1] = this.green_token_start[3][1]
      }
    }
    if(this.playing_token != this.yellow_token){
      if(this.playing_token[id][0] == this.yellow_token[0][0] && this.playing_token[id][1] == this.yellow_token[0][1]){
        this.yellow_token[0][0] = this.yellow_token_start[0][0]
        this.yellow_token[0][1] = this.yellow_token_start[0][1]
      }
      if(this.playing_token[id][0] == this.yellow_token[1][0] && this.playing_token[id][1] == this.yellow_token[1][1]){
        this.yellow_token[1][0] = this.yellow_token_start[1][0]
        this.yellow_token[1][1] = this.yellow_token_start[1][1]
      }
      if(this.playing_token[id][0] == this.yellow_token[2][0] && this.playing_token[id][1] == this.yellow_token[2][1]){
        this.yellow_token[2][0] = this.yellow_token_start[2][0]
        this.yellow_token[2][1] = this.yellow_token_start[2][1]
      }
      if(this.playing_token[id][0] == this.yellow_token[3][0] && this.playing_token[id][1] == this.yellow_token[3][1]){
        this.yellow_token[3][0] = this.yellow_token_start[3][0]
        this.yellow_token[3][1] = this.yellow_token_start[3][1]
      }
    }
  }


  isWinning(id : number){
    if(this.playing_token == this.red_token)
    {
      if((this.red_token[id][0] + this.dice_numbers) == 12){
        if( this.red_token[id][1] == 6){
          this.red_token[id] = [-1,-1,-1]
          this.red_completed[id] =true
          this.red_count += 1
        }
      }
    }
    if(this.playing_token == this.blue_token)
    {
      if((this.blue_token[id][1] - this.dice_numbers) == -1 ){
        if(this.blue_token[id][0] == 6){
          this.blue_completed[id] =true
          this.blue_count += 1
          this.blue_token[id] = [-1,-1,-1]
        }
      }
    }
    if(this.playing_token == this.green_token)
    {
      if((this.green_token[id][0] - this.dice_numbers) == -1){
        if( this.green_token[id][1] == 5){
          this.green_completed[id] =true
          this.green_count += 1
          this.green_token[id] = [-1,-1,-1]
        }
      }
    }
    if(this.playing_token == this.yellow_token)
    {
      if((this.yellow_token[id][1] + this.dice_numbers) == 12  ){
        if(this.yellow_token[id][0] == 5)
        this.yellow_completed[id] =true
        this.yellow_count += 1
        this.yellow_token[id] = [-1,-1,-1]
      }
    }
  }

}
