using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public interface IRepository<T>
    {
        IQueryable<T> All { get; }
        T Find(int id);
        void InsertOrUpdate(T item);
        void Delete(int id);
    }
}
