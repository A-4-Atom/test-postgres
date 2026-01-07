const { Sequelize } = require("sequelize");
require("dotenv").config();

// Create Sequelize instance using DATABASE_URL from environment
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // For Neon.tech and other cloud providers
    },
  },
  logging: false, // Set to console.log to see SQL queries
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, testConnection };
