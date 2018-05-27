namespace cloud_apis_api {
    public class Game {

        public int Id {get;set;}
        public string Title {get;set;}
    
        // [ForeignKey("PublisherForeignKey")]
        public Publisher Publisher {get;set;}

    }
}