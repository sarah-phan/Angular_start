import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex2Component } from './ex2.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexContentComponent } from './index-content/index-content.component';
import { IndexComponent } from './index/index.component';
import { ItemComponent } from './item/item.component';
import { SliderComponent } from './slider/slider.component';

// tự bản thân module sẽ quản lý routes cho các component của nó
const routes: Routes = [
    {path: "", component: Ex2Component}
    // tự động nối chuỗi của cha và con => path: ex-2 + "" => ex-2

]

@NgModule({
    imports: [],
    exports: [
        Ex2Component
    ],
    declarations: [
        Ex2Component,
        HeaderComponent,
        FooterComponent,
        SliderComponent,
        IndexComponent,
        IndexContentComponent,
        ItemComponent
    ],
})
export class Ex2Module { }
