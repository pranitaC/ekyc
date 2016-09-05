var sequelize = require("../db/connection");
module.exports = function(sequelize, DataTypes){
  var transaction = sequelize.define('transaction', {
      id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1
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
            type: DataTypes.ENUM('INITIATED', 'AUTHENTICATION_REQUESTED', 'AUTHENTICATION_SUCCESS', 'COMPLETED'), 
            defaultValue: 'INITIATED'
                          
      },
      
      type: {
            type: DataTypes.ENUM('BIO', 'OTP', 'SCAN'),
            dafaultValue: 'BIO'                          // BIO, OTP, SCAN
      },
      
      bio_type: {
            type: DataTypes.ENUM('FMR', 'IIR'),          //FMR, IIR
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
  
  return transaction;
}
