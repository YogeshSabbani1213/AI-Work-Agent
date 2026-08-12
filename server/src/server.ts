import dotenv from "dotenv";
import app from "./app.js";//app.js/ts ?  Because we're using Node's ES module system with:"module": "NodeNext"

// Load environment variables from the .env file.
dotenv.config();


// The port number tells Node.js where our backend server should listen.
const PORT = 5000;

// Start the Express server.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});