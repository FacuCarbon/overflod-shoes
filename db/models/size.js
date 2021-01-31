module.exports = (sequelize, dataTypes) =>{

    let alias = 'Size'
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        talle: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "size",
        timestamps: false,
        underscored: false
    }
    const Size = sequelize.define(alias, cols, config);
    Size.associate = function(models){        
        Size.hasMany(models.Products,{
            as : 'talles', 
            foreignKey : 'id_talles' 
        })

    }
    return Size;
}