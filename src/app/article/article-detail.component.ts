import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-article-detail',
    template: `
        <h1>Article Detail</h1>
    `
})

export class ArticleDetailComponent implements OnInit {
    // Lấy id từ url
    articleId: string = '';
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.articleId = this.activatedRoute.snapshot.params['id']
        console.log(this.articleId)
    }
}