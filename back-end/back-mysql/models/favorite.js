module.exports = function (sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
        // Making a empty Favorite model because the -
        // student_ID/ post_ID's foreign keys will be initiated
          
        });
  
    return Favorite;
};
