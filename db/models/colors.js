module.exports = (sequelize, dataTypes) =>{

    let alias = 'Colors'
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        color: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    }
    let config = {
        tableName: "colors",
        timestamps: false,
        underscored: false
    }
    const Color = sequelize.define(alias, cols, config);
    

    return Color;
}