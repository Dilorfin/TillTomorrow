import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticlePageComponent } from './edit-article-page/edit-article-page.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
	declarations: [EditArticlePageComponent],
	imports: [
		CommonModule,
		AdminRoutingModule
	]
})
export class AdminModule { }
