CREATE DATABASE image_saved;

\c image_saved;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  password TEXT NOT NULL,
  user_name TEXT NOT NULL UNIQUE
  email_address TEXT NOT NULL UNIQUE
);

CREATE TABLE images(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  image_json TEXT
);
