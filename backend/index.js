const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Library System");
});

const PORT = process.env.PORT || 5000;

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
