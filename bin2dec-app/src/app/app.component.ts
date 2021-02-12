import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-app';

  isValid: boolean = false;
  result: number = 0;

  binaryNumberInput = new FormControl('', {
    validators: [Validators.pattern('^[0-1]*$')]
  });

  ngOnInit(): void {


  }

  validate() {

    console.log(this.binaryNumberInput.valid);
    this.binaryNumberInput.markAsTouched();
  }

  calculate(event: KeyboardEvent) {

    if (this.binaryNumberInput.valid) {

      let value = (event.target as HTMLInputElement).value;
      console.log(value);
    }else{

      // remove result
    }
  }

}
