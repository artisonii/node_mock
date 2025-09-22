const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("server is running");
});

// Add task

const tasks = [
  { id: 1, Title: "work", Description: "work is worship" },
  { id: 2, Title: "work1", Description: "pooja is worship" },
];

app.post("/tasks", (req, res) => {
  const { Title, Description } = req.body;
  const newTask = { id: tasks.length + 1, Title, Description };
  res.status(201).json({ message: "new task is created" });
  res.send(newTask);
});

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) {
    res.status(404).json({ message: "task not found" });
  }

  task.Title = Title || task.Title;
  task.Description = Description || task.Description;
  res.send(task);
});

app.delete("tasks/:id", (req, res) => {
  tasks = tasks.find((t) => t.id !== parseInt(req.params.id));
  if (!tasks) {
    res.json({ message: "task deleted succeesfully" });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
