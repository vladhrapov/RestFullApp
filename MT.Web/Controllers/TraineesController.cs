using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Data;
using Data.Entities;
using Data.Repository;

namespace MT.Web.Controllers
{
    public class TraineesController : ApiController
    {
        private IUow _uow = new Uow();

        // GET api/trainees
        public IEnumerable<Trainee> Get()
        {
            return _uow.Trainee.All.AsEnumerable<Trainee>();
        }

        // GET api/trainees/5
        public Trainee Get(int id)
        {
            return _uow.Trainee.Find(id);
        }

        // POST api/trainees
        public void Post([FromBody]Trainee trainee)
        {
            _uow.Trainee.InsertOrUpdate(trainee);
            _uow.Save();
        }

        // PUT api/trainees/5
        public void Put(int id, [FromBody]Trainee trainee)
        {
            trainee.Mentor = null;
            _uow.Trainee.InsertOrUpdate(trainee);
            _uow.Save();
        }

        // DELETE api/trainees/5
        public void Delete(int id)
        {
            _uow.Trainee.Delete(id);
            _uow.Save();
        }
    }
}