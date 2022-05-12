import { AutoMap } from "@automapper/classes";
import { ObjectId } from "mongodb"

export class ArticleDbModel
{
	@AutoMap()
	_id: ObjectId;

	@AutoMap()
	title: string;
	@AutoMap()
	language: string;
	@AutoMap()
	htmlText: string;

	@AutoMap()
	creationDate: number;
	@AutoMap()
	modifiedDate: number;

	@AutoMap()
	creatorId: string;
	@AutoMap()
	modifierId: string;

	@AutoMap()
	listed: boolean;
};

export class UpdateArticleDbModel
{
	@AutoMap()
	title: string;
	@AutoMap()
	language: string;
	@AutoMap()
	htmlText: string;

	@AutoMap()
	modifiedDate: number;
	@AutoMap()
	modifierId: string;

	@AutoMap()
	listed: boolean;
};
