using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NDereAPI.Migrations
{
    public partial class CreateInitial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CloudinarySettings",
                columns: table => new
                {
                    CloudName = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    ApiKey = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    ApiSecret = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "Klienti",
                columns: table => new
                {
                    KlientiId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Surname = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Email = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    PasswordHash = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    PasswordSalt = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    StreetName = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    ZipCode = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    City = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Role = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Klienti", x => x.KlientiId);
                });

            migrationBuilder.CreateTable(
                name: "Photo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Url = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    IsMain = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PhotoUploadResult",
                columns: table => new
                {
                    PublicId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    URL = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__PhotoUpl__87F1F39889C47D6A", x => x.PublicId);
                });

            migrationBuilder.CreateTable(
                name: "Restaurant",
                columns: table => new
                {
                    RestaurantId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Email = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    PasswordHash = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    PasswordSalt = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    Address = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    PhoneNumber = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    RestaurantImage = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Restaurant", x => x.RestaurantId);
                });

            migrationBuilder.CreateTable(
                name: "Shperndares",
                columns: table => new
                {
                    ShperndaresId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Surname = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Email = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    PasswordHash = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    PasswordSalt = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    StreetName = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    ZipCode = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    City = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    NrPersonal = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Licensa = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Shpernda__4F9632323B016038", x => x.ShperndaresId);
                });

            migrationBuilder.CreateTable(
                name: "Food",
                columns: table => new
                {
                    FoodId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Ingredients = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Price = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    CuisineType = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    FoodImage = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    Restaurant = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Food", x => x.FoodId);
                    table.ForeignKey(
                        name: "FK__Food__Restaurant__3E52440B",
                        column: x => x.Restaurant,
                        principalTable: "Restaurant",
                        principalColumn: "RestaurantId");
                });

            migrationBuilder.CreateTable(
                name: "MyCart",
                columns: table => new
                {
                    CartItemId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    KlientiId = table.Column<int>(type: "int", nullable: false),
                    FoodId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__MyCart__488B0B0AD18600B4", x => x.CartItemId);
                    table.ForeignKey(
                        name: "FK__MyCart__FoodId__4222D4EF",
                        column: x => x.FoodId,
                        principalTable: "Food",
                        principalColumn: "FoodId");
                    table.ForeignKey(
                        name: "FK__MyCart__KlientiI__412EB0B6",
                        column: x => x.KlientiId,
                        principalTable: "Klienti",
                        principalColumn: "KlientiId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Food_Restaurant",
                table: "Food",
                column: "Restaurant");

            migrationBuilder.CreateIndex(
                name: "IX_MyCart_FoodId",
                table: "MyCart",
                column: "FoodId");

            migrationBuilder.CreateIndex(
                name: "IX_MyCart_KlientiId",
                table: "MyCart",
                column: "KlientiId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CloudinarySettings");

            migrationBuilder.DropTable(
                name: "MyCart");

            migrationBuilder.DropTable(
                name: "Photo");

            migrationBuilder.DropTable(
                name: "PhotoUploadResult");

            migrationBuilder.DropTable(
                name: "Shperndares");

            migrationBuilder.DropTable(
                name: "Food");

            migrationBuilder.DropTable(
                name: "Klienti");

            migrationBuilder.DropTable(
                name: "Restaurant");
        }
    }
}
