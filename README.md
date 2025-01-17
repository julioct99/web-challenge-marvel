# Marvel Web Challenge

Author: Julio Casallo Tamayo

**Note: In the recent days, the marvel developer API has been much slower than usual. This will affect all data loading times in the app.**
See: https://www.reddit.com/r/MarvelUnlimited/comments/1eb5ey4/has_anyone_else_noticed_extremely_slow_response/

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

**Due to the slow response times of the Marvel API, the Cypress test suite uses interceptors and fixtures for HTTP requests.**

## Architecture and implementation

The project is built with Vite and React as a **SPA**.

### Folder structure

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

### Favorites feature

The favorite characters feature is implemented using React Context, and the data is persisted to the browser via `localStorage`.
See the `src/context/favorite-characters.tsx` file for the implementation.

### Styling

The project uses `styled-components` for styling. Every component has it's own `styles.ts` file where the styles are defined.

The global CSS file (which includes **CSS variables** and global styles) can be found in `src/index.css`.

### Routing

The project uses `react-router-dom` for routing. The routes and pages are defined in the `src/App.tsx` file.

## Linting and formatting

eslint is configured in Vite by default. You can run the linter with the following command:

```bash
npm run lint
```

Prettier is also configured in the project. You can run the formatter with the following commands:

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

## Deployment

The project is deployed automatically to https://julio-marvel.netlify.app/ using Netlify.

## Misc. notes

1. To search, press `ENTER` after typing in the searchbar.
