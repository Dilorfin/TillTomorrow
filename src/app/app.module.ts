import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { StoriesPageComponent } from './stories-page/stories-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ForRelativesPageComponent } from './for-relatives-page/for-relatives-page.component';
import { ArticlesListPageComponent } from './articles-list-page/articles-list-page.component';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		PageNotFoundComponent,
		AboutUsPageComponent,
		StoriesPageComponent,
		ArticlePageComponent,
		ForRelativesPageComponent,
		ArticlesListPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
