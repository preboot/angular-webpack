import {Control} from 'angular2/common';

interface ValidatorResult {
  [key: string]: boolean;
}

export class CustomValidators {
  static emailFormat(control: Control): ValidatorResult {
    let pattern: RegExp = /\S+@\S+\.\S+/;
    return pattern.test(control.value) ? null : {"emailFormat": true};
  }
}
