module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
      },
      username: {
        type: DataTypes.STRING(50),
      },
      password: {
        type: DataTypes.STRING(100),
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return User;
};
