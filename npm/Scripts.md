## Script node

```
package.json
"iniciar": "node src/index.js && mkdir dist && echo \"pasta dist criada\" "
```

> Scripts Multi Tasks



```
"scripts": {
    "prebuild": "npm install",
    "start:dev": "node src/index.js",
    "start:wath": "node --wath src/index.js"
  }
```

> Script Naming Guidelines

## Semmatics-script

start: the aplication.

dev: Start the development server with hot reloading.
build: Build the application for production.

test: Run unit test.
test:watch: Run unit tests in watch mode.
test:coverage: Generate test coverage report.

lint: Lint the codebase.
lint:fix: Fix linting errors automatically.

format: Format code according to coding standards
clean: Clean up generated files.

precommit: Run linting, formatting, and tests before committing code.
deploy: Deploy the application to a server.
analyzeL: Analyze the bundle size or performace of the application.

storybook: Start Storybook for component development.
storybook:build: Build Storybook for production.
storybook:deploy: Deploy Storybook to a hosting service.