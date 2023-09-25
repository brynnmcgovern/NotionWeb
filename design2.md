Output One : Blockly Connection
Purpose : To retrieve data from the Notion API, after being provided a specified database ID, and interpret the Blockly code


Pseudo-Code
Initialize the function, ‘getNotionDatabase’, that takes in the argument ‘databaseID’ in the following manner : 
getNotionDatabase (databaseID)
The user will be given the option to input an ID into the console 
The generated JavaScript code will interpret the ID input and call ‘getNotionDatabase’
Usage
After placing the blocks in the desired position, users will be able to input an ID into the database and retrieve the proper data


Result 
Users will have the ability to navigate organizational tools within Notion and manage a database for academic or recreational purposes


Output Two : Create, Update, Delete
Purpose : To have the ability to execute the general functions using Blocks—to create, update, or delete database entries within Notion


Pseudo-Code : 
Initialize the functions, ‘createDatabaseEntry’, ‘updateDatabaseEntry’, and ‘deleteDatabaseEntry’, with each function taking in the following arguments : ‘data’, ‘entryID’, and ‘newData’
createDatabaseEntry(data)
updateDatabaseEntry(entryID, newData)
deleteDatabaseEntry(entry(ID)
Using Blockly, a building block is made for each operation
When a block is selected, the JavaScript code is interpreted and the chosen operation will perform its function


Usage
Users will be able to select one of the operations—create, update, or delete—to configure input fields, and execute the desired tasks within the Notion database


Result
Users will be given flexibility as they navigate their database within the Notion program 






Output Three : Manipulate User Interface
Purpose : To allow the user to personalize their Notion interface with specialized design tools 


Pseudo-Code
Initialize functions to generate changes to personalize the user interface and customize the way data is displayed (i.e. charts, tables, etc.)
Using Blockly, a building block is made to perform tasks for customization (i.e. buttons, forms, etc.)
When a block is selected, the JavaScript code is interpreted and the chosen function will execute the task and display the changes made to the user interface
Usage
Users can personalize their Notion environment, display data, and/or configure settings 


Result
Users can enhance their Notion tools and redesign their working environment to fit their preferences 


Output Four : Automation and Triggers
Purpose: Set up triggers and automation rules, (i.e. time-based triggers for scheduling actions)


Pseudo-Code
Create blocks for automation tasks and time-based triggers
When a block is selected, the JavaScript code is interpreted and executed


Usage
Users have the choice to have automation or trigger blocks as well as the choice to set the conditions for each block.
Actions based on code will be executed using the tools in Notion.


Result
Users will have the ability to automate tasks through setting up blocks for triggers, while simultaneously improving organization within the Notion environment 


Use Case
Instructions : Show a use case for a recursive Blockly program, illustrating that Blockly allows the user to build infinitely many complex programs from a small number of building blocks.


// Blockly Pseudo-code for Recursive Task List Generation


function createTaskList(taskName, dueDate, description) {
  // Generate HTML/JavaScript code for creating a task in Notion
  let taskCode = generateTaskCode(taskName, dueDate, description);


  // Add the generated task code to Notion
  addToNotion(taskCode);


  // Check if there are sub-tasks (recursion)
  if (hasSubTasks()) {
    let subTasks = getSubTasks();
    for (let subTask of subTasks) {
      // Recursively create sub-tasks
      createTaskList(subTask.name, subTask.dueDate, subTask.description);
    }
  }
}


// Create a main task list with sub-tasks
createTaskList("Main Task", "2023-10-01", "Complete the project");


// At this point, the Blockly-generated code has created a hierarchical task list in Notion





Instructions : Describe the data that your project needs to maintain and explain how the block based programming language interacts with this data.
	
The data required for this project is the data that the user inputs, the Notion database, the Blockly blocks, and the Javascript/HTML code. User input data refers to the information given by the users such as requirements or details for specific tasks. Within Notion, there will be a database with IDs full of user information and other necessary details for individual tasks. The users can then arrange the blocks in whatever way they want in order to add data, and then this will be converted to Javascript/HTML code. This will then link to the Notion API which will run based on the different data.
