import "dotenv/config";
import express from "express";
import tasks from "./routes/tasks.js";

const app = express();

app.use(express.json());

app.use("/api/v1/tasks", tasks);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is listening in port ${port}...`));
