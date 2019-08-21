module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    price: {
      type: DataTypes.INTEGER,
      defaultValue: "0",
      allowNull: false,
      validate: {
        len: [1]
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    }
  });

  Post.associate = function (models) {
    // We're saying that a Post should belong to an Mentor
    // A Post can't be created without an Mentor due to the foreign key constraint
    Post.belongsTo(models.Mentor, {
      foreignKey: {
        allowNull: false
      }
      });
      Post.belongsToMany(models.Student, {
        through: "Favorite",
        onDelete: "cascade"
      });
  };
  // 

  return Post;
};
