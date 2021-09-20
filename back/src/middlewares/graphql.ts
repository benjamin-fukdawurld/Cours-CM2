import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

// Create a schema and a root resolver:
const schema = buildSchema(`
type Student {
  id: ID!
  firstName: String!
  lastName: String!
  birthDate: String!
  currentClass: SchoolClass
}

type SchoolClass {
  name: String!
  year: String!
  students: [Student]
}

type Query {
  students(id: ID, firstName: String, lastName: String): [Student!]!
  classes(name: String, year: String): [SchoolClass!]!
}
`);

export default function graphQl(rootValue: any) {
  return graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  });
}
