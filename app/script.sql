CREATE ROLE test1 WITH  LOGIN  INHERIT REPLICATION CONNECTION LIMIT -1 PASSWORD 'mycontraseñaaqui';

CREATE DATABASE test1 with owner=test1 encoding='UTF8' tablespace=pg_default CONNECTION LIMIT=-1;

create table usuario(
	email varchar(60) not null primary key,
	nombre varchar(50) not null,
	telefono varchar(12) not null,
	contrasenia varchar(30) not null,
	direccion varchar(100) not null,
	genero varchar(1) not null
);

insert into usuario values('myemail@gmail.com','Carla Perez', '76623981','11235813', 'Avenida Landivar', 'F');