module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    prefName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    slackHandle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Student.associate = (models) => {
    Student.hasMany(models.Homework, { onDelete: "cascade" });
  };

  return Student;
};
