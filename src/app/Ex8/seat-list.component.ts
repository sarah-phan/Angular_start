import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { SeatComponent } from './seat.component';

@Component({
    selector: 'app-seat-list',
    template: `
        <div class="row">
            <div class="col-sm-3" *ngFor="let seat of seatList">
                <app-seat [seat] = "seat" (onSelect)="onSelect.emit($event)" #seatComp></app-seat>
            </div>    
        </div>
    `
})

export class SeatListComponent implements OnInit {
    @Input() seatList: any[] = []
    @Output() onSelect = new EventEmitter()
    @ViewChildren('seatComp') seatComp! : QueryList<SeatComponent>

    handleRemove(seatId: number){
        this.seatComp.forEach((item: SeatComponent) => {
            if(item.seat.id === seatId){
                item.isSelected = false;
            }
        })
    }
    constructor() { }
    ngOnInit() { }
}