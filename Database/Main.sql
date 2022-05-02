create table Klienti (
	Id int identity(1,1) primary key not null,
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
	Id int identity(1,1) primary key not null,
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
	Id int identity(1,1) primary key not null,
	Name varchar(30) not null,
	Email varchar(60) not null,
	Password varchar(30) not null,
	Address varchar(80) not null,
	PhoneNumber varchar(15) not null
)

create table Product (
	Id int identity(1,1) primary key not null,
	Name varchar(30) not null,
	Ingredients varchar(255) not null,
	Price bigint not null,
	Currency varchar(50) not null
	CuisineType varchar(30) not null,
	Picture varbinary(max) not null
)
alter table Food
add Restaurant int foreign key references Restaurant(Id) not null

create table MyCart(
	Id int primary key not null identity,
	KlientiId int not null foreign key references Klienti(Id),
	RestaurantId int not null foreign key references Restaurant(Id)
)


insert into Klienti values ('Dren', 'Ibrahimi', 'di53843@ubt-uni.net', 'test', '+38349724563', 'Rr. Street', '60000', 'Gjilan', 'Admin');
insert into Klienti values('Eros', 'Mehmeti', 'em52473@ubt-uni.net', 'test', '+383xxxxxx', 'Test2', '60000', 'Gjilan', 'Admin');
insert into Klienti values('Daorsa', 'Hyseni', 'dh51231@ubt-uni.net', 'Testt', '+383xxxxxxxx', 'Test Test Test', '60000', 'Gjilan', 'Admin');

delete from Klienti
DBCC CHECKIDENT ('[Klienti]', RESEED, 0);
