module.exports = (sequelize, DataTypes) => {
  const Homework = sequelize.define("Homework", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    deadline: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    grade: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "-",
    },
  });

  Homework.associate = (models) => {
    Homework.belongsTo(models.Student, { foreignKey: { allowNull: false } });
  };

  return Homework;
};
