﻿using AH.Application.Interfaces.Repositories;
using AH.Domain.Entities;
using AH.Persistence.Context;
using AH.Persistence.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Persistence.Repositories.Concrete
{
	public class CategoryRepository : Repository<Category>, ICategoryRepository
	{
		public CategoryRepository(ApplicationDbContext dbContext) : base(dbContext)
		{
		}

	

	}
}
