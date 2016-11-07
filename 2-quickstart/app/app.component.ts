import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}!</h1>
            <input  [(ngModel)]="name" />`
})
export class AppComponent {
    private name:string = "Dennis Ritchie";
    constructor() {
    }

}
