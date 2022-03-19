import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent{

  constructor() { }

  @Output() buttonClickType = new EventEmitter<string>();

  public onButtonClick(buttonType: string):void {
    this.buttonClickType.emit(buttonType);
  }

}
