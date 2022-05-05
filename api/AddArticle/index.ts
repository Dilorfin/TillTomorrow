import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { MongoClient } from "mongodb";
import { ArticleModel } from "../models/article.model";

const client = new MongoClient(process.env.CONNECTION_STRING);

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void>
{
	if (!request.body)
	{
		const errorMessage:string = "Request body is empty";
		context.res = {
			status: 400,
			body: errorMessage
		};
		context.log(errorMessage);
		return;
	}

	try
	{
		await client.connect();
		const database = client.db('till-tomorrow');
		const articles = database.collection<ArticleModel>('articles');
		
		const article = request.body as ArticleModel;
		const result = await articles.insertOne(article);
		context.log(`An article was inserted with the _id: ${result.insertedId}`);
	}
	catch (error)
	{
		const errorMessage: string = `Error occurred "${error}"`;
		context.res = {
			status: 500,
			body: errorMessage
		};
		context.log(errorMessage);
	}
	finally
	{
		await client.close();
	}
};

export default httpTrigger;
