# Tasks App Backend for Alternova test

## Tools/packages used

1. Mongoose (v6.6.0): A popular ODM (Object Data Modeling) library for MongoDB and Node.js, providing a schema-based solution to model application data. It simplifies database interactions through a powerful, flexible API, enabling easy data validation, casting, and querying.

2. cors (v2.8.5): Package to manage the browser's same-origin policy. It allows or blocks requests between different domains, helping to prevent security issues when making AJAX requests from a different domain than the application.

3. dotenv (v16.3.2): Tool to load the sensitive configurations stored at the .env file, such as Postgres database URL, port number and file path used for development environment.

4. env-var (v7.4.1): Library to simplify the access and validation of environment variables in Node.js applications. It provides methods to retrieve environment variable values and perform validations, making it easier to manage application configuration.

5. express (v4.18.2): Web application framework for Node.js. to simplify the creation of HTTP servers, request routing, middleware handling, and other common tasks in web development.

## Tech Stack

💻 Built with

Technologies used in the project:

* Typescript
* Node
* MongoDB

🛠️ Installation Steps for BE:

1. Install packages ```yarn```

2. Run dockerfile to get Mongo up ```docker-compose up -d```

3. Run in development environment ```yarn start:dev```

4. Run testing ```yarn test:watch```
