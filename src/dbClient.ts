import {Sequelize} from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize: Sequelize = new Sequelize(config);

export default sequelize;