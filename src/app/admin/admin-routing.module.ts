import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditArticlePageComponent } from './edit-article-page/edit-article-page.component';

const routes: Routes = [
	{ path: '', component: EditArticlePageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
