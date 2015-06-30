using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data.Entities;

namespace Data
{
    public class MTContext : DbContext
    {
        //static MTContext()
        //{
        //    Database.SetInitializer(new DropCreateDatabaseAlways<MTContext>());
        //}

        public MTContext()
            : base("name=MTConnection")
        {
        }

        public virtual DbSet<Mentor> Mentors { get; set; }
        public virtual DbSet<Trainee> Trainees { get; set; }
    }
}
