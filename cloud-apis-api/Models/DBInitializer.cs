namespace cloud_apis_api {
    public class DBInitializer {
        public static void Initialize(GamesContext context) {
            context.Database.EnsureCreated();
        }
    }
}