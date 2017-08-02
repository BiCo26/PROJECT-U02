DROP DATABASE IF EXISTS users_profile;

CREATE DATABASE IF EXISTS users_profile;

\c users_profile

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXIST users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255),
  password_digest INTEGER,
  email VARCHAR(255),
  zip INTEGER
);
