import { AutoMap } from "@automapper/classes";
import { TagModel } from "./tag.model";

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

	@AutoMap()
	modifiedDate: number;
	@AutoMap()
	creationDate: number;

	@AutoMap()
	creatorId: string;
	@AutoMap()
	modifierId: string;

	@AutoMap(()=>TagModel)
	tags: TagModel[];

	@AutoMap()
	listed: boolean;
};
