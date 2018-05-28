using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace cloud_apis_api.Controllers
{
    [Route("api/[controller]")]
    public class GamesController : BaseController
    {
        private readonly GamesContext context;

        public GamesController(GamesContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult GetGames(string title = "", string publisher = "", string sort = "", int page = 0, int pagesize = 5)
        {
            IQueryable<Game> query = context.Games;

            query = query.Include(d => d.Publisher);

            if (!string.IsNullOrEmpty(title))
                query = query.Where(d => d.Title.Contains(title));

            if (!string.IsNullOrEmpty(publisher))
                query = query.Where(d => d.Publisher.PublisherName.Contains(publisher));

            if (!string.IsNullOrEmpty(sort))
            {
                switch (sort)
                {
                    case "id":
                        query = query.OrderBy(d => d.Id);
                        break;
                    case "publisher":
                        query = query.OrderBy(d => d.Publisher.PublisherName);
                        break;
                    default:
                    case "title":
                        query = query.OrderBy(d => d.Title);
                        break;
                }
            }

            query = query.Skip(pagesize * page).Take(pagesize);

            if (query.ToList().Count == 0)
                return NotFound();

            return Ok(query.ToList());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult GetGame(int id)
        {
            var game = context.Games.Include(d => d.Publisher).SingleOrDefault(d => d.Id == id);

            if (game == null)
                return NotFound();

            return Ok(game);
        }

        [HttpGet("{id}/publisher")]
        public IActionResult GetGamePublisher(int id)
        {
            var game = context.Games.Include(d => d.Publisher).SingleOrDefault(d => d.Id == id);
            
            if (game == null)
                return NotFound();

            var publisher = context.Publishers.Where(d => d.PublisherName.Contains(game.Publisher.PublisherName));

            if (publisher == null)
                return NotFound();

            return Ok(publisher);
        }


        // POST api/values
        [HttpPost]
        public IActionResult AddGame([FromBody]GameDto newGame)
        {
            var publisher = context.Publishers.Find(newGame.PublisherId);


            if (publisher == null)
                return NotFound();

            var game = new Game {
                Title = newGame.Title,
                Publisher = publisher
            };

            context.Games.Add(game);
            context.SaveChanges();

            return Created("", game);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]GameDto updatedGame)
        {
            var game = context.Games.Find(id);
            var publisher = context.Publishers.Find(updatedGame.PublisherId);

            if (game == null)
                return NotFound();

            game.Publisher = publisher;
            game.Title = updatedGame.Title;

            context.Games.Update(game);
            context.SaveChanges();

            return Ok(game);
            
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var game = context.Games.Find(id);

            if (game == null)
                return NotFound();

            context.Games.Remove(game);
            context.SaveChanges();

            return Ok(game);

            // return 
        }
    }
}
