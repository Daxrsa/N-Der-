using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace NDereAPI.Models
{
    public partial class NDereContext : DbContext
    {
        public NDereContext()
        {
        }

        public NDereContext(DbContextOptions<NDereContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CloudinarySetting> CloudinarySettings { get; set; } = null!;
        public virtual DbSet<Food> Foods { get; set; } = null!;
        public virtual DbSet<Klienti> Klientis { get; set; } = null!;
        public virtual DbSet<MyCart> MyCarts { get; set; } = null!;
        public virtual DbSet<Photo> Photos { get; set; } = null!;
        public virtual DbSet<PhotoUploadResult> PhotoUploadResults { get; set; } = null!;
        public virtual DbSet<Restaurant> Restaurants { get; set; } = null!;
        public virtual DbSet<Shperndare> Shperndares { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=localhost\\SQLEXPRESS01;database=NDere;trusted_connection=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CloudinarySetting>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.ApiKey).IsUnicode(false);

                entity.Property(e => e.ApiSecret).IsUnicode(false);

                entity.Property(e => e.CloudName).IsUnicode(false);
            });

            modelBuilder.Entity<Food>(entity =>
            {
                entity.ToTable("Food");

                entity.Property(e => e.CuisineType).IsUnicode(false);

                entity.Property(e => e.Ingredients).IsUnicode(false);

                entity.Property(e => e.Name).IsUnicode(false);

                entity.Property(e => e.Price).HasColumnType("decimal(5, 2)");

                entity.HasOne(d => d.RestaurantNavigation)
                    .WithMany(p => p.Foods)
                    .HasForeignKey(d => d.Restaurant)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Food__Restaurant__3E52440B");
            });

            modelBuilder.Entity<Klienti>(entity =>
            {
                entity.ToTable("Klienti");

                entity.Property(e => e.City).IsUnicode(false);

                entity.Property(e => e.Email).IsUnicode(false);

                entity.Property(e => e.Name).IsUnicode(false);

                entity.Property(e => e.PhoneNumber).IsUnicode(false);

                entity.Property(e => e.Role).IsUnicode(false);

                entity.Property(e => e.StreetName).IsUnicode(false);

                entity.Property(e => e.Surname).IsUnicode(false);

                entity.Property(e => e.ZipCode).IsUnicode(false);
            });

            modelBuilder.Entity<MyCart>(entity =>
            {
                entity.HasKey(e => e.CartItemId)
                    .HasName("PK__MyCart__488B0B0AD18600B4");

                entity.ToTable("MyCart");

                entity.HasOne(d => d.Food)
                    .WithMany(p => p.MyCarts)
                    .HasForeignKey(d => d.FoodId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MyCart__FoodId__4222D4EF");

                entity.HasOne(d => d.Klienti)
                    .WithMany(p => p.MyCarts)
                    .HasForeignKey(d => d.KlientiId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MyCart__KlientiI__412EB0B6");
            });

            modelBuilder.Entity<Photo>(entity =>
            {
                entity.ToTable("Photo");

                entity.Property(e => e.Url).IsUnicode(false);
            });

            modelBuilder.Entity<PhotoUploadResult>(entity =>
            {
                entity.HasKey(e => e.PublicId)
                    .HasName("PK__PhotoUpl__87F1F39889C47D6A");

                entity.ToTable("PhotoUploadResult");

                entity.Property(e => e.Url)
                    .IsUnicode(false)
                    .HasColumnName("URL");
            });

            modelBuilder.Entity<Restaurant>(entity =>
            {
                entity.ToTable("Restaurant");

                entity.Property(e => e.Address).IsUnicode(false);

                entity.Property(e => e.Email).IsUnicode(false);

                entity.Property(e => e.Name).IsUnicode(false);

                entity.Property(e => e.PhoneNumber).IsUnicode(false);
            });

            modelBuilder.Entity<Shperndare>(entity =>
            {
                entity.HasKey(e => e.ShperndaresId)
                    .HasName("PK__Shpernda__4F9632323B016038");

                entity.Property(e => e.City).IsUnicode(false);

                entity.Property(e => e.Email).IsUnicode(false);

                entity.Property(e => e.Name).IsUnicode(false);

                entity.Property(e => e.NrPersonal).IsUnicode(false);

                entity.Property(e => e.PhoneNumber).IsUnicode(false);

                entity.Property(e => e.StreetName).IsUnicode(false);

                entity.Property(e => e.Surname).IsUnicode(false);

                entity.Property(e => e.ZipCode).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
