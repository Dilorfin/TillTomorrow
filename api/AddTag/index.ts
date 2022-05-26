import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Collection, Db, InsertOneResult, MongoClient } from "mongodb";
import { setErrorResult } from "../common/utils";
import { TagModel } from "../models/api/tag.model";
import { TagDbModel } from "../models/db/tag.model";
import { mapper } from "../models/mapper";

const client = new MongoClient(process.env.CONNECTION_STRING);

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void>
{
	if (!request.body)
	{
		setErrorResult(context, 400, "Request body is empty");
		return;
	}

	const inputTag: string = request.body.title;

	try
	{
		await client.connect();
		const database: Db = client.db('till-tomorrow');
		const articles: Collection<TagDbModel> = database.collection<TagDbModel>('tags');

		const dbArticle: TagDbModel = mapper.map({title: inputTag} as TagModel, TagModel, TagDbModel);

		const result: InsertOneResult<TagDbModel> = await articles.insertOne(dbArticle);
		context.log(`An article was inserted with the _id: ${result.insertedId}`);
	}
	catch (error)
	{
		setErrorResult(context, 500, `Error occurred "${error}"`);
	}
	finally
	{
		await client.close();
	}
};

export default httpTrigger;
