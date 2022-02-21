import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { Ex8Component } from './ex8.component';
import { SeatListComponent } from './seat-list.component';
import { SeatComponent } from './seat.component';
import { SelectedComponent } from './selected.component';

const routes: Routes = [
    {path: "", component: Ex8Component}
]
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [
        SeatListComponent,
        SeatComponent,
        SelectedComponent,
        Ex8Component
    ],
    providers: [],
})
export class Ex8Module { }
