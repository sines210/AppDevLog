module.exports = (sequelize, Sequelize, DataTypes)=>{
    const Transaction = sequelize.define("transaction", {
	id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
	transactions_wallet_id: {type: DataTypes.INTEGER, allowNull: false},
	flux: {type: DataTypes.STRING},
	address: {type: DataTypes.STRING},
	transaction_amount: {type: DataTypes.STRING, allowNull: false},
	currency: {type: DataTypes.STRING},
	crypto_amount: {type: DataTypes.STRING, allowNull: false},
	crypto_currency: {type: DataTypes.STRING},
	balance: {type: DataTypes.STRING},
    });
    return Transaction
}
