import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlesListPageComponent } from './articles-list-page/articles-list-page.component';
import { ForRelativesPageComponent } from './for-relatives-page/for-relatives-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoriesPageComponent } from './stories-page/stories-page.component';

const routes: Routes = [
	{ path: '', component: MainPageComponent },
	{ path: 'article/:id', component: ArticlePageComponent },
	{ path: 'articles', component: ArticlesListPageComponent },
	{ path: 'about-us', component: AboutUsPageComponent },
	{ path: 'stories', component: StoriesPageComponent },
	{ path: 'for-relatives', component: ForRelativesPageComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
