﻿// <auto-generated />
using System;
using AH.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace AH.Persistence.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20240723105255_dbInit")]
    partial class dbInit
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("AH.Domain.Entities.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CategoryName = "Painting",
                            CreatedDate = new DateTime(2024, 7, 23, 10, 52, 55, 305, DateTimeKind.Utc).AddTicks(5277)
                        },
                        new
                        {
                            Id = 2,
                            CategoryName = "Sculpture",
                            CreatedDate = new DateTime(2024, 7, 23, 10, 52, 55, 305, DateTimeKind.Utc).AddTicks(5280)
                        },
                        new
                        {
                            Id = 3,
                            CategoryName = "Photography",
                            CreatedDate = new DateTime(2024, 7, 23, 10, 52, 55, 305, DateTimeKind.Utc).AddTicks(5281)
                        },
                        new
                        {
                            Id = 4,
                            CategoryName = "Digital Art",
                            CreatedDate = new DateTime(2024, 7, 23, 10, 52, 55, 305, DateTimeKind.Utc).AddTicks(5282)
                        },
                        new
                        {
                            Id = 5,
                            CategoryName = "Ceramics",
                            CreatedDate = new DateTime(2024, 7, 23, 10, 52, 55, 305, DateTimeKind.Utc).AddTicks(5283)
                        });
                });

            modelBuilder.Entity("AH.Domain.Entities.Date", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("ExhibitionId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("ExhibitionId");

                    b.ToTable("Dates");
                });

            modelBuilder.Entity("AH.Domain.Entities.Exhibition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("CategoryId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ImageName")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Exhibitions");
                });

            modelBuilder.Entity("AH.Domain.Entities.Date", b =>
                {
                    b.HasOne("AH.Domain.Entities.Exhibition", "Exhibition")
                        .WithMany("Dates")
                        .HasForeignKey("ExhibitionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Exhibition");
                });

            modelBuilder.Entity("AH.Domain.Entities.Exhibition", b =>
                {
                    b.HasOne("AH.Domain.Entities.Category", "Category")
                        .WithMany("Exhibitions")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("AH.Domain.Entities.Category", b =>
                {
                    b.Navigation("Exhibitions");
                });

            modelBuilder.Entity("AH.Domain.Entities.Exhibition", b =>
                {
                    b.Navigation("Dates");
                });
#pragma warning restore 612, 618
        }
    }
}
