const express = require("express");

const app = express();
const auth = require("./routes/auth");
const list = require("./routes/list");
const connectDB = require("./Connection/connection");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", auth);
app.use("/api/v2", list);

const PORT = 1000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
