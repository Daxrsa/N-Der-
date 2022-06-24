﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NDereAPI.Models;

#nullable disable

namespace NDereAPI.Migrations
{
    [DbContext(typeof(NDereContext))]
    [Migration("20220624114146_IdentityAdded")]
    partial class IdentityAdded
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("NDereAPI.Models.CloudinarySetting", b =>
                {
                    b.Property<string>("ApiKey")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("ApiSecret")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("CloudName")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.ToTable("CloudinarySettings");
                });

            modelBuilder.Entity("NDereAPI.Models.Food", b =>
                {
                    b.Property<string>("FoodId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("CuisineType")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<byte[]>("FoodImage")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("Ingredients")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(5,2)");

                    b.Property<string>("Restaurant")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("FoodId");

                    b.HasIndex("Restaurant");

                    b.ToTable("Food", (string)null);
                });

            modelBuilder.Entity("NDereAPI.Models.Klienti", b =>
                {
                    b.Property<string>("KlientiId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("City")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("Role")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("StreetName")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("ZipCode")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.HasKey("KlientiId");

                    b.ToTable("Klienti", (string)null);
                });

            modelBuilder.Entity("NDereAPI.Models.MyCart", b =>
                {
                    b.Property<string>("CartItemId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("FoodId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("KlientiId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("CartItemId")
                        .HasName("PK__MyCart__488B0B0AD18600B4");

                    b.HasIndex("FoodId");

                    b.HasIndex("KlientiId");

                    b.ToTable("MyCart", (string)null);
                });

            modelBuilder.Entity("NDereAPI.Models.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<bool?>("IsMain")
                        .HasColumnType("bit");

                    b.Property<string>("Url")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Photo", (string)null);
                });

            modelBuilder.Entity("NDereAPI.Models.PhotoUploadResult", b =>
                {
                    b.Property<int>("PublicId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PublicId"), 1L, 1);

                    b.Property<string>("Url")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)")
                        .HasColumnName("URL");

                    b.HasKey("PublicId")
                        .HasName("PK__PhotoUpl__87F1F39889C47D6A");

                    b.ToTable("PhotoUploadResult", (string)null);
                });

            modelBuilder.Entity("NDereAPI.Models.Restaurant", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("Name")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("RestaurantId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("RestaurantImage")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Restaurant", (string)null);
                });

            modelBuilder.Entity("NDereAPI.Models.Shperndare", b =>
                {
                    b.Property<string>("ShperndaresId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("City")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<byte[]>("Licensa")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("NrPersonal")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("StreetName")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("ZipCode")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.HasKey("ShperndaresId")
                        .HasName("PK__Shpernda__4F9632323B016038");

                    b.ToTable("Shperndares");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("NDereAPI.Models.Food", b =>
                {
                    b.HasOne("NDereAPI.Models.Restaurant", "RestaurantNavigation")
                        .WithMany("Foods")
                        .HasForeignKey("Restaurant")
                        .IsRequired()
                        .HasConstraintName("FK__Food__Restaurant__3E52440B");

                    b.Navigation("RestaurantNavigation");
                });

            modelBuilder.Entity("NDereAPI.Models.MyCart", b =>
                {
                    b.HasOne("NDereAPI.Models.Food", "Food")
                        .WithMany("MyCarts")
                        .HasForeignKey("FoodId")
                        .IsRequired()
                        .HasConstraintName("FK__MyCart__FoodId__4222D4EF");

                    b.HasOne("NDereAPI.Models.Klienti", "Klienti")
                        .WithMany("MyCarts")
                        .HasForeignKey("KlientiId")
                        .IsRequired()
                        .HasConstraintName("FK__MyCart__KlientiI__412EB0B6");

                    b.Navigation("Food");

                    b.Navigation("Klienti");
                });

            modelBuilder.Entity("NDereAPI.Models.Food", b =>
                {
                    b.Navigation("MyCarts");
                });

            modelBuilder.Entity("NDereAPI.Models.Klienti", b =>
                {
                    b.Navigation("MyCarts");
                });

            modelBuilder.Entity("NDereAPI.Models.Restaurant", b =>
                {
                    b.Navigation("Foods");
                });
#pragma warning restore 612, 618
        }
    }
}
