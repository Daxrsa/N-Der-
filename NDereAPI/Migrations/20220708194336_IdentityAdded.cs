using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NDereAPI.Migrations
{
    public partial class IdentityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AboutUs",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    undertitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    faq = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AboutUs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Bio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

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
                    KlientiId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Surname = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Email = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
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
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RestaurantId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Address = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Restaurant", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Shperndares",
                columns: table => new
                {
                    ShperndaresId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Surname = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Email = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
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
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Food",
                columns: table => new
                {
                    FoodId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Ingredients = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    Price = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    CuisineType = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    FoodImage = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    Restaurant = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Food", x => x.FoodId);
                    table.ForeignKey(
                        name: "FK__Food__Restaurant__3E52440B",
                        column: x => x.Restaurant,
                        principalTable: "Restaurant",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "MyCart",
                columns: table => new
                {
                    CartItemId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    KlientiId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FoodId = table.Column<string>(type: "nvarchar(450)", nullable: false)
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
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

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
                name: "AboutUs");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

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
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Food");

            migrationBuilder.DropTable(
                name: "Klienti");

            migrationBuilder.DropTable(
                name: "Restaurant");
        }
    }
}
