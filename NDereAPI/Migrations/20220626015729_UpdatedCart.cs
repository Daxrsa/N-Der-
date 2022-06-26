using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NDereAPI.Migrations
{
    public partial class UpdatedCart : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK__MyCart__FoodId__2E1BDC42",
                table: "MyCart");

            migrationBuilder.DropForeignKey(
                name: "FK__MyCart__KlientiI__2D27B809",
                table: "MyCart");

            migrationBuilder.DropForeignKey(
                name: "FK_MyCart_AspNetUsers_AppUserId",
                table: "MyCart");

            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Klienti_KlientiId",
                table: "Photos");

            migrationBuilder.DropTable(
                name: "Klienti");

            migrationBuilder.DropIndex(
                name: "IX_Photos_KlientiId",
                table: "Photos");

            migrationBuilder.DropPrimaryKey(
                name: "PK__MyCart__488B0B0A5AC6CA37",
                table: "MyCart");

            migrationBuilder.DropIndex(
                name: "IX_MyCart_AppUserId",
                table: "MyCart");

            migrationBuilder.DropIndex(
                name: "IX_MyCart_KlientiId",
                table: "MyCart");

            migrationBuilder.DropColumn(
                name: "KlientiId",
                table: "Photos");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "MyCart");

            migrationBuilder.RenameColumn(
                name: "KlientiId",
                table: "MyCart",
                newName: "UserId");

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "MyCart",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MyCart",
                table: "MyCart",
                column: "CartItemId");

            migrationBuilder.CreateIndex(
                name: "IX_MyCart_UserId1",
                table: "MyCart",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_MyCart_AspNetUsers_UserId1",
                table: "MyCart",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MyCart_Food_FoodId",
                table: "MyCart",
                column: "FoodId",
                principalTable: "Food",
                principalColumn: "FoodId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MyCart_AspNetUsers_UserId1",
                table: "MyCart");

            migrationBuilder.DropForeignKey(
                name: "FK_MyCart_Food_FoodId",
                table: "MyCart");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MyCart",
                table: "MyCart");

            migrationBuilder.DropIndex(
                name: "IX_MyCart_UserId1",
                table: "MyCart");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "MyCart");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "MyCart",
                newName: "KlientiId");

            migrationBuilder.AddColumn<int>(
                name: "KlientiId",
                table: "Photos",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "MyCart",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK__MyCart__488B0B0A5AC6CA37",
                table: "MyCart",
                column: "CartItemId");

            migrationBuilder.CreateTable(
                name: "Klienti",
                columns: table => new
                {
                    KlientiId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    City = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    Email = table.Column<string>(type: "varchar(60)", unicode: false, maxLength: 60, nullable: false),
                    Name = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    Password = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    PhoneNumber = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: false),
                    Role = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false),
                    StreetName = table.Column<string>(type: "varchar(40)", unicode: false, maxLength: 40, nullable: false),
                    Surname = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    ZipCode = table.Column<string>(type: "varchar(12)", unicode: false, maxLength: 12, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Klienti", x => x.KlientiId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Photos_KlientiId",
                table: "Photos",
                column: "KlientiId");

            migrationBuilder.CreateIndex(
                name: "IX_MyCart_AppUserId",
                table: "MyCart",
                column: "AppUserId");

            migrationBuilder.CreateIndex(
                name: "IX_MyCart_KlientiId",
                table: "MyCart",
                column: "KlientiId");

            migrationBuilder.AddForeignKey(
                name: "FK__MyCart__FoodId__2E1BDC42",
                table: "MyCart",
                column: "FoodId",
                principalTable: "Food",
                principalColumn: "FoodId");

            migrationBuilder.AddForeignKey(
                name: "FK__MyCart__KlientiI__2D27B809",
                table: "MyCart",
                column: "KlientiId",
                principalTable: "Klienti",
                principalColumn: "KlientiId");

            migrationBuilder.AddForeignKey(
                name: "FK_MyCart_AspNetUsers_AppUserId",
                table: "MyCart",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Klienti_KlientiId",
                table: "Photos",
                column: "KlientiId",
                principalTable: "Klienti",
                principalColumn: "KlientiId");
        }
    }
}
