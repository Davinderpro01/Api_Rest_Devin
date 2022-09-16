const {Sequelize} = require('sequelize');

const database= process.env.MYSQL_DATABASE;
const username = process.env.MISQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize (database, username, password, {
    host,
    dialect:'mysql'
});

const dbConnectMysql = async () => {
    try {
        await sequelize.authenticate();
        console.log('MYSQL CONEXIÓN CORRECTA');
    } catch (e) {
        console.log('MYSQL ERROR DE CONEXIÓN', e);
    }
};

module.exports = {sequelize, dbConnectMysql}