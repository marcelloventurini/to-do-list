# API for task management (todo-list) in Node.Js and Express

## A funcitonal project of a todo-list API, created to practice Node.Js, Express and TypeScript

This project was created to practice the concepts of Node.Js, Express and TypeScript seen in courses and documentation and which I have applied here in the context of a Rest API.
Some of the topics covered in this project are:

* routes
* database integration
* pagination and sorting results for search and/or filters
* error handling
* data validation
* use of middleware
* organization of the project in the MVC pattern

## How to install and run this project

Make sure you have Node.Js and npm installed. You can check this by running `node --version` and `npm --version`. If you don't have them installed, you can do this at: https://nodejs.org/en

As this is a study project, you'll need to create a MongoDB Atlas cluster in order to test the project. Here are some links that may be useful if this is your first time doing this:

* https://www.mongodb.com/basics/mongodb-atlas-tutorial
* https://www.mongodb.com/docs/atlas/getting-started/

With that done, we can move on to the project itself.

1. clone this project
2. install all dependencies by running `npm install`
3. create a .env file in the root of the project to store the database connection uri. I recommend naming the variable 'MONGO_URI' so nothing needs to be changed in the project code. In this variable, you'll store the database connection string. The complete variable will look like this `MONGO_URI=mongodb+srv://<username>:<password>@<clusterName>.mongodb.net/?retryWrites=true&w=majority`. Here's a step-by-step guide on how to create this connection: https://www.mongodb.com/docs/atlas/tutorial/connect-to-your-cluster/ PS: make sure you have selected the "drivers" option
4. now you can check that everything is working by running `npm run dev`
5. you should now be able to test the application using a program like Postman or Insomnia

The routes:

* the server will be running at: http://localhost:3000
* the base endpoint is: http://localhost:3000/tasks
* for the search tests, the endpoint is: http://localhost:3000/tasks/search
* for the filter tests, the endpoint is: http://localhost:3000/tasks/filter

All endpoints have a pagination option

Some observations:

the search method accepts only the title as a parameter; the filter method accepts status, priority, or both; pagination parameters are:
* limit: how many objects will be returned per page
* page: the page you want to access
* sortField: which field to sort by
* order: the type of sorting, where 1 means ascending and -1 descending

Here are some test examples:

* `localhost:3000/tasks/search?title=some title`
* `localhost:3000/tasks/filter?status=todo`
* `localhost:3000/tasks/filter?status=todo&priority=high`
* `localhost:3000/tasks?limit=5`
* `localhost:3000/tasks?limit=5&order=1`
* `localhost:3000/tasks?sortField=title&order=1`

This is how a task object looks like:

```json
{
  "title": "title",
  "description": "description",
  "dueDate": "2023-12-12",
  "priority": "high",
  "status": "todo"
}
```
where:

```javascript
{
  title: string
  description?: string
  dueDate?: Date
  priority?: string
  status: string
}
```
You can find more details on how the task model is built in the task.ts file, in the models folder.

## Find a bug?

If you find an issue or would like to submit an improvement to this project, please use the 'issues' tab above.
