/* jshint indent: 2 */
import Sequelize from 'sequelize'
import sequelize from '../lib/sequelize'

export let userlogin ={
    userId: {
      type: Sequelize.INTEGER(255),
      field: 'userId',
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: Sequelize.STRING(255),
      field: 'userName'
    },
    userPwd: {
      type: Sequelize.STRING(255),
      field: 'userPwd'
    },
    remark: {
      type: Sequelize.STRING(255),
      field: 'remark'
    } 
    }

export let usrLoginDBconfig = {
      timestamps: false,
      tableName: 'userlogin',
      freezeTableName: true
}
  
  
//  export let loginTest = async (ctx) =>{
//   const UserLogin = sequelize.define('user',this.userlogin,this.usrLoginDBconfig) 
//   UserLogin 
//   .findOne({//还有find、findAll等方法 
//   where: { 
//   username: ctx.request.body.user.userName//查询条件 
//   } 
//   }).then(result=>{ 
//   console.log(result)//空时为null 
//   }) 
// }