import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieListComponent } from './movie-list.component';

@Component({
    selector: 'app-interaction',
    template: `
    <h1>Interaction</h1>
    <app-add-movie (onAdd)="handleAdd($event)"></app-add-movie>

    <!-- Cách 1: dùng props -->
    <!-- <app-movie-list [movieAdded] = "movieAdded"></app-movie-list> -->

    <!-- Cách 2: dùng View Child -->
    <app-movie-list #movieList></app-movie-list>
    `
})

export class InteractionComponent implements OnInit {
    // Cách 1:
    // movieAdded: any = null 
    constructor() { }

    ngOnInit() { }

    handleAdd(movie: any){
        // Cách 1:
        // console.log(movie)
        // this.movieAdded = movie

        // Cách 2: gọi trực tiếp method của component con bằng ViewChild
        this.movieListComponent.handleAdd(movie)
    }

    // Cách 2
    @ViewChild('movieList') movieListComponent!: MovieListComponent
}