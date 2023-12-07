require("dotenv").config();
const express = require("express");
//const bodyParser = require('body-parser');
const app = express();

// Notion SDK for JavaScript
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_TOKEN });

// <http://expressjs.com/en/starter/static-files.html>
app.use(express.static("public"))
app.use(express.json()) // for parsing application/json

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html")
})

// listen for requests
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});


app.post('/createClassManager', async function (req, res) {
    const pageId = process.env.NOTION_PAGE_ID;
    const title = req.body.dbName;
    const imageUrl = req.body.dbImageURL;
  
     // Perform Notion API request using the received data
    try{
      const response = await notion.databases.create({
        parent: {
          type: "page_id",
          page_id: pageId,
        },
        icon: {
          type: "emoji",
          emoji: "📖",
        },
        cover: {
          type: "external",
          external: {
            "url": imageUrl,
          },
        },
        title: [
          {
            type: "text",
            text: {
              content: title,
              link: null,
            },
          },
        ],
        properties: {
          "Class Name": {
            title: {},
          },
          "Class Time": {
            type: "rich_text",
            rich_text: {},
          },
          "Professor Name": {
            type: "rich_text",
            rich_text: {},
          },
          "Days of The Week": {
            type: "multi_select",
            multi_select: {
              options: [
                {
                  name: "Monday",
                  color: "gray",
                },
                {
                  name: "Tuesday",
                  color: "gray",
                },
                {
                  name: "Wednesday",
                  color: "gray",
                },
                {
                  name: "Thursday",
                  color: "gray",
                },
                {
                  name: "Friday",
                  color: "gray",
                },
              ],
            },
          },

        },
      });
      res.json({ message: "success!", data: response});
    }catch (error) {
      res.json({ message: "error", error });
    }
});
  
app.post('/addToClassManager', async function (req, res) {
  console.log("Request received at /addToClassManager", req.body);
  const db_id = req.body.dbID;
  const imageURL = req.body.imageURL;
  const className = req.body.className;
  const classTime = req.body.classTime;
  const professorName = req.body.professorName;

   // Perform Notion API request using the received data
  try{
    const response = await notion.pages.create({
      "parent": {
        "type": "database_id",
        "database_id": db_id,
      },
      "icon": {
        "type": "emoji",
        "emoji": "📖",
      },
      "cover": {
        "type": "external",
       "external": {
          "url": imageURL,
        },
      },
      "properties": {
        "Class Name": {
          "title": [
            {
                "text": {
                    "content": className,
                }
            }
        ]
        },
        "Class Time": {
          "rich_text": [
              {
                  "text": {
                      "content": classTime,
                  }
              }
          ]
        },
        "Professor Name": {
          "rich_text": [
              {
                  "text": {
                      "content": professorName,
                  }
              }
          ]
        },
      },
    });
    res.json({ message: "success!", data: response});
  }catch (error) {
    res.json({ message: "error", error });
  }
});
