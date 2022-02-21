import { Component } from "@angular/core";

@Component({
    selector: 'app-demo',
    // templateUrl: './demo.component.html'
    // template là viết thẳng html vào 
    template: `
        <h3 class="title">Hello bootcamp 20</h3>
    `,
    // styleUrls: ['./demo.component.scss']
    styles: [
        `
            .title{
                color: blue;
            }
        `
    ]
})

export class DemoComponent{

}
