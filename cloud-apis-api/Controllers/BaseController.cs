using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace cloud_apis_api {

    [Authorize]
    public class BaseController : Controller {
        public BaseController() {
            
        }
    }
}