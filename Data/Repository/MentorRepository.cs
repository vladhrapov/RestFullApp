using System.Data.Entity;
using Data.Entities;
using System.Linq;

namespace Data.Repository
{
    public class MentorRepository : IMentorRepository
    {
        private readonly MTContext _context;

        public MentorRepository(MTContext context)
        {
            _context = context;
        }
        public IQueryable<Mentor> All
        {
            get
            {
                return _context.Mentors.AsQueryable();
            }
        }

        public Mentor Find(int id)
        {
            return _context.Mentors.Find(id);
        }

        public void InsertOrUpdate(Mentor item)
        {
            if (item.Id == default(int))
            {
                _context.Mentors.Add(item);
            }
            else
            {
                _context.Entry(item).State = EntityState.Modified;
            }
        }

        public void Delete(int id)
        {
            var temp = _context.Mentors.Find(id);
            _context.Mentors.Remove(temp);
        }
    }
}
