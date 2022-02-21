import { Component, OnInit } from '@angular/core';
// nơi gắn những component nhỏ vào, sau đó import file duy nhất này vào app
@Component({
    selector: 'app-ex2',
    template: `
        <app-header></app-header>
        <app-index></app-index>
        <app-footer></app-footer>
    `
})

export class Ex2Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}