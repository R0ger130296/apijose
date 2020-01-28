create database appjose;

use appjose;

create table personas(
  id int auto_increment not null primary key,
  nombre varchar(150),
  correo varchar(150)
);

create table menus(
  id int auto_increment not null  primary key,
  foto blob,
  descripcion varchar(150),
  precio decimal(10, 2),
  fecha date
);

create table pedidos(
  id int auto_increment not null primary key,
  cantidad integer,
  idpersona int,
  foreign key (idpersona) references personas(id),
  idmenu int,
  foreign key (idmenu) references menus(id)
);

insert into personas(nombre, correo) values('admin', 'admin@gmail.com');