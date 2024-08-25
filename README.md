# LAS File Viewer Project

This project is a web-based LAS file viewer that allows users to upload and view LAS files directly in the browser. The application is built using React.js, Next.js, MongoDB, Node.js, and Express.

<details> <summary><strong>Project Structure</strong></summary>

```bash
/las-file-viewer
├── /client                # Frontend (Next.js)
│   ├── /pages
│   │   └── index.js       # Main page of the frontend
│   ├── /styles
│   │   └── globals.css    # Global CSS styles
│   └── .env.local         # Environment variables for React
├── /uploads               # Directory for storing uploaded files
├── server.js              # Backend server
├── .env                   # Environment variables for Node.js
├── .gitignore             # Git ignore file
└── README.md              # Project README
```
</details> 

<details> <summary><strong>Installation</strong></summary>

1. **Clone the Repository:**

```bash
git clone https://github.com/logusivam/Las-Viewer.git
cd las-file-viewer
```
2. **Install Dependencies:**

Navigate to the root directory and install backend dependencies:

```bash
npm install
```
Navigate to the `/client` directory and install frontend dependencies:

```bash
cd client
npm install
```
3. **Create the `uploads` Folder:**

    - In the root directory of the project, create a folder named `uploads`.
    - This folder will be used to store the LAS files uploaded through the application.
</details> 

<summary><strong>Setup MongoDB Atlas</strong></summary>

1. **Create a MongoDB Atlas Account:**

    - Sign up at [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).
    - Create a new cluster.

2. **Set Up Your Database:**

    - Create a new database in your cluster.
    - Create a new collection named `lasfiles` to store the uploaded LAS files.

3. **Get Your MongoDB Connection String:**

  - Navigate to your cluster in MongoDB Atlas.
  - Click on "Connect" and choose "Connect your application".
  - Copy the connection string provided.

4. **Configure Environment Variables:**

  - In the root directory of your project, you’ll find a file named `.env.example.`
  - Rename this file to `.env` and replace `your-mongodb-connection-string-here` with your actual MongoDB connection string:

```plaintext
MONGO_URI=your-mongodb-connection-string-here
```
**Note**: The `.env` file is included in `.gitignore` to ensure sensitive information is not exposed in the repository.


<details> <summary><strong>Running the Project</strong></summary>

1. **Start the Backend Server**:

  - In the root directory, run the following command:
```bash
npm start
```
  - The backend server will run on `http://localhost:5000`.

2. **Start the Frontend Server**:

  - Navigate to the `/client` directory:
```bash
cd client
```
  - Run the following command:
```bash
npm run dev
```
  - The frontend will run on `http://localhost:3000`.

3. **Access the Application**:

Open your web browser and go to `http://localhost:3000`.
You can now upload LAS files and view them in the browser.
</details> 

<details> <summary><strong>Usage</strong></summary>

1. **Uploading LAS Files:**

  - Click on the "Upload File" button.
  - Select one or more LAS files from your computer.
  - The uploaded files will be listed, and you can click on a file name to view its contents.

2. **Viewing LAS Files:**

  - The selected LAS file will be displayed in the browser with the content formatted for easy viewing.

3. **Customization:**

  - You can customize the background color, viewer styles, button colors, and other UI elements by modifying the `globals.css` file in the `/client/styles/ directory.`
</details> 

 <summary><strong>Additional Information</strong></summary>

 - **Environment Variables**: The `.env` file is excluded from the repository using `.gitignore` for security reasons. Ensure that you create and configure this file locally using the provided `.env.example file`.
- **File Uploads**: Uploaded LAS files are stored in the `/uploads` directory on the server.
- **Development Mode**: For development, you can use VS Code with MongoDB for VS Code extension to manage database connections and interact with your MongoDB Atlas instance.
