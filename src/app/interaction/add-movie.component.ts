import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-movie',
    template: `
    <div class="container mb-4">
        <div class="row">
            <div class="col-sm-5">
                <div class="form-group">
                  <label>Mã Phim</label>
                  <input type="text" class="form-control" [(ngModel)] = "form.id">
                </div>
                <div class="form-group">
                  <label>Tên Phim</label>
                  <input type="text" class="form-control" [(ngModel)] = "form.name">
                </div>
                <div class="form-group">
                  <label>Mô tả</label>
                  <input type="text" class="form-control" [(ngModel)] = "form.desc">
                </div>
                <div class="form-group">
                  <label>Hình ảnh</label>
                  <input type="text" class="form-control" [(ngModel)] = "form.img">
                </div>
                <button class="btn btn-success" (click)="handleAdd()">Thêm</button>
            </div>    
        </div>
    </div>
    `
})

export class AddMovieComponent implements OnInit {
    form = {
        id: "",
        name: "",
        desc: "",
        img: "",
    }
    constructor() { }

    @Output() onAdd = new EventEmitter();
    handleAdd(){
        // Muốn thêm phim ta cần truyền object (clone ra 1 object mới) form lên component cha
        this.onAdd.emit({...this.form})
    }
    ngOnInit() { }
}