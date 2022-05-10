import { ObjectId } from "mongodb"

export class ArticleDbModel
{
	_id: ObjectId;

	title: string;
	language: string;
	htmlText: string;

	modifiedDate: number;
	creationDate: number;

	creatorId: ObjectId;
	modifierId: ObjectId;
};
