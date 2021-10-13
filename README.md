Description
Build the updateOneById and the deleteOneById controller for the Books and Pets database

Instructions
- Use this starter template: https://codesandbox.io/s/1003-express-and-sql-update-and-delete-p7fy0?file=/src/index.js
- Replace the PGURL environment variable with the your database URL found:
    -- in ElephantSQL
    -- in the details section.
- Build the updateOneById controller for the Books and Pets resource
- Build an updateOneByTitle controller for the Books resource
- Build an updateOneByName controller for the Pets resource
- Build the deleteOneById controller for the Books and Pets resource

Tips
- Take a look inside the model to see what data types you are working with.
- Use ElephantSQL to check if your requests are succesfully updating and deleting rows in the database (there will be mockData stored in there already).

Challenge 1
- Add validation in your update controller that sends a useful message back to the client when there's an error, with suggestions as to what they could do differently.

Challenge 2
- Build your server from scratch... empty folder...



Setting up afternoon exercises in API module:

- Export project from codesandbox
- Open project in VS code
- Create .env file in the root of the project
  - Go to ElephantSQL and get the URL for the instance you are using
  - Add PGURL="elephant-sql-url-here" to .env
- Create .gitignore file in the root of the project
  - Add /node_modules/ and .env
- Install dotenv package
  - Run npm install dotenv
  - Add require('dotenv').config() at the top of /src/index.js file
- Run npm install
- Run npm start
