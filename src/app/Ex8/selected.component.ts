import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-selected',
    template: `
        <h3>Danh sách ghế đang chọn</h3>
        <p *ngFor = "let seat of selectedSeat">
            Ghế: {{seat.name}} - {{seat.price}}
            <a class="text-danger" (click)="handleRemove(seat.id)">[Hủy]</a>
        </p>
    `
})

export class SelectedComponent implements OnInit {
    selectedSeat: any = []

    handleSelect(seat: any){
        if (seat.isSelected){
            this.selectedSeat = [...this.selectedSeat, seat]
        }
        else{
            this.selectedSeat = this.selectedSeat.filter(
                (item: any) => item.id !== seat.id
            )
        }
    }

    handleRemove(seatId: number){
        // Bước 1: xóa ghế khỏi danh sách
        this.selectedSeat = this.selectedSeat.filter(
            (item: any) => item.id !== seatId
        )
        // bước 2: truyền id cho comp cha
        this.onRemove.emit(seatId)
    }

    @Output() onRemove = new EventEmitter();

    constructor() { }
    ngOnInit() { }
}