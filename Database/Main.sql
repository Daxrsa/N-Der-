create table Klienti (
	KlientiId int identity(1,1) primary key not null,
	Name varchar(20) not null,
	Surname varchar(20) not null,
	Email varchar(60) not null,
	Password varchar(30) not null,
	PhoneNumber varchar(15) not null,
	StreetName varchar (40) not null,
	ZipCode varchar(12) not null,
	City varchar (30) not null,
	Role varchar(10) not null
)

create table Shperndares (
	ShperndaresId int identity(1,1) primary key not null,
	Name varchar(20) not null,
	Surname varchar(20) not null,
	Email varchar(60) not null,
	Password varchar(30) not null,
	PhoneNumber varchar(15) not null,
	StreetName varchar (40) not null,
	ZipCode varchar(12) not null,
	City varchar (30) not null
)

create table Restaurant(
	RestaurantId int identity(1,1) primary key not null,
	Name varchar(30) not null,
	Email varchar(60) not null,
	Password varchar(30) not null,
	Address varchar(80) not null,
	PhoneNumber varchar(15) not null
)

create table Food (
	FoodId int identity(1,1) primary key not null,
	Name varchar(30) not null,
	Ingredients varchar(255) not null,
	Price bigint not null,
	CuisineType varchar(30) not null,
	Picture varbinary(max) not null
)
alter table Food
add Restaurant int foreign key references Restaurant(RestaurantId) not null

create table MyCart(
	KlientiId int not null foreign key references Klienti(KlientiId),
	RestaurantId int not null foreign key references Restaurant(RestaurantId)
)

insert into Klienti values ('Dren', 'Ibrahimi', 'di53843@ubt-uni.net', 'test', '+38349724563', 'Rr. Street', '60000', 'Gjilan', 'Admin');
