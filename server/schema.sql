DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

INSERT INTO items (description) VALUES ("Morirás mañana");
INSERT INTO items (description) VALUES ("Hallarás dinero en tus pantalones. Emocionalmente.");
