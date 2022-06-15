import connectDB from "./db/connect.js";
import "dotenv/config";
import express from "express";
import tasks from "./routes/tasks.js";

const app = express();

app.use(express.json());

app.use("/api/v1/tasks", tasks);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
