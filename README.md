
In this challenge, you design and build a Data Model and a RESTful API that stores data into a Relational Database.



Complete the following tasks:

 Design the data model and use knex migrations to create the database and tables needed to satisfy the following business rules:
 a project can have multiple tasks.
 a task belongs to only one project.
 a project can use multiple resources. Example of resources are: computer, conference room, microphone, delivery van.
 the same resource can be used in multiple projects.
 when adding projects the client must provide a name, the description is optional.
 when adding resources the client must provide a name, the description is optional.
 when adding a task the client must provide a description, the notes are optional.
 when adding a task the client must provide the id of an existing project.
 for projects and tasks if no value is provided for the completed property, the API should provide a default value of false.
 
 
 Build an API with endpoints for:
 adding resources.
 retrieving a list of resources.
 adding projects.
 retrieving a list of projects.
 adding tasks.
 retrieving a list of tasks. The list of tasks should include the project name and project description.
 
Entities
A project is what needs to be done. We want to store the following data about a project:

 a unique ID.
 a name. This column is required.
 a description.
 a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be false.
A resource is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a resource:

 a unique ID.
 a name. This column is required.
 a description.
The database should not allow resources with duplicate names.

A task one of the steps needed to complete the project. We want to store the following data about an task.

 a unique ID.
 a description of what needs to be done. This column is required.
 a notes column to add additional information.
 a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be false.

  tasks: [
    {
      id: 1,
      description: 'task description',
      notes: 'the task notes'
    },
    {
      id: 7,
      description: 'another task description',
      notes: 'the task notes'
    }
  ],
  resources: [
    {
      id: 1,
      name: 'Lambda Student',
      description: 'a soon to be hired developer'
    },
    {
      id: 2,
      name: 'MacBook Pro #1'
      description: 'an overly expensive laptop computer'
    }
  ]
}
