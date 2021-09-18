var { Client } = require('pg');

// declare PostgreSQL database parametres
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password',
  database: 'fileSystem'
})

// connect to PostgreSQL database
client.connect()
  .then(() => console.log('connection succeeded'))
  .catch(err => console.error(err.stack));

module.exports = client;
