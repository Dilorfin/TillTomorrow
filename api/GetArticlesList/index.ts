import { AzureFunction, Context, HttpRequest } from "@azure/functions"

async function getUserInfo()
{
	const response = await fetch('/.auth/me');
	const payload = await response.json();
	const { clientPrincipal } = payload;
	return clientPrincipal;
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void>
{
	const user = getUserInfo();

	context.log('HTTP trigger function processed a request.');
	context.log(user);
	context.res = {
		// status: 200, /* Defaults to 200 */
		body: user
	};
	
};

export default httpTrigger;
