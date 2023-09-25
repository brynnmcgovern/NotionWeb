// Initialize the workspace
var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    // Other configuration options here
});

// Define your toolbox blocks (you can customize this as needed)
var toolboxXML = `
<xml id="toolbox" style="display: none">
    <category name="Basic">
        <block type="text"></block>
        <!-- Add more blocks here -->
    </category>
</xml>
`;

// Set the toolbox
workspace.updateToolbox(toolboxXML);
