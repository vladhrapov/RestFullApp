using System.Data.Entity;
using Data.Entities;
using System.Linq;

namespace Data.Repository
{
    public class TraineeRepository : ITraineeRepository
    {
        private readonly MTContext _context;

        public TraineeRepository(MTContext context)
        {
            _context = context;
        }
        public IQueryable<Trainee> All
        {
            get
            {
                return _context.Trainees.AsQueryable();
            }
        }

        public Trainee Find(int id)
        {
            return _context.Trainees.Find(id);
        }

        public void InsertOrUpdate(Trainee item)
        {
            if (item.Id == default(int))
            {
                _context.Trainees.Add(item);
            }
            else
            {
                _context.Entry(item).State = EntityState.Modified;
            }
        }

        public void Delete(int id)
        {
            var temp = _context.Trainees.Find(id);
            _context.Trainees.Remove(temp);
        }
    }
}
