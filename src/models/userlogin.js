/* jshint indent: 2 */
var Sequelize = require('sequelize');
//var sequelize = require('../lib/sequelize.js');
import sequelize from '../lib/sequelize'

var Userlogin = sequelize.define('userlogin', {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userPwd: {
      type: Sequelize.STRING,
      allowNull: false
    },
    position: {
      type: Sequelize.STRING,
      allowNull: true
    },
    rank: {
      type: Sequelize.STRING,
      allowNull: true
    },
    ramark: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    tableName: 'userlogin',
    freezeTableName: true,
    timestamps: false
  });


  // 创建表
// Userlogin.sync() 会创建表并且返回一个Promise对象
// 如果 force = true 则会把存在的表（如果users表已存在）先销毁再创建表
// 默认情况下 forse = false
//var user = Userlogin.sync({ force: false });

// 添加新用户
exports.addUserLogin = async(ctx) =>{
    // 向 user 表中插入数据
    await Userlogin.create({
      userName: ctx.request.body.userName,
      userPwd: ctx.request.body.userPwd,
      position:ctx.request.body.position,
      rank:ctx.request.body.rank
    }).then(result =>{
      //let result = this.findByName(userName)
          ctx.body = {
              "userInfo":result
          }
      }) 
};

exports.addUserSign = async(ctx) =>{
  // 向 user 表中插入数据
  await Userlogin.create({
    userName: ctx.request.body.userName,
    userPwd: ctx.request.body.userPwd,
    position:ctx.request.body.position
  }).then(result =>{
    //let result = this.findByName(userName)
        ctx.body = {
            "userInfo":result
        }
    }) 
};

// 通过用户名查找用户
exports.findUserLoginByName = async(ctx) =>{
  await Userlogin.findAll({
    //attributes: ['id', 'name'],
    where:{
      userName:ctx.request.body.userName 
    }
  }).then(user=>{
    //console.log(ctx)
    console.log(user[0].dataValues)
    ctx.body = {
        "userInfo":user[0]
    }
});  
  // var result= Userlogin.findOne({ where: { userName: ctx.request.body.userName } })
    // result.then(value=>{
    //   console.log(JSON.stringify(value));
    //   console.log(JSON.stringify(result));
    //   //return value;
    //   // ctx.body = {
    //   //   "username":value[0]
    //   // }
    // })
    // ctx.body = {
    //   result
    // }
};


//查找userlogin表全部数据
exports.findUserLoginAll = async(ctx) => {
  await sequelize.query("SELECT * FROM userlogin")
  .then(userloginInfo => {
    console.log(JSON.stringify(userloginInfo))
    ctx.body = {
      "userInfo":userloginInfo[0]
  }
  })
}

//查找userlogin表全部不是老板的
exports.findUserLoginNotBoss = async(ctx) => {
  await sequelize.query("SELECT * FROM userlogin A WHERE A.position NOT LIKE '%老板%'")
  .then(userloginInfo => {
    console.log(JSON.stringify(userloginInfo))
    ctx.body = {
      "userInfo":userloginInfo[0]
  }
  })
}

//查找userlogin表全部不是老板的
exports.findUserLoginStaff = async(ctx) => {
  await sequelize.query("SELECT * FROM userlogin A WHERE A.position LIKE '%员工%'")
  .then(userloginInfo => {
    console.log(JSON.stringify(userloginInfo))
    ctx.body = {
      "userInfo":userloginInfo[0]
  }
  })
}

exports.deleteUserLogin = async(ctx) => {
    await Userlogin.destroy({'where':{'userName':ctx.request.body.userName}})
    .then(result =>{
      //let result = this.findByName(userName)
          ctx.body = {
              "userInfo":"删除成功！！！！"
          }
      }) 
}

exports.updateUserLogin = async(ctx) => {
  //await User.findOne({ where: {userName:ctx.request.body.userName } })
  await Userlogin.update({'rank':ctx.request.body.newRank},{'where':{'userName':ctx.request.body.userName}})
  .then(result =>{
    //let result = this.findByName(userName)
        ctx.body = {
            "userInfo":"更新成功！！！！"
        }
    }) 
}
