## Setup Process:

### Prerequisites:
1. **Notion Account**: Ensure you have a Notion account.
2. **npm and Node.js**: Install the latest version of npm by running the following command in the command line: `npm install -g npm`. Install Node.js by following the instructions on [Node.js Download Page](https://nodejs.org/en/download/).
3. **Notion Integration Key**: Obtain a Notion integration key from [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations). Ensure the key has access to all capabilities.

### Setting Up NotionWeb Application:
1. Clone the GitHub repository for NotionWeb.
2. Navigate to the `src` folder.
3. In the terminal, navigate to the `src` folder and run the following command to initialize the project: 
    ```bash
    npm init -y
    ```
4. Install the Express module by running: 
    ```bash
    npm install express
    ```
5. Run the command: 
    ```bash
    npm install
    ```
6. To start the server, type the command: 
    ```bash
    node server.js
    ```
7. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) (replace `3000` with your server's port number).

## Utilization Process:

### Obtaining Required Information:
1. In the cloned repository, navigate to the `src` folder.
2. Create a `.env` file.
3. Paste the following code within the `.env` file:
    ```env
    NOTION_TOKEN=INTEGRATIONKEYHERE
    NOTION_PAGE_ID=PAGEIDHERE
    ```
   Replace `INTEGRATIONKEYHERE` with your Notion integration key and `PAGEIDHERE` with your Notion page ID.
   
4. Log into your Notion account and create an integration key at [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations). Ensure the key has access to all capabilities.
5. Copy your integration key and replace the `INTEGRATIONKEYHERE` portion in the `.env` file.
6. Open the Notion application, navigate to the page you want to manipulate, and copy the 32-character key from the search bar.
7. Paste this key into the `PAGEIDHERE` portion in the `.env` file, separating the characters in this format: 
    ```env
    xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    ```

Following these steps should ensure a successful setup and utilization of the NotionWeb Blockly project.

## To Further Add on To Notion Web:

### Adding Functionality to NotionWeb

To extend the current capabilities of NotionWeb, developers can introduce new blocks that interact directly with the Notion API. Follow the steps below to seamlessly integrate additional functionality:

1. Define New Blocks in `custom-blocks.js`:

- Open the `custom-blocks.js` file.
- Create new blocks to encapsulate the desired functionality.
- Within the code variables, specify the details of the API request, including the required parameters and authentication.

2. Specify API Endpoints in `server.js`:

- Navigate to the `server.js` file.
- Clearly define the endpoints for each individual block based on the specific functionality you intend to achieve.
- Ensure that the endpoints correspond to the blocks defined in `custom-blocks.js`.

3. Configuring API Requests:

- Utilize the [Notion API Reference](https://developers.notion.com/reference/intro) to locate the required API request formats.
- In the code, specify the necessary details such as authentication tokens, request parameters, and any additional configurations required by the Notion API.

## 4. Leverage Example Implementations:

- Refer to the [Notion API Documentation](https://developers.notion.com/docs) for comprehensive examples showcasing the capabilities of the Notion API.
- Gain insights into best practices and recommended approaches by studying the provided examples.

By following these steps, developers can seamlessly integrate additional features into NotionWeb. This documentation ensures clarity and provides resources for understanding API request formats and exploring practical implementations.
