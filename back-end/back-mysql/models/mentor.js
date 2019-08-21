module.exports = function(sequelize, DataTypes) {
  var Mentor = sequelize.define("Mentor", {
    // Giving the Mentor model a name of type STRING
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      school: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      skills: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      passion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      photo: {
        type: DataTypes.BLOB,
        allowNull: false,
        defaultValue: "https://www.google.com/search?q=default+profile+picture&biw=1366&bih=657&tbm=isch&source=iu&ictx=1&fir=VPPYg01Cx_cHxM%253A%252C6Kz5LadU2UNulM%252C_&vet=1&usg=AI4_-kQdxwcpoqXvSPJUaI8Rw15tEGxaeA&sa=X&ved=2ahUKEwi35sHfrvjjAhWKhOAKHV5sDK8Q9QEwBHoECAcQDA#imgrc=VPPYg01Cx_cHxM:",
        // validate: {
        //   len: [1]
        // }
      }
      
  });

  Mentor.associate = function(models) {
    // Associating Mentor with Posts
    // When an Mentor is deleted, also delete any associated Posts
    Mentor.hasMany(models.Post, {
      onDelete: "cascade"
    });
    Mentor.hasMany(models.Student, {
      onDelete: "cascade"
    });
  };

  return Mentor;
};
