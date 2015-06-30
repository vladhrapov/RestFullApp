using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class Uow : IUow
    {
        private readonly MTContext _context;
        public ITraineeRepository Trainee { get; set; }
        public IMentorRepository Mentor { get; set; }

        public Uow()
        {
            _context = new MTContext();
            Trainee = new TraineeRepository(_context);
            Mentor = new MentorRepository(_context);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

    }
}
