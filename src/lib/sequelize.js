var Sequelize = require('sequelize');
import { DB as DBConfig, System as SystemConfig } from '../config'

export default new Sequelize(DBConfig.database, DBConfig.username, DBConfig.password, {
  host: DBConfig.host,
  //port:DBConfig.port,
  dialect: SystemConfig.db_type,
  dialectOptions: {
    timestamps: false
    //socketPath: '/tmp/mysql.sock' // 指定套接字文件路径
   },
  pool: {
    max: 50,
    min: 0,
    idle: 10000
  }
})
