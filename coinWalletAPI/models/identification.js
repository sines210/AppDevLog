module.exports = (sequelize, Sequelize, DataTypes)=>{
    const Identification = sequelize.define("identification", {
	id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
	email: {type: DataTypes.STRING, allowNull: false, unique: 'compositeIndex'},
	pass: {type: DataTypes.STRING,  allowNull: false},
	recovery: {type: DataTypes.STRING}
    });
    return Identification
}
