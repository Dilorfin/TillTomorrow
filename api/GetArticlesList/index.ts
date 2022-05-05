import { AzureFunction, Context, HttpRequest } from "@azure/functions"

import { getAzureUserFromRequest, AzureUserData } from "../common/utils"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void>
{
	const user : AzureUserData = getAzureUserFromRequest(req);

	context.res.json(user);
};

export default httpTrigger;
