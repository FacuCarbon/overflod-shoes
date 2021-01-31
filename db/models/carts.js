module.exports = (sequelize, dataTypes) =>{

    let alias = 'Carts'
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        cantidad: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        remito: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: dataTypes.DATE,
            allowNull: false
        }
    }
    let config = {
        tableName: "carts"
        }

    const Cart = sequelize.define(alias, cols, config);
    return Cart;
}