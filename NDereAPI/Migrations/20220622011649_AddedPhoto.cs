using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NDereAPI.Migrations
{
    public partial class AddedPhoto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsMain = table.Column<bool>(type: "bit", nullable: false),
                    KlientiId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Photos_Klienti_KlientiId",
                        column: x => x.KlientiId,
                        principalTable: "Klienti",
                        principalColumn: "KlientiId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Photos_KlientiId",
                table: "Photos",
                column: "KlientiId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Photos");
        }
    }
}
