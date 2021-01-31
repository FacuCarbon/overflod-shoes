module.exports = (sequelize, dataTypes) =>{

    let alias = 'Products';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        precio: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(300),
            allowNull: false
        },
        imagenes: {
            type: dataTypes.STRING(70),
            allowNull: false
        }

    }

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true
    }



    const Products = sequelize.define(alias, cols, config);
        Products.associate = function(models){
            Products.belongsTo(models.Size,{
                as : 'talle',
                foreignKey : 'id_talles'
            })
            Products.belongsTo(models.Categories,{
                as : 'categoria',
                foreignKey : 'id_categoria'
            })
            Products.belongsTo(models.Brand,{
                as : 'marca',
                foreignKey : 'id_marca'
            })
            Products.belongsTo(models.Colors,{
                as : 'color',
                foreignKey : 'id_colores'
            })
           Products.belongsToMany(models.Users,{
            as : 'usuarios',
            through : 'carts',
            foreignKey : 'id_producto',
            otherKey : 'id_usuario'
            })
        }
        return Products;
    }