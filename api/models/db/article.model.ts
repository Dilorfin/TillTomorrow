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
	modifiedDate: number;
	@AutoMap()
	creationDate: number;

	@AutoMap()
	creatorId: ObjectId;
	@AutoMap()
	modifierId: ObjectId;
};
