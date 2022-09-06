import Sequelize from "sequelize";

import User from "../app/controller/models/Users";

import databaseConfig from "../config/database";

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}
export default new Database();
