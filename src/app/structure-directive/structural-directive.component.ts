import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-structural-directives',
    template: `
        <h1>Structural Directive</h1>

        <!-- điều kiện để hiển thị thẻ HTML -->
        <!-- <h3> *ngIf = "expression" </h3>
            expression = true => thẻ h3 được hiển thị
            expression = false => thẻ h3 ko được hiển thị
        -->
        <h2>*ngIf Avenger Endgame</h2>
        <p *ngIf = "user.age >= 13; else noPG13">
            Bạn đủ tuổi để xem
        </p>
        <!-- <h3 *ngIf = "user.age < 13">
            Bạn chưa đủ tuổi xem phim này
        </h3> -->

        <!-- thẻ angular cung cấp cho HTML, nội dung bên trong thẻ sẽ ko đc hiển thị -->
        <!-- nội dung chỉ được hiện khi sử dụng template này (call) -->
        <ng-template #noPG13>
            <p>
                Bạn chưa đủ tuổi xem phim này
            </p>
        </ng-template>

        <!-- *ngSwitch theo sau đó là string để so sánh-> fai thêm ''
        [ngSwitch] theo sau là biến cần so sánh
        Nếu so sánh thấy đúng thì hiển thị thẻ-->
        <h3>*ngSwitch</h3>
        <div [ngSwitch]="color">
            <p *ngSwitchCase="'primary'" class="bg-primary">Primary</p>
            <p *ngSwitchCase="'secondary'" class="bg-secondary">Secondary</p>
            <p *ngSwitchCase="'success'" class="bg-success">Success</p>
            <p *ngSwitchCase="'warning'" class="bg-warning">Warning</p>
            <p *ngSwitchDefault>Default</p>  
        </div>

        <!-- *ngFor tương tự với map của react -->
        <h3>*ngFor</h3>
        <div class="container">
            <div class="row">
                <div class="col-sm-4" *ngFor="let movie of movies; index as idx">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">{{idx + 1}} - {{movie.name}}</h4>
                            <p class="card-text">{{movie.desc}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ng-container tương tự như thẻ fragment của react -->
        <h3>Use multiple directive ng-container</h3>
        <div class="container">
            <div class="row">
                <div class="col-sm-4" *ngFor="let movie of movies; index as idx">
                    <ng-container *ngIf="movie">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">{{idx+1}} - {{movie.name}}</h4>
                                <p class="card-text">{{movie.desc}}</p>
                            </div>
                        </div>
                    </ng-container>
                </div>
            </div>
        </div>

        <h3>Kết hợp ng-template vs ng-container</h3>
        <!-- kỹ thuật này chỉ dùng cho nội bộ component only -->
        <ng-template #alert>
            <div class="alert alert-danger">Don't touch</div>
        </ng-template>

        <!-- gọi hàm -->
        <ng-container *ngTemplateOutlet="alert"></ng-container>
        <ng-container *ngTemplateOutlet="alert"></ng-container>
        <ng-container *ngTemplateOutlet="alert"></ng-container>
    `
})

export class StructuralDirectiveComponent implements OnInit {
    user = {
        name: "Ngoc Phan",
        age: 21
    }

    color: string = "primary";

    movies = [
        { id: 1, name: "Minion", desc: "Minion Minion Minion" },
        { id: 2, name: "Doraemon", desc: "Doraemon Doraemon Doraemon" },
        { id: 3, name: "Conan", desc: "Conan Conan Conan" },
    ];

    constructor() { }

    ngOnInit() { }
}