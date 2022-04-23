import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent
{
	constructor(@Inject(LOCALE_ID) public locale: string)
	{}
}
