using AH.Application.Interfaces.Repositories;
using AH.Application.Interfaces.UnitOfWork;
using AH.Persistence.Context;
using AH.Persistence.Repositories.Concrete;
using AH.Persistence.UnitOfWorks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Persistence
{
	public static class ServiceRegistration
	{

		public static void AddPersistenceServices(this IServiceCollection serviceCollection, IConfiguration configuration = null)
        {
            serviceCollection.AddDbContext<ApplicationDbContext>(options =>
            options.UseNpgsql(configuration?.GetConnectionString("PostgreSQLConnection")));

            serviceCollection.AddTransient<IExhibitionRepostory, ExhibitionRepository>();
            serviceCollection.AddTransient<ICategoryRepository, CategoryRepository>();
            serviceCollection.AddTransient<IUnitOfWork, UnitOfWork>();
        }



	}
}
