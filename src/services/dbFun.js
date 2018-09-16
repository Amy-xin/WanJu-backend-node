import sequelize from '../lib/sequelize'
import modelDef from '../models/index'

export let loginTest = async (ctx) =>{
     let result = sequelize.query("SELECT * FROM userlogin a WHERE a.userName ="+"\'"+ctx.request.body.user.userName+"\'")
    // console.log(result)
    // ctx.body = {
    //     result:JSON.stringify(myTableRows)
    // }
    

    // var users = yield UserLogin.findAll({
    //     'attributes': ['userName', 'wang']
    // });
    // console.log(users);

  UserLogin 
  .find({//还有find、findAll等方法 
  where: { 
  userName: ctx.request.body.user.userName//查询条件 
  } 
  }).then(result=>{ 
  console.log(result)//空时为null 
  }) 
}