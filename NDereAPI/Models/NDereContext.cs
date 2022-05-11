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

        public virtual DbSet<Food> Foods { get; set; } = null!;
        public virtual DbSet<Klienti> Klientet { get; set; } = null!;
        public virtual DbSet<MyCart> MyCartItems { get; set; } = null!;
        public virtual DbSet<Restaurant> Restaurants { get; set; } = null!;
        public virtual DbSet<Shperndare> Shperndares { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=NDere;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Food>(entity =>
            {
                entity.ToTable("Food");

                entity.Property(e => e.CuisineType)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Ingredients)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnType("decimal(5, 2)");

                entity.HasOne(d => d.RestaurantNavigation)
                    .WithMany(p => p.Foods)
                    .HasForeignKey(d => d.Restaurant)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Food__Restaurant__36B12243");
            });

            modelBuilder.Entity<Klienti>(entity =>
            {
                entity.ToTable("Klienti");

                entity.Property(e => e.City)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Role)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.StreetName)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Surname)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ZipCode)
                    .HasMaxLength(12)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<MyCart>(entity =>
            {
                entity.HasKey(e => e.CartItemId)
                    .HasName("PK__MyCart__488B0B0A1FDF5DF6");

                entity.ToTable("MyCart");

                entity.HasOne(d => d.Food)
                    .WithMany(p => p.MyCarts)
                    .HasForeignKey(d => d.FoodId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MyCart__FoodId__4AB81AF0");

                entity.HasOne(d => d.Klienti)
                    .WithMany(p => p.MyCarts)
                    .HasForeignKey(d => d.KlientiId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MyCart__KlientiI__49C3F6B7");
            });

            modelBuilder.Entity<Restaurant>(entity =>
            {
                entity.ToTable("Restaurant");

                entity.Property(e => e.Address)
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(15)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Shperndare>(entity =>
            {
                entity.HasKey(e => e.ShperndaresId)
                    .HasName("PK__Shpernda__4F963232C91CE002");

                entity.Property(e => e.City)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.NrPersonal)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.StreetName)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Surname)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ZipCode)
                    .HasMaxLength(12)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
