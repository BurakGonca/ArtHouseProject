using AH.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Application.Interfaces.Repositories
{
    public interface IRepository<TEntity> where TEntity : BaseEntity
    {

        int Create(TEntity entity);
        int Update(TEntity entity);
        int Delete(TEntity entity);

        TEntity GetById(int id);
        IEnumerable<TEntity> GetAll();

    }
}
