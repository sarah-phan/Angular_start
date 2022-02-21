import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    template: `
        <div>
            <p>Sidebar</p>
        </div>
    `
})

export class SidebarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}