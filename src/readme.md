## JSON to Typescript Types Generator

### Install Dependency

```bash
npm install @jodd/json-to-typescript
```

#### [Official NPM Package Link](https://www.npmjs.com/package/@jodd/json-to-typescript)

#### Apply `white-space` property as `pre-wrap` to show magically ⚡ formatted text on the browser

```tsx
// JSX Example
import React from 'react';
import { generateTypes } from '@jodd/json-to-typescript';

export default function App() {
  const json = `{
    "title": "Apple",
    "quantity": 300,
    "isSoldOut": false,
    "purchaser": null
  }
  `;
  const { result } = generateTypes(json, 'Fruit');
  return (
    <div>
      <p style={{ whiteSpace: 'pre-wrap' }}>{result}</p>
    </div>
  );
}
```

### Result

```ts
export type Fruit = {
  title: string;
  quantity: number;
  isSoldOut: boolean;
  purchaser: null;
};
```
