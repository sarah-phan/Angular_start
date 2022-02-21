import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content',
    template: `
    <div>
        <p>Content</p>
    </div>
    `,
})

export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}