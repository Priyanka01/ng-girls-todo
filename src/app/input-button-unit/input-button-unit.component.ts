import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  @Output() submit: EventEmitter<string> = new EventEmitter();
  constructor() { 
    // this.title = 'hello angular';
    console.log(this.title);
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.title = 'This is not the title you are looking for';
    // }, 3000);
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }


}
