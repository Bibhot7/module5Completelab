const express = require("express");
const bodyParser = require("body-parser");
const calculatorRoutes = require("./routes/calculatorRoutes");
const userRoutes = require("./routes/userRoutes");
const testRoutes = require("./routes/myTestRoutes");

const app = express();
const PORT = process.env.PORT || 3000; // Use an environment variable for port or default to 3000

// Middleware
app.use(bodyParser.json());
app.use("/", express.static("public")); // Serve static files from the "public" directory

// Routes
app.use("/mytest", testRoutes);
app.use("/calculator", calculatorRoutes);
app.use("/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Hello World XD");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

