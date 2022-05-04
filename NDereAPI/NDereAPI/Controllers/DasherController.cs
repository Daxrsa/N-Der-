using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NDereAPI.Models;
using NDereAPI.Data;

namespace NDereAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class DasherController : ControllerBase
    {
        private readonly dbndereContext dataContext;
        public DasherController(dbndereContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Dasher>>> Get()
        {
            return Ok(await dataContext.Dashers.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Dasher>> Get(int id)
        {
            var Dasher = await dataContext.Dashers.FindAsync(id);
            if (Dasher == null) return BadRequest("Client not found!");
            return Ok(Dasher);
        }
        [HttpPost]
        public async Task<ActionResult<List<Dasher>>> AddClient(Dasher klient)
        {
            dataContext.Dashers.Add(klient);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Dashers.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Dasher>>> UpdateClient(Dasher request)
        {
            var dbDasher = await dataContext.Dashers.FindAsync(request.Id);
            if (dbDasher == null)
                return BadRequest("Client not found!");

            dbDasher.Id = request.Id;
            dbDasher.Name = IsNullOrEmpty(request.Name) ? dbDasher.Name : request.Name;
            dbDasher.Surname = IsNullOrEmpty(request.Surname) ? dbDasher.Surname : request.Surname;
            dbDasher.Email = IsNullOrEmpty(request.Email) ? dbDasher.Email : request.Email;
            dbDasher.Password = IsNullOrEmpty(request.Password) ? dbDasher.Password : request.Password;
            dbDasher.PhoneNumber = IsNullOrEmpty(request.PhoneNumber) ? dbDasher.PhoneNumber : request.PhoneNumber;
            dbDasher.StreetName = IsNullOrEmpty(request.StreetName) ? dbDasher.StreetName : request.StreetName;
            dbDasher.ZipCode = IsNullOrEmpty(request.ZipCode) ? dbDasher.ZipCode : request.ZipCode;
            dbDasher.City = IsNullOrEmpty(request.City) ? dbDasher.City : request.City;


            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Dashers.ToListAsync());
        }
        private bool IsNullOrEmpty(string name)
        {
            return name == null || name == String.Empty;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Dasher>>> Delete(int id)
        {
            var dbDasher = await dataContext.Dashers.FindAsync(id);
            if (dbDasher == null)
                return BadRequest("Client not found!");

            dataContext.Dashers.Remove(dbDasher);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Dashers.ToListAsync());
        }
    }
}
