create table Klienti (
	KlientiId int identity(1,1) primary key not null,
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
	CartId int identity(1,1) not null primary key,
	KlientiId int not null foreign key references Klienti(KlientiId),
	RestaurantId int not null foreign key references Restaurant(RestaurantId)
)