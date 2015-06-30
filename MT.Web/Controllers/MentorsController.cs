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
    public class MentorsController : ApiController
    {
        private IUow _uow = new Uow();

        // GET api/mentors
        public IEnumerable<Mentor> Get()
        {
            return _uow.Mentor.All.AsEnumerable<Mentor>();
        }

        // GET api/mentors/5
        public Mentor Get(int id)
        {
            return _uow.Mentor.Find(id);
        }

        // POST api/mentors
        public void Post([FromBody]Mentor mentor)
        {
            _uow.Mentor.InsertOrUpdate(mentor);
            _uow.Save();
        }

        // PUT api/mentors/5
        public void Put(int id, [FromBody]Mentor mentor)
        {
            _uow.Mentor.InsertOrUpdate(mentor);
            _uow.Save();
        }

        // DELETE api/mentors/5
        public void Delete(int id)
        {
            _uow.Mentor.Delete(id);
            _uow.Save();
        }
    }
}
