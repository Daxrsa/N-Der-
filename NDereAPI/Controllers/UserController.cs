using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NDereAPI.Models;
using System.Runtime.Serialization.Json;

namespace NDereAPI.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly NDereContext dataContext;

        public IWebHostEnvironment _hostEnvironment;

        public UserController(NDereContext dataContext, IWebHostEnvironment hostEnvironment)
        {
            this.dataContext = dataContext;
            _hostEnvironment = hostEnvironment;
        }
        [HttpGet]
        public async Task<ActionResult<List<AppUser>>> Get()
        {
            return Ok(await dataContext.Users.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> Get(int id)
        {
            var AppUser = await dataContext.Users.FindAsync(id);
            if (AppUser == null) return BadRequest("Client not found!");
            return Ok(AppUser);
        }
        [HttpPost]
        public async Task<ActionResult<List<AppUser>>> AddClient(AppUser klient)
        {
            dataContext.Users.Add(klient);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Users.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<AppUser>>> UpdateClient(AppUser request)
        {
            var dbAppUser = await dataContext.Users.FindAsync(request.Id);
            if (dbAppUser == null)
                return BadRequest("Client not found!");

            dbAppUser.Id = request.Id;
            dbAppUser.Name = IsNullOrEmpty(request.Name) ? dbAppUser.Name : request.Name;
            dbAppUser.Surname = IsNullOrEmpty(request.Surname) ? dbAppUser.Surname : request.Surname;
            dbAppUser.Email = IsNullOrEmpty(request.Email) ? dbAppUser.Email : request.Email;
            dbAppUser.PhoneNumber = IsNullOrEmpty(request.PhoneNumber) ? dbAppUser.PhoneNumber : request.PhoneNumber;
            dbAppUser.StreetName = IsNullOrEmpty(request.StreetName) ? dbAppUser.StreetName : request.StreetName;
            dbAppUser.ZipCode = IsNullOrEmpty(request.ZipCode) ? dbAppUser.ZipCode : request.ZipCode;
            dbAppUser.City = IsNullOrEmpty(request.City) ? dbAppUser.City : request.City;
            dbAppUser.Role = IsNullOrEmpty(request.Role) ? dbAppUser.Role : request.Role;

            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Users.ToListAsync());
        }
        private bool IsNullOrEmpty(string name)
        {
            return name == null || name == String.Empty;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<AppUser>>> Delete(string id)
        {
            var dbAppUser = await dataContext.Users.FindAsync(id);
            if (dbAppUser == null)
                return BadRequest("Client not found!");

            dataContext.Users.Remove(dbAppUser);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Users.ToListAsync());
        }
    }
}
