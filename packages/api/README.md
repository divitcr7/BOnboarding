# @benchmark-brokers/api

This repository includes all API call hooks provided for `react-query`. for more information of how to use hooks please refer to [react-query](https://tanstack.com/query/latest/docs/react/overview)
---

## Documentation

Install package:

add `"@benchmark-brokers/api": "workspace:^"` in package.json array of dependency

Import the api into your React project:

```js
import { useListUsers } from "@benchmark-brokers/api";

function MyComponent() {
  const { data, isLoading } = useListUsers();

  return (
    <div>
     {isLoading ? '...loading' :   
        {
          data?.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))
        }
      }
    </div>
  );
}
```

## Contributing

- Add  `openAPI` `yaml` file inside `benchmark.yaml`
- Run `yarn codegen` to generate all Types inside `models/` and all react-query hooks inside `endpoints.ts`