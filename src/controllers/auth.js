import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

/** 
 * HS256
*/
//const publicKey = fs.readFileSync(path.join(__dirname, '../../publicKey1.pub'))
// 检查授权是否合法
/*export let CheckAuth = (ctx) => {
  let token = ctx.request.header.authorization
  try {
    let decoded = jwt.verify(token.substr(7), publicKey)
    if (decoded.userInfo) {
      return {
        status: 1,
        result: decoded.userInfo
      }
    } else {
      return {
        status: 403,
        result: {
          errInfo: '没有授权'
        }
      }
    }
  } catch (err) {
    return {
      status: 503,
      result: {
        errInfo: '解密错误'
      }
    }
  }
}

export let Post = (ctx) => {
  switch (ctx.params.action) {
    case 'check':
      return CheckAuth(ctx).then(result => { ctx.body = result })
    default:
      return CheckAuth(ctx).then(result => { ctx.body = result })
  }
}

export let Login = (ctx) => {
  let token = jwt.sign({
    userInfo: ctx.params.userName
  }, publicKey, { expiresIn: '7d'})
  ctx.body = {
    'token': token
  }
} */

 

/*
*RS256
*/
const privateKey = fs.readFileSync(path.join(__dirname, '../../private.key'))
const publicKey = fs.readFileSync(path.join(__dirname, '../../public.key'))

export let Login = (ctx) => {
  let token = jwt.sign({
    userInfo: ctx.params.userName
  }, privateKey, {algorithm:'RS256',expiresIn: '3h'})
  ctx.body = {
    'token': token
  }
}

export let CheckAuth = (ctx) => {
  let token = ctx.request.header.authorization
  try {
    let decoded = jwt.verify(token, publicKey)
    if (decoded.userInfo) {
      return {
        status: 1,
        result: decoded.userInfo
      }
    } else {
      return {
        status: 403,
        result: {
          errInfo: '没有授权'
        }
      }
    }
  } catch (err) {
    return {
      status: 503,
      result: {
        errInfo: '解密错误'
      }
    }
  }
}

export let Post = (ctx) => {
  switch (ctx.params.action) {
    case 'check':
      return CheckAuth(ctx).then(result => { ctx.body = result })
    default:
      return CheckAuth(ctx).then(result => { ctx.body = result })
  }
}