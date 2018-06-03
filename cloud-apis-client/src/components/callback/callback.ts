import { Component } from '@angular/core';

/**
 * Generated class for the CallbackComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'callback',
  templateUrl: 'callback.html'
})
export class CallbackComponent {

  text: string;

  constructor() {
    console.log('Hello CallbackComponent Component');
    this.text = 'Hello World';
  }

}
