const db = require('../db/config');

const Moon = {};

Moon.findAll = function(){
  return db.query('SELECT * FROM phasets');
};

Moon.findById = function(id){
  return db.oneOrNone(`
    SELECT *
    FROM phasets
    WHERE id = $1
  `, [id]);
};

Moon.create = function(phasets){
  return db.one(`
    INSERT INTO phasets
    (title, description)
    VALUES ($1, $2)
    RETURNING *
  `, [phasets.title, phasets.description]);
};

Moon.update = function(phasets, id){
  return db.one(`
    UPDATE phasets SET
    title = $1,
    description = $2
    WHERE id = $3
    RETURNING *
  `, [phasets.title, phasets.description, id]);
};

Moon.destroy = function(id){
  return db.none(`
    DELETE FROM phasets
    WHERE id = $1
  `, [id]);
};

module.exports = Moon;
