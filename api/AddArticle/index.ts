import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { InsertOneResult, MongoClient } from "mongodb";
import { setErrorResult } from "../common/utils";
import { ArticleModel } from "../models/api/article.model";
import { ArticleDbModel } from "../models/db/article.model";
import { mapper } from "../models/mapper";

const client = new MongoClient(process.env.CONNECTION_STRING);

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void>
{
	if (!request.body)
	{
		setErrorResult(context, 400, "Request body is empty");
		return;
	}

	try
	{
		await client.connect();
		const database = client.db('till-tomorrow');
		const articles = database.collection<ArticleDbModel>('articles');

		const inputArticle:ArticleModel = request.body;
		const dbArticle:ArticleDbModel = mapper.map(inputArticle, ArticleModel, ArticleDbModel);

		const result:InsertOneResult<ArticleDbModel> = await articles.insertOne(dbArticle);
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
