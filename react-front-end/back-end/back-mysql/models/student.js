module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
      // Giving the Student model a name of type STRING
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
        lastName: {
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
        photo: {
          type: DataTypes.BLOB,
          allowNull: false,
          defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeik1SW1yQvWiNtRAtmgBmGwva56nw4SgSQ6C8-JsrBT0VKtV",
          validate: {
            len: [1]
          }
        }
        
    });
  
    Student.associate = function(models) {
        // We're saying that a Student should belong to an Mentor
        // A Student can't be created without an Mentor due to the foreign key constraint
        Student.belongsTo(models.Mentor, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  
    return Student;
  };
  