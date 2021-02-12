import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const TOOLTIP_MESSAGE = 'Click the result to copy the value to the clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-app';

  isValid: boolean = false;
  result: string = '';

  tooltipMessage: string = TOOLTIP_MESSAGE;

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
      this.result = value;
    } else {

      // remove result
    }
  }

  copy() {

    let textAreaTempElement = document.createElement('textarea');
    textAreaTempElement.value = this.result;
    document.body.appendChild(textAreaTempElement);
    textAreaTempElement.select();
    document.execCommand('Copy');
    textAreaTempElement.remove();

    this.tooltipMessage = 'Copied!!';
    setTimeout(() => {
    
      this.tooltipMessage = TOOLTIP_MESSAGE;
    }, 500);
    
  }

  getDecimalNumber(binaryNumber: number) {

  }

}
