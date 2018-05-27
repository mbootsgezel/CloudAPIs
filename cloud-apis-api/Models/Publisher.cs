using System.Collections.Generic;
using Newtonsoft.Json;

namespace cloud_apis_api {
    public class Publisher {
        public int Id {get;set;}
        public string PublisherName {get;set;}
        [JsonIgnore]
        public ICollection<Game> Games {get;set;}
    }
}