namespace cloud_apis_api
{
    public class DBInitializer
    {
        public static void Initialize(GamesContext context)
        {
            context.Database.EnsureCreated();

            /* 
                context.Games.Any() werkt niet ?
             */
            // if (!context.Games.Any())
            // {

            //     var pb1 = new Publisher()
            //     {
            //         PublisherName = "Epic Games"
            //     };
            //     var pb2 = new Publisher()
            //     {
            //         PublisherName = "Bungie"
            //     };
            //     var pb3 = new Publisher()
            //     {
            //         PublisherName = "Valve"
            //     };

            //     var g1 = new Game() {
            //         Title = "Gears of War",
            //         Publisher = pb1
            //     };
            //     var g2 = new Game() {
            //         Title = "Halo",
            //         Publisher = pb2
            //     };
            //     var g3 = new Game() {
            //         Title = "Half-Life",
            //         Publisher = pb3
            //     };

            //     context.Publishers.Add(pb1);
            //     context.Publishers.Add(pb2);
            //     context.Publishers.Add(pb3);

            //     context.Games.Add(g1);
            //     context.Games.Add(g2);
            //     context.Games.Add(g3);

            //     context.SaveChanges();
            // }

        }
    }
}