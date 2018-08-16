const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
const api = require("./routes/api");
app.use("/api", api);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
