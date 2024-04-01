const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')


class Comments extends Model {

    static async findUser(name, email){
        try {
            const comments = await Comments.findByPk(name)
            if(comments){
                return comments
            }else{
                return null
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

}

Comments.init({
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'Comments',
  tableName: 'COMMENTS',
  timestamps: false
});



// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }
//     static async findUser(name, email){
//         let sql = `SELECT * FROM USER WHERE name=? and email=?`;
//         try {
//             let user = await getRow(sql,[name, email])
//             return user ? user : null
//         } catch (error) {
//             console.log(error)
//             return null
//         }
//     }
// }

module.exports = Comments