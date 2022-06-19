create database NDere
use NDere

drop database NDere

set Identity_Insert Klienti On
create table Klienti (
	KlientiId int primary key Identity(1,1) not null,
	Name varchar(max) not null,
	Surname varchar(max) not null,
	Email varchar(max) not null,
	PasswordHash varbinary(max) not null,
	PasswordSalt varbinary(max) not null,
	PhoneNumber varchar(max) not null,
	StreetName varchar (max) not null,
	ZipCode varchar(max) not null,
	City varchar (max) not null,
	Role varchar(max)
)
--set identity_insert Klienti Off

set Identity_Insert Shperndares On
create table Shperndares (
	ShperndaresId int primary key Identity(1,1) not null,
	Name varchar(max) not null,
	Surname varchar(max) not null,
	Email varchar(max) not null,
	PasswordHash varbinary(max) not null,
	PasswordSalt varbinary(max) not null,
	PhoneNumber varchar(max) not null,
	StreetName varchar (max) not null,
	ZipCode varchar(max) not null,
	City varchar (max) not null,
	NrPersonal varchar(max) not null,
	Licensa varbinary(max) 

)
--set Identity_Insert Shperndares Off

--set Identity_Insert Restaurant On
create table Restaurant(
	RestaurantId int primary key Identity(1,1) not null,
	Name varchar(max) not null,
	Email varchar(max) not null,
	PasswordHash varbinary(max) not null,
	PasswordSalt varbinary(max) not null,
	Address varchar(max) not null,
	PhoneNumber varchar(max) not null,
	RestaurantImage varbinary(max) 
)
--set Identity_Insert Restaurant Off

--set Identity_Insert Food On
create table Food (
	FoodId int primary key Identity(1,1) not null,
	Name varchar(max) not null,
	Ingredients varchar(max) not null,
	Price decimal(5, 2) not null,
	CuisineType varchar(max) not null,
	FoodImage varbinary(max) 
)
--set Identity_Insert Food Off

alter table Food
add Restaurant int foreign key references Restaurant(RestaurantId) not null

--set Identity_Insert MyCart On
create table MyCart(
	CartItemId int primary key Identity(1,1) not null,
	KlientiId int not null foreign key references Klienti(KlientiId),
	FoodId int not null foreign key references Food(FoodId)
)
--set Identity_Insert MyCart Off

select *
From MyCart

select *
From Klienti

select *
From Food

select *
From Restaurant

insert into MyCart values(1,2);
insert into MyCart values(2,2);

insert into Klienti values ('Dren', 'Ibrahimi', 'di53843@ubt-uni.net', 'test', '+38349724563', 'Rr. Street', '60000', 'Gjilan', 'Admin');
insert into Klienti values('Eros', 'Mehmeti', 'em52473@ubt-uni.net', 'test', '+383xxxxxx', 'Test2', '60000', 'Gjilan', 'Admin');
insert into Klienti values('Daorsa', 'Hyseni', 'dh51231@ubt-uni.net', 'Testt', '+383xxxxxxxx', 'Test Test Test', '60000', 'Gjilan', 'Admin');

delete from Klienti
DBCC CHECKIDENT ('[Klienti]', RESEED, 0);


insert into Food values ('Pizza Margharita','Cheese and tomato sauce',10,'Fast Food',1);

insert into Food values ('Spinach Pie','Spinach, yoghurt, eggs',30,'Traditional',2);