import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { ArticleDbModel } from '../models/db/article.model';
import { ArticleModel } from '../models/api/article.model';
import { MongoClient, ObjectId } from "mongodb";
import { mapper } from "../models/mapper";

const client = new MongoClient(process.env.CONNECTION_STRING);

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void>
{
	const id: string = (request.query['id'] || (request.body && request.body['id']));
	const langId: string = (request.query['language'] || (request.body && request.body['language']));
	if (!id || !langId)
	{
		context.res = { status: 404 };
		return;
	}

	try
	{
		await client.connect();
		const database = client.db('till-tomorrow');
		const articles = database.collection<ArticleDbModel>('articles');
		const dbArticle: ArticleDbModel = await articles.findOne({ _id: new ObjectId(id) });

		if (dbArticle)
		{
			const apiModel: ArticleModel = mapper.map(dbArticle, ArticleDbModel, ArticleModel);
			context.res.json(apiModel);
		}
		else
		{
			context.res = { status: 404 };
		}
	}
	finally
	{
		await client.close();
	}
};

export default httpTrigger;
