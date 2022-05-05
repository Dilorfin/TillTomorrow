import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { ArticleModel } from '../models/article.model';
import { MongoClient } from "mongodb";

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
		const articles = database.collection<ArticleModel>('articles');
		const result = articles.findOne({ id: id, language: langId });
		
		if (result)
		{
			context.res.json(result);
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
