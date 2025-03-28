import { defineConfig } from 'orval';

export default defineConfig({
  benchmark: {
    output: {
      target: './src/endpoints.ts',
      schemas: './src/models',
      client: 'react-query',
      prettier: true,
      override: {
        mutator: {
          path: './src/use-custom-instance.ts',
          name: 'useCustomInstance',
        },
      },
    },
    input: {
      target: './benchmark.yaml',
    },
  },
});
