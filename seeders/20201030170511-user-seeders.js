'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [
        {
          name:"Tian",
          profession:"Admin Micro",
          role:"admin",
          email:"sheptianbagjautama@gmail.com",
          password: await bcrypt.hash('admin123',10),
          created_at:new Date(),
          updated_at:new Date()
        },
        {
          name:"Alvi",
          profession:"Front End Developer",
          role:"student",
          email:"alvian@gmail.com",
          password: await bcrypt.hash('admin123',10),
          created_at:new Date(),
          updated_at:new Date()
        },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
