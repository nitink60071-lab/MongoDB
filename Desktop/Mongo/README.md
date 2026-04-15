This project uses MongoDB as the database to store user and order data.
🔗 Database Connection
Make sure you have a MongoDB Atlas account or a local MongoDB setup.
Add the following in your .env file:
MONGO_URI=your_mongodb_connection_string
⚙️ How to Connect MongoDB
The project connects to MongoDB using Mongoose:
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
📂 Database Models
Example User Model:
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

export default mongoose.model("User", userSchema);