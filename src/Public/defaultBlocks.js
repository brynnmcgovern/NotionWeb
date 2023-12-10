var xmlString = '<xml xmlns="https://developers.google.com/blockly/xml">' +
'<block type="createclassmanager" id="|*nT426^Js?MG3aO+bXD" x="68" y="78">' +
    '<value name="databaseName">' +
        '<block type="text" id="yourTextBlockId">' +
            '<field name="TEXT">Enter Name Here</field>' +
        '</block>' +
    '</value>' +
    '<value name="databaseImage">' +
        '<block type="text" id="yourTextBlockId">' +
            '<field name="TEXT">Enter URL Here</field>' +
        '</block>' +
    '</value>' +
'</block>' +
'</xml>';

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var serializer = new XMLSerializer();
window.defaultBlocks = serializer.serializeToString(xmlDoc);
