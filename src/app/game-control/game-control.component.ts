import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output()incrementvalue = new EventEmitter<number>();
numfclicks = 0;
numvalue;
  constructor(private dataservice:DataserviceService) { }

  ngOnInit(): void {
  }

Increment(){
  // this.numvalue = setInterval(() => {
  //   this.incrementvalue.emit(this.numfclicks + 1);
  //   this.numfclicks++;
  // } ,1000)
  // this.incrementvalue.emit(this.numfclicks++);
  let increment = this.numfclicks++
  // this.dataservice.data = increment;
  this.incrementvalue.emit(increment);
  this.dataservice.updateData(increment);
}

onclickincrement(){
  this.numvalue = setInterval(() => {
    this.incrementvalue.emit(this.numfclicks + 1);
    this.numfclicks++;
  },1000)
}
onPauseGame(){
clearInterval(this.numvalue);
}
}
