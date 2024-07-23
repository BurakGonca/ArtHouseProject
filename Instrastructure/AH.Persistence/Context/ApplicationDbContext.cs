using AH.Application.Interfaces.Context;
using AH.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Persistence.Context
{
	public class ApplicationDbContext : DbContext, IApplicationContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{ }

		public DbSet<Exhibition> Exhibitions { get; set; }
		public DbSet<Category> Categories { get; set; }
		public DbSet<Date> Dates { get; set; }


		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);

			modelBuilder.Entity<Category>().HasData(
					new Category { Id = 1, CreatedDate = DateTime.UtcNow, CategoryName = "Painting" },
					new Category { Id = 2, CreatedDate = DateTime.UtcNow, CategoryName = "Sculpture" },
					new Category { Id = 3, CreatedDate = DateTime.UtcNow, CategoryName = "Photography" },
					new Category { Id = 4, CreatedDate = DateTime.UtcNow, CategoryName = "Digital Art" },
					new Category { Id = 5, CreatedDate = DateTime.UtcNow, CategoryName = "Ceramics" }

				);






		}

	}
}
