export class ArticleModel
{
	id: string;

	title: string;
	language: string;
	htmlText: string;

	modifiedDate: number;
	creationDate: number;

	creatorId: string;
	modifierId: string;
};
