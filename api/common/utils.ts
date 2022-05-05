import { HttpRequest } from "@azure/functions";

export interface AzureUserData
{
	identityProvider: string,
	userId: string,
	userDetails: string,
	userRoles: string[]
}

export function getAzureUserFromRequest(req: HttpRequest) : AzureUserData
{
	const header = req.headers['x-ms-client-principal'];
	const encoded = Buffer.from(header, 'base64');
	const decoded = encoded.toString('ascii');
	return JSON.parse(decoded);
}
