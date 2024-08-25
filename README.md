LAS File Viewer Project
This project is a web-based LAS file viewer that allows users to upload and view LAS files directly in the browser. The application is built using React.js, Next.js, MongoDB, Node.js, and Express.

<details> <summary><strong>Project Structure</strong></summary>
bash
Copy code
/las-file-viewer
├── /client                # Frontend (Next.js)
│   ├── /pages
│   │   └── index.js       # Main page of the frontend
│   ├── /styles
│   │   └── globals.css    # Global CSS styles
│   ├── /public
│   │   └── /uploads       # Static file serving (for uploaded files)
│   └── .env.local         # Environment variables for React
├── /uploads               # Directory for storing uploaded files
├── server.js              # Backend server
├── .env                   # Environment variables for Node.js
├── .gitignore             # Git ignore file
└── README.md              # Project README
</details> <details> <summary><strong>Installation</strong></summary>
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/las-file-viewer.git
cd las-file-viewer
Install Dependencies:

Navigate to the root directory and install backend dependencies:

bash
Copy code
npm install
Navigate to the /client directory and install frontend dependencies:

bash
Copy code
cd client
npm install
Create the uploads Folder:

In the root directory of the project, create a folder named uploads.
This folder will be used to store the LAS files uploaded through the application.
</details> <details> <summary><strong>Setup MongoDB Atlas</strong></summary>
Create a MongoDB Atlas Account:

Sign up at MongoDB Atlas.
Create a new cluster.
Set Up Your Database:

Create a new database in your cluster.
Create a new collection named lasfiles to store the uploaded LAS files.
Get Your MongoDB Connection String:

Navigate to your cluster in MongoDB Atlas.
Click on "Connect" and choose "Connect your application".
Copy the connection string provided.
Configure Environment Variables:

In the root directory of your project, you’ll find a file named .env.example.
Rename this file to .env and replace your-mongodb-connection-string-here with your actual MongoDB connection string:
plaintext
Copy code
MONGO_URI=your-mongodb-connection-string-here
Note: The .env file is included in .gitignore to ensure sensitive information is not exposed in the repository.

</details> <details> <summary><strong>Running the Project</strong></summary>
Start the Backend Server:

In the root directory, run the following command:
bash
Copy code
npm start
The backend server will run on http://localhost:5000.
Start the Frontend Server:

Navigate to the /client directory:
bash
Copy code
cd client
Run the following command:
bash
Copy code
npm run dev
The frontend will run on http://localhost:3000.
Access the Application:

Open your web browser and go to http://localhost:3000.
You can now upload LAS files and view them in the browser.
</details> 

<details> <summary><strong>Usage</strong></summary>

Uploading LAS Files:

Click on the "Upload File" button.
Select one or more LAS files from your computer.
The uploaded files will be listed, and you can click on a file name to view its contents.
Viewing LAS Files:

The selected LAS file will be displayed in the browser with the content formatted for easy viewing.
Customization:

You can customize the background color, viewer styles, button colors, and other UI elements by modifying the globals.css file in the /client/styles/ directory.
</details> 

 <summary><strong>Additional Information</strong></summary>

 - **Environment Variables**: The `.env` file is excluded from the repository using `.gitignore` for security reasons. Ensure that you create and configure this file locally using the provided `.env.example file`.
- **File Uploads**: Uploaded LAS files are stored in the `/uploads` directory on the server.
- **Development Mode**: For development, you can use VS Code with MongoDB for VS Code extension to manage database connections and interact with your MongoDB Atlas instance.
