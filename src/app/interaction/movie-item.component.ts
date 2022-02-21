import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-movie-item',
    template: `
    <div class="card">
        <img class="card-img-top" height="100%" [src]="movie.img" alt="movie.img">
        <div class="card-body">
            <h4 class="card-title">{{movie.name}}</h4>
            <p class="card-text">{{movie.desc}}</p>
            <button class="btn btn-danger" (click)="handleDelete()">Delete</button>
        </div>
    </div>
    `
})

export class MovieItemComponent implements OnInit {
    // phải khai báo Input thì mới có thể sử dụng data từ component cha truyền xuống
    // như props và state của React
    @Input() movie: any = null;
    constructor() { }

    // Để truyền dữ liệu từ con lên cha, thì component con cần phải có 1 event 
    //-> Output và EventEmiiter định nghĩa ra 1 event và giúp component cha lắng nghe được event này
    @Output() onDelete = new EventEmitter()
    ngOnInit() { }

    handleDelete() {
        // truyền id của phim muốn xóa lên component cha
        // kích hoạt event onDelete 
        this.onDelete.emit(this.movie.id)
    }
}