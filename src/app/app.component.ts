import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent
{
	public navigationItems:{
		route:string,
		title:string
	}[] = [
		{
			route: "",
			title: $localize `:@@app-title:Till Tomorrow`
		},
		{
			route: "",
			title: $localize `:@@technics-title:Technics`
		},
		{
			route: "",
			title: $localize `:@@stories-title:Cool-stories`
		},
		{
			route: "",
			title: $localize `:@@for-relatives-title:For relatives`
		},
		{
			route: "about-us",
			title: $localize `:@@about-us-title:About us`
		}
	];
	
	constructor(@Inject(LOCALE_ID) public locale: string)
	{}
}
