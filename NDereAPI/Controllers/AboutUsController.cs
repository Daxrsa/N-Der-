using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
namespace NDereAPI.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    public class AboutUsController : ControllerBase
    {
        private readonly NDereContext dataContext;
        public AboutUsController(NDereContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<AboutUs>>> Get()
        {
            return Ok(await dataContext.AboutUs.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AboutUs>> Get(string id)
        {
            var aboutus = await dataContext.AboutUs.FindAsync(id);
            if (aboutus == null) return BadRequest("About us row not found!");
            return Ok(aboutus);
        }

        [HttpPost("add")]
        public async Task<ActionResult<List<AboutUs>>> AddAboutUs(AboutUs aboutus)
        {
            dataContext.AboutUs.Add(aboutus);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.AboutUs.ToListAsync());
        }

        [HttpPut("update")]
        public async Task<ActionResult<AboutUs>> UpdateAboutUs(AboutUs request)
        {
            var dbAboutUs = await dataContext.AboutUs.FindAsync(request.Id);
            if (dbAboutUs == null) 
                return BadRequest("About Us row not found!");

            dbAboutUs.Id = request.Id;
            dbAboutUs.title = request.title;
            dbAboutUs.undertitle = request.undertitle;
            dbAboutUs.faq = request.faq;
            dbAboutUs.description = request.description;

            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.AboutUs.ToListAsync());
        }
        private bool isNullOrEmpty(string name)
        {
            return name == null || name == String.Empty;
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<AboutUs>> Delete(string id)
        {
            var dbAboutUs = await dataContext.AboutUs.FindAsync(id);
            if(dbAboutUs == null)
                return BadRequest("About Us row not found!");

            dataContext.AboutUs.Remove(dbAboutUs);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.AboutUs.ToListAsync());
        }

    }
}