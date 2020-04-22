import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  total; term; rate; amount;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('amount') != null) {
    this.amount = localStorage.getItem('amount');
    }
    if (localStorage.getItem('term') != null) {
      this.term = localStorage.getItem('term');
    }
    if (localStorage.getItem('rate') != null) {
      this.rate = localStorage.getItem('rate');
    }
    if (localStorage.getItem('total') != null) {
      this.total = localStorage.getItem('total');
    }
  }

  setAmount(i) {
    localStorage.setItem('amount', i);
    this.amount = this.addZero(this.amount);
  }

  setTerm(i) {
    localStorage.setItem('term', i);
    this.term = this.addZero(this.term);
  }

  setRate(i) {
    localStorage.setItem('rate', i);
    this.rate = this.addZero(this.rate);
  }

  addZero(num){
    console.log((num < 10) ? '0' + num : num);
    return (num < 10) ? '0' + num : num;
  }

  calculateInterest() {
    this.total = this.amount * (Math.pow(1 + this.rate / (1 * 100), this.term));
    localStorage.setItem('total', this.total);
    localStorage.setItem('amount', this.amount);
    localStorage.setItem('rate', this.rate);
    localStorage.setItem('term', this.term);



  }


}
