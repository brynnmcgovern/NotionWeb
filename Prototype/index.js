const dotenv = require('dotenv');

dotenv.config()

console.log(process.env.NOTION_KEY)
console.log(process.env.NOTION_DATABASE_ID)

async function getDatabaseData(client, databaseId) {
    const response = await client.databases.query({
      database_id: databaseId,
    })
  
    console.log(response)
  }
  
  getDatabaseData(NOTION_CLIENT, DATABASE_ID)