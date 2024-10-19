# Ionic (frontend) and NodeJs (backend) Example using Basic Authentication

This project is just a project example to learn how to use Basic Authentication in Ionic 8 (frontend) and NodeJS (backend) using Sequelize as ORM to access a MySQL database.

![screenshots](https://github.com/tcrurav/Ionic8NodeAuthBasic/blob/master/screenshots/Login.png)

## Getting Started

Download links:

From Github: https://github.com/tcrurav/Ionic8NodeAuthBasic.git

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [MySQL](https://www.mysql.com) - You can install it from https://www.mysql.com/downloads/.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/tcrurav/Ionic8NodeAuthBasic.git
```

This project contains 2 different parts:
* Frontend
* Backend

You need a node.js working environment. The LTS is recommended: https://nodejs.org/es/

Once you have cloned the project install all dependencies.

```
cd Ionic8NodeAuthBasic/frontend
npm install

cd Ionic8NodeAuthBasic/backend
npm install
```

* For your backend part:
1. You need a Ionic8NodeAuthBasic/backend/.env file with a key for the JWT and the data for the connection to your MySQL Server:

```
JWT_SECRET=AVeryStrongPasswordSoThatNobodyCouldBreakIt

MYSQL_DATABASE=db_motorbikes_dev
MYSQL_USER=root
MYSQL_PASSWORD=sasa
MYSQL_ROOT_PASSWORD=sasa

DB_HOST=localhost

NODE_ENV=development
```

2. You need a mysql server working.

3. Create the mysql database, that in our case is "db_motorbikes_dev". You can import it from the file db_motorbikes_dev.sql included in this project. https://github.com/tcrurav/Ionic8NodeAuthBasic/blob/master/backend/db_motorbikes_dev.sql


Finally to start enjoying this project.

```
cd Ionic8NodeAuthBasic/backend
npm start

cd Ionic8NodeAuthBasic/frontend
ionic serve
```

Enjoy!!!


## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

## Acknowledgments

* https://www.techiediaries.com/ionic/ionic-5-jwt-authentication-node-expressjs/. Excellent tutorial as a basis for learning the Authentication basics needed for this project.
* https://www.techiediaries.com/ionic-ui-forms-theming/. Excellent tutorial to create login/register UI in Ionic 5.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
* https://www.theserverside.com/video/Follow-these-git-commit-message-guidelines. Guidelines to write properly git commit messages.