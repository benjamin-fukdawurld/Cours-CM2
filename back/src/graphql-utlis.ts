import { loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

export async function getGqlSchema() {
  return loadSchema('./src/models/**/*.gql', {
    loaders: [new GraphQLFileLoader()],
  });
}
