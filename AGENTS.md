# AGENTS.md

## Build/Testing Commands

### Build

```
npm run build
```

Compiles TypeScript to JavaScript and generates a production bundle. Output is placed in `dist/` directory.

## Code Style Guidelines

### Imports

- **Named imports**: Always use named imports
  
  ```typescript
  import { fetch } from 'axios';
  ```
- **No default imports**: 
  
  ```typescript
  // Do NOT use
  import fetch from 'axios';
  ```
- **File order**: Alphabetical by filename
- **Import aliases**: Always prefer `./src/` over `./`
- **Import grouping**: 
  - Built-ins first
  - Third-party libraries
  - Custom imports

### Formatting

- **Indentation**: 2 spaces
  (Do NOT use tabs)
- **Line length**: Max 100 characters
- **Trailing commas**: Always in object/function calls
  
  ```typescript
  const { a, b } = obj;
  ```
- **Semicolons**: Required in all function calls
- **Spacing**: Always around operators
  
  ```typescript
  const x = a + b;
  ```

### Naming Conventions

- **Functions**: camelCase
  
  ```typescript
  function processUser(user: User) {}
  ```
- **Classes**: PascalCase
  
  ```typescript
  class Account {}
  ```
- **Constants**: ALLUPPERCASE
  
  ```typescript
  const MAX_REQUESTS = 10;
  ```
- **Variable scope**: Use `let`/`const` for block-scoped variables

### ### Error Handling

- **Critical operations**: Use try/catch
  
  ```typescript
  try {
    throw new Error('Test');
  } catch (e) {
    logError(e);
  }
  ```
- **Async functions**: Always use async/await
  
  ```typescript
  async function foo() {
    return await fetch(...);
  }
  ```
- **Uncaught exceptions**: 
  
  ```typescript
  process.on('uncaughtException', (error) => {
    logError(`Uncaught exception: ${error.message}`);
  });
  ```

### Other Guidelines

- **No console.log**: Remove in production
- **File extensions**: `.js`, `.ts`, not `.js` or `.jsx`
- **No inline comments**: Technical details should be in documentation
- **Import paths**: Always prefer `./` over `/`
- **Avoid type coercion**: `+` for numbers, `String()` for strings

## Cursor Rules

The following rules apply to all files:

1. **No unused imports**: Remove imports that aren't used
2. **No type assertions**: Avoid `as` in critical code paths
3. **No magic numbers**: Always use named constants
4. **No global state**: Keep state local to functions
5. **No unnecessary async**: Use promises instead of callbacks for async

## Additional Requirements

- **Build output**: Ensure `dist/` contains only compiled files

## Notes

- 
- If you see "This is a cursor file" in `AGENT.md`, the file is managed by cursor
- Always check for existing files before modifying