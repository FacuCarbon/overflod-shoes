module.exports = (sequelize, dataTypes) =>{

    let alias = 'Categories'
    
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
        tableName: "categories",
        timestamps: false,
        underscored: false
    }
    const Category = sequelize.define(alias, cols, config);
    Category.associate = function(models){        
        Category.hasMany(models.Products,{
            as : 'Products', 
            foreignKey : 'id_categoria' 
        })

    }
    return Category;
}