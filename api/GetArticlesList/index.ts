import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { ArticleDbModel } from '../models/db/article.model';
import { ArticleModel } from '../models/api/article.model';
import { FindCursor, MongoClient, WithId } from "mongodb";
import { mapper } from "../models/mapper";
import { setErrorResult } from "../common/utils";

const client = new MongoClient(process.env.CONNECTION_STRING);

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void>
{
	try
	{
		await client.connect();
		const database = client.db('till-tomorrow');
		const articlesCollection = database.collection<ArticleDbModel>('articles');
		
		const cursorDbArticle: FindCursor<WithId<ArticleDbModel>> = await articlesCollection.find();

		const articles = await cursorDbArticle.toArray();
		const apiArray = mapper.mapArray(articles, ArticleDbModel, ArticleModel);
		context.res.json(apiArray);
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
