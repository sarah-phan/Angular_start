import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
    <div class="footer" style="background-color: green; text-align: center; padding: 15px 0; color: white;">
        Copyright by Mr.Nguyen
    </div>
    `
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}