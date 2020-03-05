module.exports = function(sequelize, DataTypes) {
    let Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    })

    Customer.associate = function(models) {
        // Customers belong to a burger
        Customer.belongsTo(models.Burger, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Customer;
}