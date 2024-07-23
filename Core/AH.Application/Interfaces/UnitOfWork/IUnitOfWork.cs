using AH.Application.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Application.Interfaces.UnitOfWork
{
	public interface IUnitOfWork : IAsyncDisposable
	{

		Task<IDbContextTransaction> BeginTransactionAsync();
		public IExhibitionRepostory ExhibitionRepository { get; }
		public ICategoryRepository CategoryRepository { get; }
		




	}
}
