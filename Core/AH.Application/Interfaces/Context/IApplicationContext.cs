using AH.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Application.Interfaces.Context
{
	public interface IApplicationContext
	{
		DbSet<Exhibition> Exhibitions { get; set; }
		DbSet<Category> Categories { get; set; }
		DbSet<Date> Dates { get; set; }
	}
}
