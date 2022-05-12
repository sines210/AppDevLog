module.exports = (sequelize, Sequelize, DataTypes)=>{
    const Wallet = sequelize.define("wallet", {
	wallets_user_id: {type: DataTypes.INTEGER,  allowNull: false},
	currency: {type: DataTypes.STRING, allowNull: false}
    });
    return Wallet
}
