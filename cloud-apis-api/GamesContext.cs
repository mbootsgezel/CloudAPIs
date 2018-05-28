using Microsoft.EntityFrameworkCore;

namespace cloud_apis_api
{
    public class GamesContext: DbContext {

        public GamesContext (DbContextOptions<GamesContext> options): base(options){

        }

        public DbSet<Game> Games {get;set;}
        public DbSet<Publisher> Publishers {get;set;}

        

    }
}