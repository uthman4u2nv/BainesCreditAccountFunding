import { Component, OnInit } from '@angular/core';
declare var payWithPaystack: any;

@Component({
  selector: 'app-paystack',
  templateUrl: './paystack.component.html',
  styleUrls: ['./paystack.component.scss']
})
export class PaystackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new payWithPaystack();
  }

}
