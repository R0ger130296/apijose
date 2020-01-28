create database appjose;

use appjose;

create table persona(
  id int auto_increment not null primary key,
  nombre varchar(150),
  correo varchar(150)
);

create table menu(
  id int auto_increment not null  primary key,
  foto blob,
  descripcion varchar(150),
  precio decimal(2, 10),
  fecha date
);

create table pedido(
  id int auto_increment not null primary key,
  cantidad integer,
  idpersona int,
  foreign key (idpersona) references persona(id),
  idmenu int,
  foreign key (idmenu) references menu(id)
);
