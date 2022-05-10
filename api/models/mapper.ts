import { createMap, createMapper, forMember, mapFrom } from '@automapper/core';
import { classes } from '@automapper/classes';

import { ArticleModel } from "./api/article.model";
import { ArticleDbModel } from "./db/article.model";
import { ObjectId } from 'mongodb';

// Create and export the mapper
export const mapper = createMapper({
    strategyInitializer: classes(),
});

createMap(mapper, ArticleDbModel, ArticleModel,
	forMember(
		(destination) => destination.id,
		mapFrom((source) => source._id.toString())
	),
	/*forMember(
		(destination) => destination.creatorId,
		mapFrom((source) => source.creatorId.toString())
	),
	forMember(
		(destination) => destination.modifierId,
		mapFrom((source) => source.modifierId.toString())
	)*/
);
createMap(mapper, ArticleModel, ArticleDbModel,
	forMember(
		(destination) => destination._id,
		mapFrom((source) => new ObjectId(source.id))
	),
	/*forMember(
		(destination) => destination.creatorId,
		mapFrom((source) => new ObjectId(source.creatorId))
	),
	forMember(
		(destination) => destination.modifierId,
		mapFrom((source) => new ObjectId(source.modifierId))
	)*/
);
