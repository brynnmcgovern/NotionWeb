# Details of how to run and test the milestone 
## Output One: Blockly Connection
### Retrieve data from Notion:
- Click on the block or sequence of blocks that represent the "getNotionDatabase" custom block.
- If prompted, enter a Notion Database ID when the "Prompt" block executes.
- Expectation: The Blockly code will interpret the ID input and call the "getNotionDatabase" function. You should see some output, such as data fetched from the Notion API, displayed on the Blockly workspace or in the console.

# Output Two: Create, Update, Delete
## Execute database operations:
- Use the custom blocks you created for "createDatabaseEntry," "updateDatabaseEntry," or "deleteDatabaseEntry."
- Configure input fields as required for each operation.
- Expectation: When you select and run the appropriate block, the Blockly code will interpret your choices and execute the desired task within the Notion database. You may see a confirmation message or updated data within Notion.

# Output Three: Manipulate User Interface
## Personalize the Notion interface:
- Select and run custom blocks for UI customization.
- Configure settings or elements as needed.
- Expectation: When you run a UI customization block, the Blockly code will interpret your choices and execute the task, displaying changes made to the Notion user interface. For example, if you added a button, you should see the button appear in the interface.

# Output Four: Automation and Triggers
## Set up automation and triggers:
- Use custom blocks for automation tasks and triggers.
- Set conditions for each block if required.
- Expectation: When you run an automation or trigger block, the Blockly code will interpret your choices and set up the automation or trigger within Notion. For example, if you set up a time-based trigger, it should execute actions in Notion based on your specified schedule.

# Use Case: Recursive Blockly Program
## Create a hierarchical task list:
- Run the custom "createTaskList" block with parameters for task creation.
- Expectation: The Blockly-generated code will create a hierarchical task list in Notion, starting with the "Main Task" and its sub-tasks. You should see tasks added to your Notion workspace.

## Review the Notion workspace:
- Open your Notion workspace to see the hierarchical task list that was generated by the Blockly code.
- Expectation: It should create a structured list of tasks in Notion, reflecting the recursive program's execution.