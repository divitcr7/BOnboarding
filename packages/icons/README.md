# @benchmark-brokers/icons

A collection of icons for the web, part of the Benchmark Brokers Design System.

---

## Documentation

All icons are available as individual Typescript React components.

Install package:

add `"@benchmark-brokers/icons": "workspace:^"` in package.json array of dependency

Import the icons into your React project:

```js
import { ChevronRight } from "@benchmark-brokers/icons";

function MyComponent() {
  return (
    <div>
      <ChevronRight size="md" color="#434590" />
    </div>
  );
}
```

## Contributing

- Add Icons in `./src/svg` folder and ensure that you use descriptive names with lowercase letters separated by dashes.
- Run `yarn codegen` to generate Typescript react components
- Run `yarn build` to build project on local or just `yarn bootstrap` in root level to cleanup everything and install all packages from scratch.
