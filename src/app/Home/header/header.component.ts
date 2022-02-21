import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <div>
        <p>Header</p>
    </div>
    `,
})

export class HeaderComponent  implements OnInit {
    constructor() { }

    ngOnInit() { }
}