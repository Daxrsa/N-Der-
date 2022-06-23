using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NDereAPI.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            /*migrationBuilder.CreateTable(
                name: "Klienti",
                columns: table => new
                {
                    KlientiId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    Surname = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    Email = table.Column<string>(type: "varchar(60)", unicode: false, maxLength: 60, nullable: false),
                    Password = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    PhoneNumber = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: false),
                    StreetName = table.Column<string>(type: "varchar(40)", unicode: false, maxLength: 40, nullable: false),
                    ZipCode = table.Column<string>(type: "varchar(12)", unicode: false, maxLength: 12, nullable: false),
                    City = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    Role = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Klienti", x => x.KlientiId);
                });

            migrationBuilder.CreateTable(
                name: "Restaurant",
                columns: table => new
                {
                    RestaurantId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    Email = table.Column<string>(type: "varchar(60)", unicode: false, maxLength: 60, nullable: false),
                    Password = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    Address = table.Column<string>(type: "varchar(80)", unicode: false, maxLength: 80, nullable: false),
                    PhoneNumber = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: false)
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
                    Name = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    Surname = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    Email = table.Column<string>(type: "varchar(60)", unicode: false, maxLength: 60, nullable: false),
                    Password = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    PhoneNumber = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: false),
                    StreetName = table.Column<string>(type: "varchar(40)", unicode: false, maxLength: 40, nullable: false),
                    ZipCode = table.Column<string>(type: "varchar(12)", unicode: false, maxLength: 12, nullable: false),
                    City = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    NrPersonal = table.Column<string>(type: "char(10)", unicode: false, fixedLength: true, maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Shpernda__4F96323210C173DD", x => x.ShperndaresId);
                });

            migrationBuilder.CreateTable(
                name: "Food",
                columns: table => new
                {
                    FoodId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    Ingredients = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: false),
                    Price = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    CuisineType = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    Restaurant = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Food", x => x.FoodId);
                    table.ForeignKey(
                        name: "FK__Food__Restaurant__2A4B4B5E",
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
                    table.PrimaryKey("PK__MyCart__488B0B0A5AC6CA37", x => x.CartItemId);
                    table.ForeignKey(
                        name: "FK__MyCart__FoodId__2E1BDC42",
                        column: x => x.FoodId,
                        principalTable: "Food",
                        principalColumn: "FoodId");
                    table.ForeignKey(
                        name: "FK__MyCart__KlientiI__2D27B809",
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
                column: "KlientiId");*/
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MyCart");

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
