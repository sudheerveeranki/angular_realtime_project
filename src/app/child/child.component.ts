import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

   @Input() child_data ="";
  @Output() child_data2 = new EventEmitter;
   message='this is child'
  constructor() { }

  ngOnInit(): void {
  }
 sendmessage(){
   this.child_data2.emit(this.message)
 }

}
