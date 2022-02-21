import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddMovieComponent } from './add-movie.component';
import { InteractionComponent } from './interaction.component';
import { MovieItemComponent } from './movie-item.component';
import { MovieListComponent } from './movie-list.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    exports: [InteractionComponent],
    declarations: [
        InteractionComponent,
        MovieListComponent,
        MovieItemComponent,
        AddMovieComponent
    ],
})
export class InteractionModule { }
