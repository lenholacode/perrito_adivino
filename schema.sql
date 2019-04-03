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
INSERT INTO items (description) VALUES ("You will have a good hair day.");
INSERT INTO items (description) VALUES ("El infortunio te espera en el metrobús");
INSERT INTO items (description) VALUES ("Hallarás la felicidad en tu vida, pero muy tarde.");
INSERT INTO items (description) VALUES ("You will read a fortune given by a magical doggo.");
INSERT INTO items (description) VALUES ("Los problemas estomacales te asechan en la esquina");
INSERT INTO items (description) VALUES ("Ten cuidado porque te están sonzacando");
INSERT INTO items (description) VALUES ("Probarás algo nuevo pero te va a doler");
INSERT INTO items (description) VALUES ("Alguien a quien quieres mucho pensará en ti");
INSERT INTO items (description) VALUES ("Por fin tendrás bigote");
INSERT INTO items (description) VALUES ("Pancho te deseará en secreto");
INSERT INTO items (description) VALUES ("Te convertirás en petróleo");
INSERT INTO items (description) VALUES ("Te saldrán dos canas más");
INSERT INTO items (description) VALUES ("La falta de sueño te carcomerá el alma");
INSERT INTO items (description) VALUES ("Nos veremos en el infierno");
INSERT INTO items (description) VALUES ("Votarás por el PRI");
INSERT INTO items (description) VALUES ("Llorarás pronto");
INSERT INTO items (description) VALUES ("Dudarás de tus preferencias muy pronto");
INSERT INTO items (description) VALUES ("Lo que amas te hará mucho daño. La comida.");
INSERT INTO items (description) VALUES ("Besarás muy rico a un taquito");
INSERT INTO items (description) VALUES ("Valdrás verga pero con estilo");
INSERT INTO items (description) VALUES ("Sonreirás al celular");
INSERT INTO items (description) VALUES ("La sopita te salvará la vida");
INSERT INTO items (description) VALUES ("Comerás con gente que amas");
INSERT INTO items (description) VALUES ("Escucharás canciones de Mecano");
INSERT INTO items (description) VALUES ("Tendrás un sueño chido hoy");
INSERT INTO items (description) VALUES ("Las enfermedades te rondan, bebe juguito");
INSERT INTO items (description) VALUES ("La pizza te ama tanto como tú a ella");
INSERT INTO items (description) VALUES ("El chocolate podría salvarte la vida");
