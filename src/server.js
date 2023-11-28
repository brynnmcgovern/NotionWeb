require("dotenv").config();
const express = require("express");
const app = express();

// Notion SDK for JavaScript
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });

// <http://expressjs.com/en/starter/static-files.html>
app.use(express.static("public"));

// <http://expressjs.com/en/starter/basic-routing.html>
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

// listen for requests
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

app.post("/databases", async function (request, response) {
    const pageId = process.env.NOTION_PAGE_ID;
    const title = request.body.dbName;
  
    try {
  // Notion API request!
      const newDb = await notion.databases.create({
        parent: {
          type: "page_id",
          page_id: pageId,
        },
        title: [
          {
            type: "text",
            text: {
              content: title,
            },
          },
        ],
        properties: {
          Name: {
            title: {},
          },
        },
      });
      response.json({ message: "success!", data: newDb });
    } catch (error) {
      response.json({ message: "error", error });
    }
  });
  