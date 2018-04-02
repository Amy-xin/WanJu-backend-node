import Sequelize from 'sequelize'

export let usrDefinition = {
    id: {
        type: Sequelize.STRING,
        field: 'USER_ID',
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        field: 'USER_NAME'
    },
    pwd: {
        type: Sequelize.STRING,
        field: 'USER_PASSWORD'
    },
    status : {
        type: Sequelize.STRING,
        field: 'STATUS'
    },
    error_login:{
        type: Sequelize.STRING,
        field: 'ERROR_LOGIN'
    }
}

export let usrDBconfig = {
    timestamps: false,
    tableName: 'r_pub_user',
    freezeTableName: true
}