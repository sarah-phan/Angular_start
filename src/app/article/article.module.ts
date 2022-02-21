import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './aritcle-list.component';
import { ArticleDetailComponent } from './article-detail.component';

const routes: Routes = [
    {path: '', component: ArticleListComponent},
    {path: ':id', component:ArticleDetailComponent} // article/1
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [ArticleDetailComponent, ArticleListComponent],
})
export class ArticleModule {}
