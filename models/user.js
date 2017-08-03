const db = require('../db/config');

const User = {};

User.findAll = function(){
  return db.query('SELECT * FROM users');
};

User.findById = function(id){
  return db.oneOrNone(`
    SELECT *
    FROM users
    WHERE id = $1
  `, [id]);
};

User.create = function(users){
  return db.one(`
    INSERT INTO users
    (username, password_digest, email, zip)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [users.username, users.password_digest, users.email, users.zip]);
};

User.update = function(users, id){
  return db.one(`
    UPDATE users SET
    username = $1,
    password_digest = $2,
    email = $3,
    zip = $4
    WHERE id = $5
    RETURNING *
  `, [users.username, users.password_digest, users.email, users.zip, id]);
};

User.destroy = function(id){
  return db.none(`
    DELETE FROM users
    WHERE id = $1
  `, [id]);
};

module.exports = User;
