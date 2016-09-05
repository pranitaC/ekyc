var sequelize = require("../db/connection");
var Sequelize = require('sequelize');
var Transaction = sequelize.define('transaction', {
      id: {
            primaryKey: true,
            type: Sequelize.STRING,
      },
      
 /*     uid: {
            type: DataTypes.UUID,
            allowNull: false
      },
      
      reference_id: {
            type: DataTypes.UUID,
            allowNull: true
      },
            */
      status: {
            type: Sequelize.ENUM('INITIATED', 'AUTHENTICATION_REQUESTED', 'AUTHENTICATION_SUCCESS', 'COMPLETED'), 
            defaultValue: 'INITIATED'
                          
      },
      
      type: {
            type: Sequelize.ENUM('BIO', 'OTP', 'SCAN'),
            dafaultValue: 'BIO'                          // BIO, OTP, SCAN
      },
      
      bio_type: {
            type: Sequelize.ENUM('FMR', 'IIR'),          //FMR, IIR
            defaultValue: 'FMR'
      }
      
/*      note: {
            type: DataTypes.STRING,
            allowNull: true
      },
      
      device_type: {
            type: DataTypes.STRING,
            allowNull: false
      },
      
      device_vendor: {
            type: DataTypes.STRING,
            alloNull: true
      },
      
      device_mac_id: {
            type: DataTypes.STRING,
            allowNull: false
      }                                         */
        
  });
  
module.exports = Transaction; 
