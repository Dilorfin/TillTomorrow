import { Component } from '@angular/core';

@Component({
	selector: 'app-about-us-page',
	templateUrl: './about-us-page.component.html',
	styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent
{
	cardsList: {
		name: string,
		image: string,
		about: string | null,
		phone: string | null
	}[] = [
			{
				name: 'Евгения',
				image: '../../assets/photo_2022-04-24_22-27-53.jpg',
				about: 'About me some placeholder text... AAAAAA AAAAA aaaa AAA AAAAAA.',
				phone: '+380500000000'
			},
			{
				name: 'Жря',
				image: '../../assets/photo_2022-04-24_22-28-05.jpg',
				about: null,
				phone: '+380500000000'
			},
			{
				name: 'Kitten',
				image: 'http://placekitten.com/640/640',
				about: 'Newborn kittens are completely helpless and totally dependent on their mothers for nourishment, warmth and elimination.',
				phone: null
			},
			{
				name: 'Kitten',
				image: 'http://placekitten.com/500/500',
				about: 'Even newborn kittens can purr and can often be heard doing so while they’re nursing or their mothers are cleaning them. While their squeaks and squeals are much more obvious, if you listen closely you’ll hear their content little motors running.',
				phone: null
			},
			{
				name: 'Kitten',
				image: 'http://placekitten.com/700/700',
				about: 'Kittens will chew off their sibling\'s whiskers to show dominance',
				phone: null
			}
		];

}
