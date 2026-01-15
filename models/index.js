const User = require("./User");
const Post = require("./Post");

// Define relationships (without Comment)
User.hasMany(Post, { foreignKey: "userId", onDelete: "CASCADE" });
Post.belongsTo(User, { foreignKey: "userId" });

// Export models
module.exports = {
  User,
  Post,
};
