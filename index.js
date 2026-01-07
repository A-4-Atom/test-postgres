const express = require("express");
const dotenv = require("dotenv");
const { sequelize, testConnection } = require("./config/database");

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
    message: "Server running on localhost:" + PORT,
  });
});

// Import routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Start server
async function startServer() {
  try {
    // Test database connection
    await testConnection();

    // Sync database models (use { force: true } to drop and recreate tables)
    await sequelize.sync({ alter: true });
    console.log("✅ Database models synced");

    // Start listening
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();

module.exports = app;
