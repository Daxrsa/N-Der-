using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NDereAPI.Models;
using System.Runtime.Serialization.Json;

namespace NDereAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class KlientiController : ControllerBase
    {
        private readonly NDereContext dataContext;

        public IWebHostEnvironment _hostEnvironment;

        public KlientiController(NDereContext dataContext, IWebHostEnvironment hostEnvironment)
        {
            this.dataContext = dataContext;
            _hostEnvironment = hostEnvironment;
        }

        [HttpGet]
        public async Task<ActionResult<List<Klienti>>> Get()
        {
            return Ok(await dataContext.Klientet.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Klienti>> Get(int id)
        {
            var klienti = await dataContext.Klientet.FindAsync(id);
            if (klienti == null) return BadRequest("Client not found!");
            return Ok(klienti);
        }
        [HttpPost]
        public async Task<ActionResult<List<Klienti>>> AddClient(Klienti klient)
        {
            dataContext.Klientet.Add(klient);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Klientet.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Klienti>>> UpdateClient(Klienti request)
        {
            var dbKlienti = await dataContext.Klientet.FindAsync(request.KlientiId);
            if (dbKlienti == null)
                return BadRequest("Client not found!");

            dbKlienti.KlientiId = request.KlientiId;
            dbKlienti.Name = IsNullOrEmpty(request.Name) ? dbKlienti.Name : request.Name;
            dbKlienti.Surname = IsNullOrEmpty(request.Surname) ? dbKlienti.Surname : request.Surname;
            dbKlienti.Email = IsNullOrEmpty(request.Email) ? dbKlienti.Email : request.Email;
            dbKlienti.Password = IsNullOrEmpty(request.Password) ? dbKlienti.Password : request.Password;
            dbKlienti.PhoneNumber = IsNullOrEmpty(request.PhoneNumber) ? dbKlienti.PhoneNumber : request.PhoneNumber;
            dbKlienti.StreetName = IsNullOrEmpty(request.StreetName) ? dbKlienti.StreetName : request.StreetName;
            dbKlienti.ZipCode = IsNullOrEmpty(request.ZipCode) ? dbKlienti.ZipCode : request.ZipCode;
            dbKlienti.City = IsNullOrEmpty(request.City) ? dbKlienti.City : request.City;
            dbKlienti.Role = IsNullOrEmpty(request.Role) ? dbKlienti.Role : request.Role;

            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Klientet.ToListAsync());
        }
        private bool IsNullOrEmpty(string name)
        {
            return name == null || name == String.Empty;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Klienti>>> Delete(int id)
        {
            var dbKlienti = await dataContext.Klientet.FindAsync(id);
            if (dbKlienti == null)
                return BadRequest("Client not found!");

            dataContext.Klientet.Remove(dbKlienti);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Klientet.ToListAsync());
        }
        /*
        Metoda per me shtu 
                [NonAction]
                public async Task<string> SaveImage(IFormFile imageFile)
                {
                    string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName)
                    .Take(10).ToArray()).Replace(' ', '-');
                    imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);

                    var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
                    using (var fileStream = new FileStream(imagePath, FileMode.Create))
                    {
                        await imageFile.CopyToAsync(fileStream);
                    }
                    return imageName;
                } */
    }
}
