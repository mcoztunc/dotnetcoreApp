using System;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        // GET api/contacts
        [HttpGet]
        public IActionResult Get()
        {
            var result = new [] {
                new { FirstName = "Okan", LastName = "dsas" },
                new { FirstName = "Seyhur", LastName = "dsadda" },
                new { FirstName = "Deneme", LastName = "DAsdas"}
            };
            return Ok(result);
        }
    }
}
