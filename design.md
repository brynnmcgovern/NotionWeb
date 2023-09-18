## Block that connects the Notion API and retrives data from a Notion database:
    ##Notion allows for databases to be created that allows users to group important tasks together, for instance, one database ##could be used strictly to create and keep track of university classes and what a class consists of plus their respective ##assigments, another database could be made up of important events that contains infomration about time, people, and ##location
    ##Possible format - 
    ##given a database ID, retrive the database 

    ##Blockly.Blocks['get_notion_database'] = {                             (block name - get_notion_database)
    ##  init: function() {                                                  (function that initializes the blocks properties)
    ##      this.appendValueInput('DATABASE_ID')                            (takes an input which will be the id of the database)
    ##          .setCheck('String')                                         (checks if the value was a string)
    ##          .appendField('Retrieve data from Notion database with ID'); (block description) 
    ##      this.appendStatementInput('get_access')                         (allows insert another function block) 
    ##          .appendField('get_access');
    ##      this.setInputsInline(true);
    ##      this.setOutput(true, 'Array');
    ##      this.setColour(230);
    ##      this.setTooltip('Retrieve data from a Notion database.');
    ## }
    ##};

    ##Blockly.JavaScript['get_notion_database'] = function(block) {
    ##  var databaseId = Blockly.JavaScript.valueToCode(block, 'DATABASE_ID', Blockly.JavaScript.ORDER_ATOMIC);
    ##  var statements_get_access = Blockly.JavaScript.statementToCode(block, 'get_access');
    ##
    ##};

## Blocks for creating, updating, or deleting Notion database entries:
    ##Possible format - 
    ##from a retrieved database, entries can be manipulated

## Blocks for Manipulating User Interface Elements:
    ##Blocks for creating custom UI elements within Notion, such as buttons, forms, or pop-up dialogs.
    ##Blocks for displaying data in different formats, like tables, charts, or calendars.
    ##Possible format - 

## Blocks for Automation and Triggers:
    ##Blocks for setting up triggers and automation rules, like sending notifications when specific conditions are met.
    ##Time-based triggers for scheduling actions in Notion.
    ##Possible format - 
    