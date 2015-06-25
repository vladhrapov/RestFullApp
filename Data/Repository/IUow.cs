using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public interface IUow : IDisposable
    {
        ITraineeRepository Trainee { get; set; }
        IMentorRepository Mentor { get; set; }
        void Save();
    }
}
