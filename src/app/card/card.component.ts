import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    template: `
    <!-- ng-content được dùng cho những component chung nhưng nội dung linh động -->
    <div class="card">
        <div class="card-header">
            <!-- slot='header' ko có khoảng cách -->
            <ng-content select = "[slot='header']"></ng-content>
        </div>
        <div class="card-body">
           <ng-content select = "[slot='body']"></ng-content>
        </div>
        <div class="card-footer text-muted">
            <ng-content select = "[slot='footer']"></ng-content>
        </div>
    </div>
    `
})

export class CardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}