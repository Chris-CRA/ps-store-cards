import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label',
  imports: [],
  templateUrl: './card-label.component.html',
  styleUrl: './card-label.component.css'
})
export class CardLabelComponent implements OnInit {

  @Input()
  gameLabel:string = ""

  constructor() { }

  ngOnInit(): void {
  }

  

}
