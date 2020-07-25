
# NodeJS DB Sprint Test
This was a project worked on during my time as a Lambda student. The objective was to design and build a Data Model and a RESTful API that stores data into a Relational Database.


## Built with
*NodeJS, Knex, Express, SQLite3*

## Rotues

### Projects

*Get all projects*
| Method | Endpoint      |
| - | - |
| GET    | /api/projects | 

*Add a project*
| Method | Endpoint      |
| - | - |
| POST   | /api/projects | 

### Resources

*Get all resources*
| Method | Endpoint      |
| - | - |
| GET    | /api/resources| 

*Add a resource*
| Method | Endpoint      |
| - | - |
| POST   | /api/resources| 

### Tasks

*Get all tasks*
| Method | Endpoint      |
| - | - |
| GET   | /api/tasks    |  

*Add a task*
| Method | Endpoint      |
| - | - |
| POST   | /api/tasks    |  




## Database Schema
> Database design specifics

### Projects schema
*Requirements: A project can have multiple tasks.  A project can use multiple resources. Example of resources are: computer, conference room, microphone, delivery van.*

**A project is what needs to be done. Table contains following data:

 - a unique ID.
 - a name. This field is required.
 - a description. This field is optional.
 - a boolean that indicates if the project has been completed. This cannot be NULL, the default value should be false.
 
  ```
  Output:
  projects: [
    {
      id: 1,
      name: 'Graduate Lambda',
      description: 'be closer to getting being a professional developer',
      completed: false
    }
      ]
 ```
 
 ### Projects-Resources schema
 
 **A project needs resources to complete. Table contains relational data for connecting projects and resources, as follows:
 
 - reference id.
 - table names to reference.
 - project id and resource id cannot be NULL.
 
 
 ### Resources schema
 *Requirements:  Same resource can be used in multiple projects. When adding a task the client must provide the id of an existing project.*

**A resource is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. Table contains following data:

 - a unique ID.
 - a name. Cannot be NULL.
 - a description. This field is optional
 - a foreign key for project id. Cannot be NULL.
 - The database does not allow resources with duplicate names.
 
 ```
  Output:
  reources: [
    {
      id:1,
      project_id: 1,
      name: 'MacBook Pro'
      description: 'an overly expensive laptop computer'
    }
  ]
```

### Tasks schema
*Requirements: A task belongs to only one project.* 

**A task is one of the steps needed to complete the project. Table contains following data:

 - a unique ID.
 - a description of what needs to be done.Cannot be NULL.
 - a notes column to add additional information. This field is optional.
 - a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be false.

```
Output:
  tasks: [
    {
      id: 1,
      description: 'study hard, stay dilligent, practice',
      notes: 'stay patient!', 
      completed: false,
    }
  ]
```
