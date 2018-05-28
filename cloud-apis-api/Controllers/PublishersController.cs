using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace cloud_apis_api.Controllers
{
    [Route("api/[controller]")]
    public class PublishersController : BaseController
    {

        private readonly GamesContext context;

        public PublishersController(GamesContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult GetPublishers(string name = "")
        {
            IQueryable<Publisher> query = context.Publishers;

            if (!string.IsNullOrEmpty(name))
                query = query.Where(d => d.PublisherName.Contains(name));


            if (query.ToList().Count == 0)
                return NotFound();

            return Ok(query.ToList());
        }



        [HttpGet("{id}")]
        public IActionResult GetPublisher(int id)
        {
            var publisher = context.Publishers.SingleOrDefault(d => d.Id == id);

            if (publisher == null)
                return NotFound();

            return Ok(publisher);

        }

        [HttpPost]
        public IActionResult AddGame([FromBody]PublisherDto newPublisher)
        {
            Publisher publisher = new Publisher {
                PublisherName = newPublisher.PublisherName
            };

            context.Publishers.Add(publisher);
            context.SaveChanges();

            return Created("", publisher);
        }

        [HttpPut("{id}")]
        public IActionResult UpdatePublisher(int id, [FromBody] PublisherDto updatePublisher){
            Publisher publisher = context.Publishers.Find(id);

            if(publisher == null)
                return NotFound();

            publisher.PublisherName = updatePublisher.PublisherName;
            
            context.Update(publisher);
            context.SaveChanges();

            return Ok(publisher);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var publisher = context.Publishers.Find(id);

            if (publisher == null)
                return NotFound();

            context.Publishers.Remove(publisher);
            context.SaveChanges();

            return Ok(publisher);

        }


    }
}

