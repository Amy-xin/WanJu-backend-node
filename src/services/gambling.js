
export let checkwinner = (ctx) =>{
    let currentUser = ctx.request.body.user
    if(currentUser&&currentUser.userName=='xin_liang'){
        ctx.body = {
            'result':'恭喜！您中奖了'
        }
    }else if(currentUser&&currentUser.userName!='xin_liang'){
        ctx.body = {
            'result':'真遗憾！感谢您的参与'
        }    
    }else{
        ctx.body = {
            'result':'相关信息缺失！请检查'
        }
    }
}

import sequelize from '../lib/sequelize'
import modelDef from '../models/index'

export let testDB = async (ctx) =>{
    //console.log(modelDef.userDef)
    //console.log(sqlConfig)
    const User = sequelize.define('userlogin',modelDef.userlogin.userlogin,modelDef.userModel.usrLoginDBconfig) 
    User.create({ 
        name:ctx.request.body.user.userName,
        pwd:ctx.request.body.user.userPwd
        //status:ctx.request.body.user.status,
        //error_login:ctx.request.body.user.error_login
    })
        // .then(() => User.findOrCreate({where: {username: 'fnord'}, defaults: {job: 'something else'}}))
        // .spread((user, created) => {
        //     console.log(user.get({
        //     plain: true
        // }))
    //console.log(created)
    // await User.findAll({
    //     attributes: ['id', 'name'],
    //     where:{
    //        USER_NAME:ctx.request.body.user.userName 
    //     }
    // }).then(user=>{
    //     //console.log(ctx)
    //     console.log(user[0].dataValues)
    //     ctx.body = {
    //         "userInfo":user[0]
    //     }
    // })

    // let result = await sequelize.query("SELECT * FROM r_pub_user where \"USER_NAME\"="+"\'"+ctx.request.body.user.userName+"\'")
    // //console.log(result)
    // ctx.body = {
    //     result:JSON.stringify(myTableRows[0][0])
    // }
}