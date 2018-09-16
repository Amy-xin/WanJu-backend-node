export let Get = (ctx) => {
  ctx.body = {
    result: 'get',
    name: ctx.params.name,
    para: ctx.query
  }
}

export let Post = async (ctx) => {
  ctx.body = {
    result: 'post',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

export let Put = (ctx) => {
  ctx.body = {
    result: 'put',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

export let Delect = (ctx) => {
  ctx.body = {
    result: 'delect',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

export let checkwinners = (ctx) => {
  const play = require('../services/gambling')
  play.checkwinner(ctx)
}

export let  testDB = async (ctx) => {
  const play = require('../services/gambling')
  await play.testDB(ctx)
}

export let  findUserLoginByName = async (ctx) => {
  const play = require('../models/userlogin')
  await play.findUserLoginByName(ctx)
}

export let  addUserLogin = async (ctx) => {
  const play = require('../models/userlogin')
  await play.addUserLogin(ctx)
}

export let  deleteUserLogin = async (ctx) => {
  const play = require('../models/userlogin')
  await play.deleteUserLogin(ctx)
}

export let  updateUserLogin = async (ctx) => {
  const play = require('../models/userlogin')
  await play.updateUserLogin(ctx)
}

export let  findUserLoginAll = async (ctx) => {
  const play = require('../models/userlogin')
  await play.findUserLoginAll(ctx)
}

export let  findUserLoginNotBoss = async (ctx) => {
  const play = require('../models/userlogin')
  await play.findUserLoginNotBoss(ctx)
}

export let  findUserLoginStaff = async (ctx) => {
  const play = require('../models/userlogin')
  await play.findUserLoginStaff(ctx)
}

export let  addUserSign = async (ctx) => {
  const play = require('../models/userlogin')
  await play.addUserSign(ctx)
}