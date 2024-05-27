# panda
Try Panda CSS

https://panda-css.com/docs/installation/vite

## bun install
Create Project
```bash
bun create vite test-app --template react-ts
cd test-app
bun install
```

Install Panda
```bash
bun add -D @pandacss/dev
bun panda init --postcss
```

Update package.json scripts
```json
{
  "scripts": {
+    "prepare": "panda codegen",
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
}
```

Configure the entry CSS with layers
Add this code to an src/index.css file imported in the root component of your project.
```css
@layer reset, base, tokens, recipes, utilities;
```

Start using Panda
Now you can start using Panda CSS in your project. Here is the snippet of code that you can use in your src/App.tsx file.
```tsx
import { css } from '../styled-system/css';
 
function App() {
  return (
    <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
  )
}
 
export default App;
```