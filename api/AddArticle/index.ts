import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Collection, Db, InsertOneResult, MongoClient } from "mongodb";
import { AzureUserData, getAzureUserFromRequest, setErrorResult } from "../common/utils";
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

	const user: AzureUserData = getAzureUserFromRequest(request);
	const now: number = Date.now();

	let inputArticle: ArticleModel = request.body;
	inputArticle.id = null;
	inputArticle.creationDate = now;
	inputArticle.modifiedDate = now;
	inputArticle.creatorId = user.userId;
	inputArticle.modifierId = user.userId;

	if (!inputArticle.title || !inputArticle.language || !inputArticle.htmlText)
	{
		setErrorResult(context, 400, "Not enough data provided for article creation");
		return;
	}

	try
	{
		await client.connect();
		const database: Db = client.db('till-tomorrow');
		const articles: Collection<ArticleDbModel> = database.collection<ArticleDbModel>('articles');

		const dbArticle: ArticleDbModel = mapper.map(inputArticle, ArticleModel, ArticleDbModel);

		const result: InsertOneResult<ArticleDbModel> = await articles.insertOne(dbArticle);
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
