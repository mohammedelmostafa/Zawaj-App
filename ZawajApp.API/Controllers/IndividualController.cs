using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace ZawajApp.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IndividualController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetIndividuals()
        {
            var jsonString = "";

            using (StreamReader sr = new StreamReader("ScsanctionsUNENG.json"))
            {
                // Read the stream to a string, and write the string to the console.
                jsonString = await sr.ReadToEndAsync();
            }
            /* var weathers = await _context.Weathers.ToListAsync(); */
            /* var myJsonString = File.ReadAllText("myfile.json"); */

            var myJObject = JObject.Parse(jsonString);
            return Ok(myJObject);

        }
    }
}