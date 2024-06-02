import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// GET route
app.get("/getData", (req, res) => {
  res.send("Hello World");
});

// POST route
app.post("/postData", (req, res) => {
    const newData = req.body;
    // Here you would typically save the data to the database
    console.log(req.body);
    // newData will contain the parsed JSON object
    res.status(201).send(`Data received: ${JSON.stringify(newData)}`);
});

// PUT route
app.put("/updateData/:id", (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    // Here you would typically update the data with the given id in the database
    res.send(`Data with id $(id) has been updated ti: ${JSON.stringify(updatedData)}`);
});

// DELETE route
app.delete("/deleteData/:id", (req, res) => {
    const id = req.params.id;
    // Here you would typically delete the data with the given id from the database
    res.send(`Data with id $(id) has been deleted`);
});

// Start the server
app.listen(5000, () => console.log("app is running, Server is running on port 5000"));