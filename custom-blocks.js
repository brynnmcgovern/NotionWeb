Blockly.HSV_SATURATION = 1;

Blockly.Blocks['Notion_Page_ID'] = {
  init: function() {
    this.appendValueInput("Page ID")
        .setCheck("String")
        .appendField('Notion Page');
    this.setOutput(false);
    this.setColour(160);
    this.setTooltip('Provide the ID of the desired notion page');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  }
};

Blockly.JavaScript['Notion_Page_ID'] = function(nlock) {
  
}


Blockly.Blocks['get_notion_database'] = {
    init: function() {
      this.appendValueInput('DATABASE_ID')
          .setCheck('String')
          .appendField('Retrieve data from Notion database with ID');
      this.appendStatementInput('get_access')
          .appendField('get_access');
      this.setInputsInline(true);
      this.setOutput(true, 'Array');
      this.setColour(230);
      this.setTooltip('Retrieve data from a Notion database.');
    }
  };
  
  Blockly.JavaScript['get_notion_database'] = function(block) {
    var databaseId = Blockly.JavaScript.valueToCode(block, 'DATABASE_ID', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_get_access = Blockly.JavaScript.statementToCode(block, 'get_access');
    
    //Generate code to retrieve data from the Notion database using the provided databaseId
    
    var code = 'temp code'; // Your code here
    
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };
  
  Blockly.Blocks['database_entry_operation'] = {
    init: function() {
      this.appendValueInput('DATA')
          .setCheck('String')
          .appendField(new Blockly.FieldDropdown([
              ['Create', 'CREATE'],
              ['Update', 'UPDATE'],
              ['Delete', 'DELETE']
          ]), 'OPERATION')
          .appendField('database entry with data:');
      this.setInputsInline(true);
      this.setOutput(true, 'Boolean'); // Assuming it returns true or false
      this.setColour(160);
      this.setTooltip('Perform create, update, or delete operation on a Notion database entry.');
    }
  };
  Blockly.JavaScript['database_entry_operation'] = function(block) {
    var operation = block.getFieldValue('OPERATION');
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC);
    
    // Generate code to perform the selected operation on a Notion database entry using the provided data
    
    var code = '...'; // Your code here
    
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };
 
  Blockly.Blocks['customize_interface'] = {
    init: function() {
      this.appendValueInput('CUSTOMIZATION')
          .setCheck('String')
          .appendField('Customize user interface with:');
      this.setInputsInline(true);
      this.setOutput(true, 'Boolean'); // Assuming it returns true or false
      this.setColour(290);
      this.setTooltip('Customize the user interface in Notion.');
    }
  };
  
  Blockly.JavaScript['customize_interface'] = function(block) {
    var customization = Blockly.JavaScript.valueToCode(block, 'CUSTOMIZATION', Blockly.JavaScript.ORDER_ATOMIC);
    
    // Generate code to customize the user interface in Notion using the provided customization data
    
    var code = '...'; // Your code here
    
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };
  
Blockly.Blocks['add_task_to_notion'] = {
  init: function () {
    this.appendValueInput('TASK')
        .setCheck('String')
        .appendField('Add task to Notion:');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Add a task to Notion.');
    this.setHelpUrl('https://www.notion.so/');
  },
};




// Custom Blockly block for outputting HTML
Blockly.Blocks['outputHTML'] = {
  init: function() {
    this.setOutput(true, 'String');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['outputHTML'] = function(block) {
  // Replace this with your actual HTML code generation logic
  var htmlCode = '<div>This is an example HTML code</div>';
  
  // Return the HTML code as a string
  return [htmlCode, Blockly.JavaScript.ORDER_NONE];
};

// Custom Blockly block for creating a <div> element
Blockly.Blocks['createDiv'] = {
  init: function() {
    this.appendValueInput('id')
        .setCheck('String')
        .appendField("Create <div> with ID");
    this.appendValueInput('class')
        .setCheck('String')
        .appendField("and Class");
    this.appendValueInput('content')
        .setCheck('String')
        .appendField("and Content");
    this.setOutput(true, 'String');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['createDiv'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_class = Blockly.JavaScript.valueToCode(block, 'class', Blockly.JavaScript.ORDER_ATOMIC);
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  
  // Generate HTML code for creating a <div> element
  var code = `<div id="${value_id}" class="${value_class}" content="${value_content}"></div>`;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};


// Usage of the createDiv block to generate HTML code
var divId = "myDiv";
var divClass = "myClass";
var divContent = "This is a div element";
var htmlCode = createDiv(divId, divClass, divContent);

// Custom Blockly block for creating a <p> element
Blockly.Blocks['createParagraph'] = {
  init: function() {
    this.appendValueInput('content')
        .setCheck('String')
        .appendField("Create <p> with Content");
    this.setOutput(true, 'String');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['createParagraph'] = function(block) {
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  
  // Generate HTML code for creating a <p> element
  var code = `<p>${value_content}</p>`;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};
var paragraphContent = "This is a paragraph.";
var paragraphHtml = createParagraph(paragraphContent);
Blockly.Blocks['createLink'] = {
  init: function() {
    this.appendValueInput('url')
        .setCheck('String')
        .appendField("Create <a> link with URL");
    this.appendValueInput('text')
        .setCheck('String')
        .appendField("and Text");
    this.setOutput(true, 'String');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.JavaScript['createLink'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  
  // Generate HTML code for creating an <a> link
  var code = `<a href="${value_url}">${value_text}</a>`;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};
var linkUrl = "https://example.com";
var linkText = "Visit Example Website";
var linkHtml = createLink(linkUrl, linkText);
