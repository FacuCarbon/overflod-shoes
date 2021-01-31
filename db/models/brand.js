module.exports = (sequelize, dataTypes) =>{

    let alias = 'Brand'
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    }
    let config = {
        tableName: "brand",
        timestamps: false,
        underscored: false
    }
    const Brand = sequelize.define(alias, cols, config);
    Brand.associate = function(models){        
        Brand.hasMany(models.Products,{
            as : 'marca',
            foreignKey : 'id_marca'
        })

    }
    return Brand;
}