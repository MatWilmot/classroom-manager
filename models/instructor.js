module.exports = (sequelize, DataTypes) => {
  const Instructor = sequelize.define("Instructor", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Instructor.associate = (models) => {
    Instructor.hasMany(models.Student, { onDelete: "cascade" });

    Instructor.hasMany(models.Assistant, { onDelete: "cascade" });
  };
  return Instructor;
};
