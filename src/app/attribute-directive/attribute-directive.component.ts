import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-attribute-directive',
    template: `
        <!-- structural directive là thêm hoặc xóa thẻ dom -->
        <!-- attribute directive là thay đổi cách thể hiện của thẻ dom -->
        <h1>Attribute Directives</h1>
        <h3>Class binding</h3>
        <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
                <a 
                class="nav-link" 
                href="#"
                [class.active] = "selectedTab === 'home'"
                (click)="onSelect('home')"
                >
                    Home
                </a>
            </li>
            <li class="nav-item">
                <!-- class.active được thêm vào nếu điều kiện true -->
                <a 
                class="nav-link" 
                href="#"
                [class.active] = "selectedTab === 'news'"
                (click)="onSelect('news')"
                >
                    News
                </a>
            </li>
            <li class="nav-item">
                <a 
                class="nav-link" 
                href="#"
                [class.active] = "selectedTab === 'about'"
                (click)="onSelect('about')"

                >
                    About
                </a>
            </li>
        </ul>
        <!-- Ngoài ra ta có thể viết [class] = "classExpr"
            classExpr có 3 dạng: string (ở trên), array string, object (dùng cho nhiều điều kiện) 
            array: ["class-a", "condition ? 'class-b' : 'class-c'"]
            object: {'class-a': true, 'class-b': false}
        -->

        <h3>Style binding</h3>
        <!-- <div [style.property] = "expression"></div> 
            expression trả về giá trị dạng: number, string, null, undefined-->
        
        <div
        style = "height: 300px; width: 200px"
        [style.background-image] = "'url(' + imgUrl + ')'">

        </div>
    `
})

export class AttributeDirectiveComponent implements OnInit {
    selectedTab: string = 'home';

    imgUrl: string = 'https://picsum.photos/200/300';
    
    constructor() { }

    onSelect(tab: string){
        this.selectedTab = tab
    }

    ngOnInit() { }
}