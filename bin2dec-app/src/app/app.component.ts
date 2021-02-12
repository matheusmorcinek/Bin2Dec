import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const TOOLTIP_MESSAGE = 'Click the result to copy the value to the clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isValid: boolean = false;
  result: string = '';

  tooltipMessage: string = TOOLTIP_MESSAGE;

  binaryNumberInput = new FormControl('', {
    validators: [Validators.pattern('^[0-1]*$')]
  });

  validate() {

    console.log(this.binaryNumberInput.valid);
    this.binaryNumberInput.markAsTouched();
  }

  calculate(event: KeyboardEvent) {

    if (this.binaryNumberInput.valid) {

      let value = (event.target as HTMLInputElement).value;

      let decimalNumber = value.split('').reverse().reduce((previousValue, currentValue, index) => {
        return (currentValue === '1') ? (previousValue + Math.pow(2, index)) : previousValue;
      }, 0);

      this.result = decimalNumber.toString();
    } else {

      this.result = '';
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
}
