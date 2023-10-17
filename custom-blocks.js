Blockly.HSV_SATURATION = 1;

//functions that create and load notion databases - located in the notion dtabase tab
Blockly.Blocks['load_database'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Notion Database ID:")
        .appendField(new Blockly.FieldTextInput("databaseID"), "databaseID");
    this.setPreviousStatement(true, "NotionDatabase");
    this.setNextStatement(true, "databasemanipulation");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['load_database'] = function(block, generator) {
  var text_databaseid = block.getFieldValue('databaseID');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

Blockly.Blocks['create_new_database'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("New Database Name:")
        .appendField(new Blockly.FieldTextInput("New Database Name:"), "databaseName");
    this.appendDummyInput()
        .appendField("Database View: ")
        .appendField(new Blockly.FieldDropdown([["Table","OPTIONNAME"], ["Board","OPTIONNAME"], ["Timeline","OPTIONNAME"], ["Calendar","OPTIONNAME"], ["List","OPTIONNAME"], ["Gallery","OPTIONNAME"]]), "ViewType");
    this.appendStatementInput("NAME")
        .setCheck("databaseproperty")
        .appendField("Database Properties:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "NotionDatabase");
    this.setNextStatement(true, "databasemanipulation");
    this.setColour(230);
 this.setTooltip("\"Create Your Own Custom Database");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['create_new_database'] = function(block, generator) {
  var text_databasename = block.getFieldValue('databaseName');
  var dropdown_viewtype = block.getFieldValue('ViewType');
  var statements_name = generator.statementToCode(block, 'NAME');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

Blockly.Blocks['databaseproperty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Database Property Name:")
        .appendField(new Blockly.FieldTextInput("Property Name:"), "property name");
    this.appendDummyInput()
        .appendField("Property Type:")
        .appendField(new Blockly.FieldDropdown([["Checkbox","checkBox"], ["Date","date"], ["Email","email"], ["People","people"], ["Number","number"], ["Text","text"], ["Status","status"]]), "property type");
    this.setPreviousStatement(true, "databaseproperty");
    this.setNextStatement(true, "databaseproperty");
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['databaseproperty'] = function(block, generator) {
  var text_property_name = block.getFieldValue('property name');
  var dropdown_property_type = block.getFieldValue('property type');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

Blockly.Blocks['multiselectdatabaseproperty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Multiselect Database Property Name:")
        .appendField(new Blockly.FieldTextInput("Property Name:"), "property name");
    this.appendStatementInput("Multiselect Option")
        .setCheck("multiselection option")
        .appendField("Selection Options:");
    this.setPreviousStatement(true, "databaseproperty");
    this.setNextStatement(true, "databaseproperty");
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['multiselectdatabaseproperty'] = function(block, generator) {
  var text_property_name = block.getFieldValue('property name');
  var statements_multiselect_option = generator.statementToCode(block, 'Multiselect Option');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

Blockly.Blocks['multiselect_option'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Selection Option:")
        .appendField(new Blockly.FieldTextInput("Option"), "multiselection option");
    this.setPreviousStatement(true, "multiselection option");
    this.setNextStatement(true, "multiselection option");
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['multiselect_option'] = function(block, generator) {
  var text_multiselection_option = block.getFieldValue('multiselection option');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

Blockly.Blocks['make_connection'] = {
  init: function() {
    this.appendValueInput("notion_api_key")
        .setCheck("notion_api_key")
        .appendField("Enter Notion Integration Key:");
    this.appendValueInput("notion_page_ID")
        .setCheck("notion_page_ID")
        .appendField("Enter Notion Page ID:");
    this.appendStatementInput("NotionAPIRequests")
        .setCheck("NotionDatabase")
        .appendField("Notion API Requests:");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['make_connection'] = function(block, generator) {
  var value_notion_api_key = generator.valueToCode(block, 'notion_api_key', javascript.Order.ATOMIC);
  var value_notion_page_id = generator.valueToCode(block, 'notion_page_ID', javascript.Order.ATOMIC);
  var statements_notionapirequests = generator.statementToCode(block, 'NotionAPIRequests');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};


Blockly.Blocks['notion_api_key'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Notion API Token/Key:")
        .appendField(new Blockly.FieldTextInput("YOUR_API_KEY"), "API_KEY");
    this.setOutput(true, "notion_api_key");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['notion_page_ID'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Notion Page ID:")
        .appendField(new Blockly.FieldTextInput("Page ID"), "notion_page_ID");
    this.setOutput(true, "notion_page_ID");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//functions that manipulate a given notion databases - located in the notion functions tab

  
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
  }
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
  var code = `<div id="${value_id}" class="${value_class}" content="${value_content}" ></div>`;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};


// // Usage of the createDiv block to generate HTML code
// var divId = "myDiv";
// var divClass = "myClass";
// var divContent = "This is a div element";
// var htmlCode = createDiv(divId, divClass, divContent);

// Custom Blockly block for creating a <p> element
Blockly.Blocks['createParagraph'] = {
  init: function() {
    this.appendValueInput('content')
        .setCheck('String')
        .appendField("Create <p> with Content");
    this.setOutput(true, 'String');
    this.setColour(230);
    this.setTooltip('Create Paragraph');
    this.setHelpUrl('https://www.notion.so/');
  }
};

Blockly.JavaScript['createParagraph'] = function(block) {
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  
  // Generate HTML code for creating a <p> element
  var code = `<p>${value_content}</p>`;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// var paragraphContent = "This is a paragraph.";
// var paragraphHtml = createParagraph(paragraphContent);

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

// var linkUrl = "https://example.com";
// var linkText = "Visit Example Website";
// var linkHtml = createLink(linkUrl, linkText);


Blockly.Blocks['createHeading'] = {
init: function() {
this.appendValueInput('text')
  .setCheck('String')
  .appendField("Create heading with text");
this.appendValueInput('level')
  .setCheck('Number')
  .appendField("of level");
this.setOutput(true, 'String');
this.setColour(160);
this.setTooltip('');
this.setHelpUrl('');
}
};

Blockly.JavaScript['createHeading'] = function(block) {
var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
var level = Blockly.JavaScript.valueToCode(block, 'level', Blockly.JavaScript.ORDER_ATOMIC);

// Generate HTML code for creating headings
var code = `<h${level}>${text}</h${level}>`;

return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['changeTextColor'] = {
init: function() {
this.appendValueInput('text')
  .setCheck('String')
  .appendField("Change color of");
this.appendValueInput('color')
  .setCheck('Colour')
  .appendField("to color");
this.setOutput(true, 'String');
this.setColour(160);
this.setTooltip('');
this.setHelpUrl('');
}
};

Blockly.JavaScript['changeTextColor'] = function(block) {
var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);

// Generate HTML code for changing text color
var code = `<span style="color: ${color}">${text}</span>`;

return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['boldText'] = {
init: function() {
this.appendValueInput('text')
  .setCheck('String')
  .appendField("Bold");
this.setOutput(true, 'String');
this.setColour(160);
this.setTooltip('');
this.setHelpUrl('');
}
};

Blockly.JavaScript['boldText'] = function(block) {
var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);

// Generate HTML code for bolding text
var code = `<strong>${text}</strong>`;

return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['italicizeText'] = {
init: function() {
this.appendValueInput('text')
  .setCheck('String')
  .appendField("Italicize");
this.setOutput(true, 'String');
this.setColour(160);
this.setTooltip('');
this.setHelpUrl('');
}
};

Blockly.JavaScript['italicizeText'] = function(block) {
var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);

// Generate HTML code for italicizing text
var code = `<em>${text}</em>`;

return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['changeTextSize'] = {
init: function() {
this.appendValueInput('text')
  .setCheck('String')
  .appendField("Change size of");
this.appendValueInput('size')
  .setCheck('Number')
  .appendField("to size");
this.setOutput(true, 'String');
this.setColour(160);
this.setTooltip('');
this.setHelpUrl('');
}
};

Blockly.JavaScript['changeTextSize'] = function(block) {
var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
var size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);

// Generate HTML code for changing text size
var code = `<span style="font-size: ${size}px">${text}</span>`;

return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['changeFont'] = {
init: function() {
this.appendValueInput('text')
  .setCheck('String')
  .appendField("Change font of");
this.appendValueInput('font')
  .setCheck('String')
  .appendField("to font");
this.setOutput(true, 'String');
this.setColour(160);
this.setTooltip('');
this.setHelpUrl('');
}
};

Blockly.JavaScript['changeFont'] = function(block) {
var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
var font = Blockly.JavaScript.valueToCode(block, 'font', Blockly.JavaScript.ORDER_ATOMIC);

// Generate HTML code for changing font
var code = `<span style="font-family: ${font}">${text}</span>`;

return [code, Blockly.JavaScript.ORDER_NONE];
};

//Custom block for ordered lists
Blockly.Blocks['createOrderedList'] = {
  init: function() {
    this.appendStatementInput('ITEMS')
        .setCheck(null)
        .appendField('Create Ordered List');
    this.setOutput(true, 'String');
    this.setColour(230);
    this.setTooltip('Create an ordered list in HTML');
  }
};

Blockly.JavaScript['createOrderedList'] = function(block) {
  var statements_items = Blockly.JavaScript.statementToCode(block, 'ITEMS');
  
  // Generate HTML code for the ordered list
  var code = `<ol>${statements_items}</ol>`;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//Custom block for unordered lists
Blockly.Blocks['createUnorderedList'] = {
  init: function() {
    this.appendStatementInput('ITEMS')
        .setCheck(null)
        .appendField('Create Unordered List');
    this.setOutput(true, 'String');
    this.setColour(230);
    this.setTooltip('Create an unordered list in HTML');
  }
};

Blockly.JavaScript['createUnorderedList'] = function(block) {
  var statements_items = Blockly.JavaScript.statementToCode(block, 'ITEMS');
  
  // Generate HTML code for the unordered list
  var code = `<ul>${statements_items}</ul>`;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//Custom block for hyperlinks
Blockly.Blocks['createHyperlink'] = {
  init: function() {
    this.appendValueInput('URL')
        .setCheck('String')
        .appendField('Create Hyperlink with URL');
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('and Text');
    this.setOutput(true, 'String');
    this.setColour(230);
    this.setTooltip('Create a hyperlink in HTML');
  }
};

Blockly.JavaScript['createHyperlink'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  
  // Generate HTML code for the hyperlink
  var code = `<a href="${value_url}">${value_text}</a>`;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//Custom block for allowing users to insert and display images
Blockly.Blocks['insertImage'] = {
  init: function() {
    this.appendValueInput('IMAGE_URL')
        .setCheck('String')
        .appendField('Insert Image with URL');
    this.appendValueInput('ALT_TEXT')
        .setCheck('String')
        .appendField('and Alt Text');
    this.setOutput(true, 'String');
    this.setColour(230);
    this.setTooltip('Insert an image in HTML');
  }
};

Blockly.JavaScript['insertImage'] = function(block) {
  var value_imageUrl = Blockly.JavaScript.valueToCode(block, 'IMAGE_URL', Blockly.JavaScript.ORDER_ATOMIC);
  var value_altText = Blockly.JavaScript.valueToCode(block, 'ALT_TEXT', Blockly.JavaScript.ORDER_ATOMIC);

  // Generate HTML code for inserting an image
  var code = `<img src="${value_imageUrl}" alt="${value_altText}">`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

// To Add A Table on Notion 
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
  var code = `<div id="${value_id}" class="${value_class}">${value_content}</div>`;
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

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
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Custom Blockly block for creating an <a> link
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
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};




// To create a Checklist 
Blockly.Blocks['generateHTML'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Generate HTML Code");
    this.appendStatementInput("elements")
        .setCheck(null)
        .appendField("Elements");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['generateHTML'] = function(block) {
  var statements_elements = Blockly.JavaScript.statementToCode(block, 'elements');
  
  // Wrap the generated HTML code in a <html> and <body> tags for completeness
  var htmlCode = '<html>\n<head>\n</head>\n<body>\n' + statements_elements + '</body>\n</html>';
  
  return [htmlCode, Blockly.JavaScript.ORDER_NONE];
};

// Custom Blockly block for text input
Blockly.Blocks['textInput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('Default Text'), 'TEXT');
    this.setOutput(true, 'String');
    this.setColour(230);
    this.setTooltip('Enter text here');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['textInput'] = function(block) {
  var text = block.getFieldValue('TEXT');
  // Return the input text as a string
  return [text, Blockly.JavaScript.ORDER_ATOMIC];
};

// Custom Blockly block for integer input
Blockly.Blocks['integerInput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 1), 'NUMBER');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Enter an integer');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['integerInput'] = function(block) {
  var number = parseFloat(block.getFieldValue('NUMBER'));
  // Return the input number as a number
  return [number, Blockly.JavaScript.ORDER_ATOMIC];
};



// // Here's an example of how to use the generateHTML block to create an HTML page with a <div>, <p>, and <a> element:
// var divId = "myDiv";
// var divClass = "myClass";
// var divContent = "This is a div element";
// var paragraphContent = "This is a paragraph.";
// var linkUrl = "https://example.com";
// var linkText = "Visit Example Website";

generateHTML(function() {
  createDiv(divId, divClass, divContent);
  createParagraph(paragraphContent);
  createLink(linkUrl, linkText);
});