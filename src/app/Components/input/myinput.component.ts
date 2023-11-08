// myinput.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './myinput.component.html',
  styleUrls: ['./myinput.component.css']
})
export class MyInputComponent {
  password: string = '';
  passwordStrength: 'nothing' | 'weak' | 'medium' | 'strong' = 'nothing';

  checkPasswordStrength() {
    const length = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (length === 0) {
      this.passwordStrength = 'nothing';
    } else if (length < 8) {
      this.passwordStrength = 'weak';
    } else if (hasLetters && hasDigits && hasSymbols) {
      this.passwordStrength = 'strong';
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      this.passwordStrength = 'medium';
    } else {
      this.passwordStrength = 'weak';
    }
  }
}
