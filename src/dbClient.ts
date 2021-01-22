import {Sequelize} from 'sequelize';

const DBURL = process.env.DBURL || "postgres://kanban:kanban@localhost/kanban";

const sequelize: Sequelize = new Sequelize(DBURL);

export default sequelize;