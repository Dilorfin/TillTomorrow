import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Collection, Db, MongoClient, ObjectId } from "mongodb";
import { AzureUserData, getAzureUserFromRequest, setErrorResult } from "../common/utils";
import { ArticleModel } from "../models/api/article.model";
import { ArticleDbModel, UpdateArticleDbModel } from "../models/db/article.model";
import { mapper } from "../models/mapper";

const client = new MongoClient(process.env.CONNECTION_STRING);

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void>
{
	if (!request.body)
	{
		setErrorResult(context, 400, "Request body is empty");
		return;
	}

	const inputArticle: ArticleModel = request.body;
	if (!inputArticle.id)
	{
		setErrorResult(context, 400, "Article id not provided");
		return;
	}
	if (!inputArticle.htmlText && !inputArticle.title && !inputArticle.language)
	{
		setErrorResult(context, 400, "No data provided for article update");
		return;
	}

	const user: AzureUserData = getAzureUserFromRequest(request);
	
	let updateModel = mapper.map(inputArticle, ArticleModel, UpdateArticleDbModel);
	updateModel.modifiedDate = Date.now();
	updateModel.modifierId = user.userId;

	try
	{
		await client.connect();
		const database: Db = client.db('till-tomorrow');
		const articles: Collection<ArticleDbModel> = database.collection<ArticleDbModel>('articles');

		const result = await articles.updateOne(
			{_id: new ObjectId(inputArticle.id) },
			{ $set: updateModel }
		);

		if (result.matchedCount <= 0)
		{
			setErrorResult(context, 404, `No document was found with id: ${inputArticle.id}`);
		}
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
