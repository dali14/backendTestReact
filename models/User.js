const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  family_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  last_login: {
    type: DataTypes.DATE,
    allowNull: false
    },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
}
, {
    timestamps: true ,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
}
);
module.exports = User;