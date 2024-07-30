# Marvel Web Challenge

## Setup and commands

Install dependencies

```bash
npm install
```

### Dev mode

1.  Run the project

    ```bash
    npm run dev
    ```

2.  Open the browser at http://localhost:5173/

### Production preview mode

1. Build the project

   ```bash
   npm run build
   ```

2. Run the project

   ```bash
   npm run preview
   ```

3. Open the browser at http://localhost:4173/

### Tests

End-to-end tests are implemented with Cypress. All the code and configuration can be found inside the `cypress` folder.

**Important note**: The tests run on the development server. Make sure to run the project in dev mode before running the tests.

1. Run the tests

   ```bash
   npm run test
   ```

   or use Docker

   ```bash
   npm run test-docker
   ```

## Architecture and folder structure

The project is built with Vite and React. The folder structure is as follows:

- `src`: Contains the source code of the project.
  - `components`: All the components of the project.
  - `context`: React Context providers.
  - `layout`: Layout components of the project.
  - `pages`: Pages of the project.
  - `shared`: Shared code.
    - `api`: API configuration and fetch functions.
    - `components`: Shared components.
    - `hooks`: Custom hooks.
    - `icons`: SVG icons turned into React components.
    - `types`: Typescript types and interfaces for the project and API.

## Linting and formatting

eslint is configured in Vite by default. You can run the linter with the following command:

```bash
npm run lint
```

Prettier is also configured in the project. You can run the formatter with the following command:

1. Format all files:

   ```bash
   npm run format
   ```

2. Check formatting rules:
   ```bash
   npm run prettier:check
   ```

## Libraries used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Cypress](https://www.cypress.io/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
