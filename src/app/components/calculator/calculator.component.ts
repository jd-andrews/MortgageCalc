import { Component, OnInit, ViewChild } from "@angular/core";

import { NgForm } from "@angular/forms";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.sass"]
})
export class CalculatorComponent implements OnInit {
  mortgageTotal = {
    home: 200000,
    dpnum: 20000,
    loantype: 10,
    interest: 3,
    homeowners: 200,
    property: 200,
    HOA: 200
  };
  modals: boolean[] = [false, false, false, false, false];
  monthlyPayment: number;
  clickOut: boolean = false;

  constructor() {}

  testSubmit(form) {
    // console.log(form);

    this.mortgageTotal = form;
    // console.log(this.mortgageTotal, "mortgage");
    this.monthlyRate(form);
  }

  modalOn(number: number) {
    this.modals[number] = !this.modals[number];
    console.log(this.modals[number]);
    this.clickOut = !this.clickOut;
  }

  modalsOff() {
    this.modals = [false, false, false, false, false];
    this.clickOut = false;
    console.log("click");
  }

  monthlyRate(formData) {
    let downPayment = formData.dpnum;
    let principal = formData.home - downPayment;
    let interest = formData.interest / 1200;
    let term = formData.loantype * 12;
    let test =
      principal *
      ((interest * Math.pow(1 + interest, term)) /
        (Math.pow(1 + interest, term) - 1));
    this.monthlyPayment = Math.round(test);
  }

  ngOnInit() {
    this.testSubmit(this.mortgageTotal);
  }
}
