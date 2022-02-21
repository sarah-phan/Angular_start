import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-movie-list',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-sm-4" *ngFor="let movie of movies">
                <!-- có [] thì sau bằng là biến movie ở dòng trên, nếu ko có [] thì là string -->
                <app-movie-item 
                [movie] = "movie" 
                (onDelete)="handleDelete($event)"
                >
                </app-movie-item>
            </div>
        </div>
    </div>
    `
})

export class MovieListComponent implements OnInit {
    movies = [
        {id: 1, name: 'Avenger', desc: "Endgame", img: "assets/img/1.jpg"},
        {id: 2, name: 'Avatar', desc: "Avatar", img: "assets/img/2.jpg"},
        {id: 3, name: 'Spiderman', desc: "No way home", img: "assets/img/3.jpg"}
    ]
    constructor() { }

    // ngOnInit là lifecycle của angular, được dùng để gọi api, sau khi các properties, directive được khởi tạo  
    ngOnInit() { }
    handleDelete(movieId: number){
        this.movies = this.movies.filter((item) => item.id !== movieId)
    }

    // Cách 1: dùng props
    // ngOnChanges(changes: SimpleChanges): void {
    //     console.log(changes)
    //     const {movieAdded} = changes
    //     if(
    //         movieAdded.currentValue && 
    //         movieAdded.currentValue !== movieAdded.previousValue
    //     ){
    //         this.handleAdd(movieAdded.currentValue)
    //     }
    // }
    // @Input() movieAdded: any = null
    
    handleAdd(movie: any){
        this.movies = [...this.movies, movie]
        console.log(this.movies)
    }
}