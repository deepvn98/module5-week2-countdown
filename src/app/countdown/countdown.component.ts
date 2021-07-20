import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input()
  time:number;

  startTime:any;

  @Output()
  statusTime = new EventEmitter<boolean>();

  get timeApp(){
    return  this.time;
  }

  set timeApp(timme1){
    this.time = timme1;
  }

  constructor() {
    this.time = 10;

  }

  ngOnInit(): void {

  }
  start(){
    this.startTime= setInterval(()=>{
      if (this.time>0){
        this.time--;
        this.fisnish();
      }
    },1000);

  }

  stop(){

    clearInterval(this.startTime);

  }

  fisnish(){

    if (this.time==0){
      this.stop();
      this.statusTime.emit(true);
    }
  }

}
