import { Component, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleModel } from 'api/models/api/article.model';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-article-page',
	templateUrl: './article-page.component.html',
	styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent
{
	article: ArticleModel | undefined;

	constructor(private route: ActivatedRoute, private http: HttpClient, @Inject(LOCALE_ID) public locale: string) 
	{
		const articleId: string = this.route.snapshot.params['id'];
		console.log(articleId);
		this.http.get<ArticleModel>(`/api/GetArticle?id=${articleId}&language=${locale}`)
			.subscribe((resp: ArticleModel) =>
			{
				this.article = resp;
			});
	}
}
