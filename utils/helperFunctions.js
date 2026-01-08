const { sequelize } = require("../config/database");
const models = require("../models");

/**
 * Sync database models with the database
 * @param {Object} options - Sequelize sync options
 * @param {Boolean} options.force - Drop tables before creating (WARNING: deletes all data)
 * @param {Boolean} options.alter - Alter tables to match models (safer than force)
 * @returns {Promise<void>}
 */
async function syncDatabase(options = {}) {
  try {
    // Default to alter mode if no option specified
    const syncOptions = options.force
      ? { force: true }
      : options.alter
      ? { alter: true }
      : {};

    console.log("🔄 Syncing database models...");

    await sequelize.sync(syncOptions);

    console.log("✅ Database models synced successfully");

    if (options.force) {
      console.log("⚠️  WARNING: All tables were dropped and recreated");
    }
  } catch (error) {
    console.error("❌ Database sync failed:", error);
    throw error;
  }
}

/**
 * Test database connection
 * @returns {Promise<Boolean>}
 */
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection established successfully");
    return true;
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    return false;
  }
}

module.exports = {
  syncDatabase,
  testDatabaseConnection,
};
