# Node Express Handlebars

### Overview

In this assignment, I created a burger logger with Sequelize, Node, Express, Handlebars and a homemade ORM (yum!). I followed the MVC design pattern; used Node and MySQL to query and route data in your app, and Handlebars to generate my HTML.

![App](./readmeImages/burger.png "App")

### Before I Began

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app displays the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger moves to the right side of the page.

* Your app stores every burger in a database, whether devoured or not.

#### Directory structure

All the recommended files and directories from the steps above look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```


