module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      startDate: {
        type: DataTypes.DATEONLY,
      },
      endDate: {
        type: DataTypes.DATEONLY,
      },
      name: {
        type: DataTypes.STRING(50),
      },
      issuer: {
        type: DataTypes.STRING(50),
      },
      number: {
        type: DataTypes.STRING(50),
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Activity;
};
