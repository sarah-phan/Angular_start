import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-seat',
    template: `
        <button 
            class="seat btn btn-secondary"
            [class] = "{
                'bg-danger': seat.booked,
                'bg-success': isSelected
            }"
            [disabled]="seat.booked"
            (click) = "handleSelected()"
        >
        {{seat.name}}
        </button>
    `,
    styles: [
        `
        .seat{
            width: 70px;
            height: 70px;
            margin: 10px
        }       
        `
    ]
})

export class SeatComponent implements OnInit {
    @Input() seat:any = {};
    isSelected: boolean = false;

    handleSelected(){
        this.isSelected = !this.isSelected
        this.onSelect.emit({...this.seat, isSelected: this.isSelected})
    }

    @Output() onSelect = new EventEmitter();

    constructor() { }
    ngOnInit() { }
}