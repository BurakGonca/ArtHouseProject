using AH.Application.Interfaces.Repositories;
using AH.Domain.Common;
using AH.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Persistence.Repositories.Abstract
{
    public abstract class Repository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {

        protected ApplicationDbContext _dbContext;

        protected DbSet<TEntity> entities;

        protected Repository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
            entities = _dbContext.Set<TEntity>();

            _dbContext.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTrackingWithIdentityResolution;

        }

        public int Create(TEntity entity)
        {
            entity.CreatedDate = DateTime.UtcNow;
            entities.Add(entity);
            return _dbContext.SaveChanges();
        }

        public int Delete(TEntity entity)
        {
            entities.Remove(entity);
            return _dbContext.SaveChanges();
        }

        public virtual IEnumerable<TEntity> GetAll()
        {
            return _dbContext.Set<TEntity>().AsNoTracking();
            //return entities;
        }

        public virtual TEntity GetById(int id)
        {
            return entities.SingleOrDefault(e => e.Id == id);
        }

        public int Update(TEntity entity)
        {
            TEntity entity1 = GetById(entity.Id);

            entity.CreatedDate = entity1.CreatedDate;
            entity.UpdatedDate = DateTime.UtcNow;

            entities.Update(entity);

            return _dbContext.SaveChanges();
        }



    }
}
