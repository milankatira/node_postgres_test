### Instalation

1. Clone the repository.

2. Create a .env file in the root directory of the project, and add the necessary environment variables (if any).

3. Install dependencies by running the following 


```bash
nvm use
```

```bash
npm install
```

```bash
npm start
```


4. The server should now be running on http://localhost:8000.


#### Scripts
`npm run format` - Format code using Prettier and ESLint
`npm run format:check` - Check if the code is properly formatted
`npm run format:write` - Format code and write changes to files
`npm run lint:check` - Check code for linting errors
`npm run lint:fix` - Fix linting errors
`npm run start` - Start the development server
`npm run build` - Build the project
`npm run typeorm` - Run TypeORM CLI commands using ts-node
`npm run migrate` - Generate a new migration file using TypeORM CLI and build the project
`npm run db:push` - Run all pending migrations and build the project



#### Built With
- `Node.js` - The runtime environment used
- `Express` - The web framework used
- `TypeScript` - The language used
- `TypeORM` - The ORM used
