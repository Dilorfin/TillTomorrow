import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { ArticleModel } from 'models/article.model';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void>
{
	context.log('HTTP trigger function processed a request.');
	const id: string = (req.query['id'] || (req.body && req.body['id']));
	const langId: string = (req.query['language'] || (req.body && req.body['language']));
	if (id)
	{
		const article: ArticleModel = {
			id: 'hamlet',
			title: 'Гамлет',
			language: 'uk',
			text: `<p>some text</p>`
		};

		context.res = {
			// status: 200, /* Defaults to 200 */
			body: article
		};
	}
	else
	{
		context.res = { status: 404 };
	}
};

export default httpTrigger;
