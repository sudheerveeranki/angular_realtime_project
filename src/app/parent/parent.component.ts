import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    parent_data="this is parent data";
    parent_data2="";
  constructor() { }

  ngOnInit(): void {
  }
 recievermsg($event:any){
   this.parent_data2= $event;
 }
}
