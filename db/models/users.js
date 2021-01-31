module.exports = (sequelize, dataTypes) =>{

    let alias = 'Users';
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
        },
        apellido: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rango: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        direccion: {
            type: dataTypes.STRING(100)
        },
        ciudad: {
            type: dataTypes.STRING(45)
        },
        provincia: {
            type: dataTypes.STRING(45)
        },
        fecha: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "users",
        timestamps: true,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config);
    User.associate = function(models){
        User.belongsToMany(models.Products,{
         as : 'productos',
         through : 'carts',
         foreignKey : 'id_usuario',
         otherKey : 'id_producto'
         })
     }
    return User;
}