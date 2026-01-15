const express = require("express");
const dotenv = require("dotenv");
const {
  syncDatabase,
  testDatabaseConnection,
} = require("./utils/helperFunctions");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get("/", (req, res) => {
  res.json({
    message: "Server is running(test if CD Works). Access API endpoints at /api/users and /api/posts",
  });
});


app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Start server
async function startServer() {
  try {
    // Test database connection
    await testDatabaseConnection();

    // Sync database models
    // Options: { alter: true } or { force: true }
    // await syncDatabase({ alter: true });

    // Start listening
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();

module.exports = app;
