create table Klienti (
	KlientiId int identity(1,1) primary key not null,
	Name varchar(20),
	Surname varchar(20),
	Email varchar(60),
	Password varchar(30),
	PhoneNumber varchar(15),
	StreetName varchar (40),
	ZipCode varchar(12) not null,
	City varchar (30) not null,
	Role varchar(10)
)

create table Shperndares (
	ShperndaresId int identity(1,1) primary key not null,
	Name varchar(20),
	Surname varchar(20),
	Email varchar(60),
	Password varchar(30),
	PhoneNumber varchar(15),
	StreetName varchar (40),
	ZipCode varchar(12) not null,
	City varchar (30) not null
)

create table Restaurant(
	RestaurantId int identity(1,1) primary key not null,
	Name varchar(30),
	Email varchar(60),
	Password varchar(30),
	Address varchar(80),
	PhoneNumber varchar(15)
)

create table Food (
	FoodId int identity(1,1) primary key not null,
	Name varchar(30),
	Description varchar(255),
	Price int,
	Cuisine varchar(30),
	Picture varbinary(max),
)
alter table Food
add Restaurant int foreign key references Restaurant(RestaurantId)

create table MyCart(
	KlientiId int not null foreign key references Klienti(KlientiId),
	RestaurantId int not null foreign key references Restaurant(RestaurantId)
)

insert into Klienti values ('Dren', 'Ibrahimi', 'di53843@ubt-uni.net', 'test', '+38349724563', 'Rr. Street', '60000', 'Gjilan', 'Admin');