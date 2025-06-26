import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent implements OnInit {

  @Input()
  gameType: string = "Digital PS4";

  @Input()
  gamePrice: string = "R$ 199,90";

  @Input()
  gameLink: string = "";


  constructor() { }

  ngOnInit(): void {
    
  }

  

}