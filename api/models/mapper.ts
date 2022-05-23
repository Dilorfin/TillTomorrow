import { createMap, createMapper, forMember, mapFrom } from '@automapper/core';
import { classes } from '@automapper/classes';
import { ObjectId } from 'mongodb';

import { ArticleModel } from "./api/article.model";
import { ArticleDbModel, UpdateArticleDbModel } from "./db/article.model";

// Create and export the mapper
export const mapper = createMapper({
	strategyInitializer: classes(),
});

createMap(mapper, ArticleDbModel, ArticleModel,
	forMember(
		(destination) => destination.id,
		mapFrom((source) => source._id?.toString())
	)
);
createMap(mapper, ArticleModel, ArticleDbModel,
	forMember(
		(destination) => destination._id,
		mapFrom((source) => new ObjectId(source.id))
	)
);
createMap(mapper, ArticleModel, UpdateArticleDbModel);
