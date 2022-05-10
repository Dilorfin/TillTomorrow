import { AutoMap } from "@automapper/classes";

export class ArticleModel
{
	@AutoMap()
	id: string;

	@AutoMap()
	title: string;
	@AutoMap()
	language: string;
	@AutoMap()
	htmlText: string;

	/*@AutoMap()
	modifiedDate: number;
	@AutoMap()
	creationDate: number;

	@AutoMap()
	creatorId: string;
	@AutoMap()
	modifierId: string;*/
};
