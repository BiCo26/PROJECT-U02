DROP DATABASE IF EXISTS phase_base;

CREATE DATABASE phase_base;

\c phase_base

DROP TABLE IF EXISTS phasets;

CREATE TABLE phasets (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(255)
);
