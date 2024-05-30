const express = require("express");

const app = express();
const auth = require("./routes/auth");
const connectDB = require("./Connection/connection");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", auth);

const PORT = 1000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
