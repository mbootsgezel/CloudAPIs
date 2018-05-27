using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace cloud_apis_api.Controllers
{
    [Route("api/[controller]")]
    public class PingController : BaseController
    {
        [AllowAnonymous]
        [HttpGet]
        public string Get()
        {
            return "boobs";
        }
    }
}
