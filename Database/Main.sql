create database NDere
use NDere

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

create table Food (
	FoodId int primary key Identity(1,1) not null,
	Name varchar(max) not null,
	Ingredients varchar(max) not null,
	Price decimal(5, 2) not null,
	CuisineType varchar(max) not null,
	FoodImage varbinary(max) 
)

alter table Food
add Restaurant int foreign key references Restaurant(RestaurantId) not null

create table MyCart(
	CartItemId int primary key Identity(1,1) not null,
	KlientiId int not null foreign key references Klienti(KlientiId),
	FoodId int not null foreign key references Food(FoodId)
)

delete from Klienti
DBCC CHECKIDENT ('[Klienti]', RESEED, 0);

