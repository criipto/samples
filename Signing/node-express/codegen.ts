import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://signatures-api.criipto.com/v1/graphql',
  documents: 'src/graphql/**/*.graphql',
  // graphql.ts file will have all the types from the GraphQL API specified here.
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
    },
  },
};

export default config;
