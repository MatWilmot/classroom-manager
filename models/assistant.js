module.exports = (sequelize, DataTypes) => {
  const Assistant = sequelize.define("Assistant", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    prefName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Assistant;
};
