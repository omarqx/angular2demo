import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}!</h1>
               <input  [(ngModel)]="name" />`,
    styleUrls: ['./app.component.css']
})
export class AppComponent {

}
