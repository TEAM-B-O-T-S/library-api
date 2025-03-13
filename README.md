API Documentation for Library API

Overview

The Library API allows developers to access a collection of books. This guide covers how to set up the server.

SETTING UP THE SERVER

To set up the Library API server, follow these steps:

1. Clone the Repository:
   git clone https://github.com/TEAM-B-O-T-S/library-api.git
   cd library-api

2. Install Dependencies:
   Ensure you have Node.js installed, then run:

   npm install express joi dotenv nodemon mongoose mongodb

3. Create Environment Variables:
   Create a .env file in the root directory and add your MongoDB connection string:
   MONGODB_URI=your_mongodb_connection_string

4. Start the Server:
   Use the following command to run your server with Nodemon:
   npm run dev

5. Access the API:
The server will run on http://localhost:3000 (or your configured port).







