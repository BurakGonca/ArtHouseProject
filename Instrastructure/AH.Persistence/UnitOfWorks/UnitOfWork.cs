using AH.Application.Interfaces.Repositories;
using AH.Application.Interfaces.UnitOfWork;
using AH.Persistence.Context;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Persistence.UnitOfWorks
{
	public class UnitOfWork : IUnitOfWork
	{
		private readonly ApplicationDbContext _context;


		public IExhibitionRepostory ExhibitionRepository { get; }

		public ICategoryRepository CategoryRepository { get; }

		

		public UnitOfWork(ApplicationDbContext context,IExhibitionRepostory exhibitionRepostory , ICategoryRepository categoryRepository)
		{
			_context = context;
			ExhibitionRepository = exhibitionRepostory;
			CategoryRepository = categoryRepository;
			
		}

		



		public async Task<IDbContextTransaction> BeginTransactionAsync() => await _context.Database.BeginTransactionAsync();


		public async ValueTask DisposeAsync() { }


	}
}
