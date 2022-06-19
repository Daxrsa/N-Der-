using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NDereAPI.Models;

namespace NDereAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DelivererController : ControllerBase
    {
        private readonly NDereContext dataContext;
        public DelivererController(NDereContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Shperndare>>> Get()
        {
            return Ok(await dataContext.Shperndares.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Shperndare>> Get(int id)
        {
            var shperndaresi = await dataContext.Shperndares.FindAsync(id);
            if (shperndaresi == null) return BadRequest("Shperndaresi not found!");
            return Ok(shperndaresi);
        }
        [HttpPost]
        public async Task<ActionResult<List<Shperndare>>> AddShperndares(Shperndare shperndares)
        {
            dataContext.Shperndares.Add(shperndares);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Shperndares.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Shperndare>>> UpdateShperndares(Shperndare request)
        {
            var dbShperndare = await dataContext.Shperndares.FindAsync(request.ShperndaresId);
            if (dbShperndare == null)
                return BadRequest("Shperndares not found!");

            dbShperndare.ShperndaresId = request.ShperndaresId;
            dbShperndare.Name = IsNullOrEmpty(request.Name) ? dbShperndare.Name : request.Name;
            dbShperndare.Surname = IsNullOrEmpty(request.Surname) ? dbShperndare.Surname : request.Surname;
            dbShperndare.Email = IsNullOrEmpty(request.Email) ? dbShperndare.Email : request.Email;
           // dbShperndare.Password = IsNullOrEmpty(request.Password) ? dbShperndare.Password : request.Password;
            dbShperndare.PhoneNumber = IsNullOrEmpty(request.PhoneNumber) ? dbShperndare.PhoneNumber : request.PhoneNumber;
            dbShperndare.StreetName = IsNullOrEmpty(request.StreetName) ? dbShperndare.StreetName : request.StreetName;
            dbShperndare.ZipCode = IsNullOrEmpty(request.ZipCode) ? dbShperndare.ZipCode : request.ZipCode;
            dbShperndare.City = IsNullOrEmpty(request.City) ? dbShperndare.City : request.City;
            dbShperndare.NrPersonal = IsNullOrEmpty(request.NrPersonal) ? dbShperndare.NrPersonal : request.NrPersonal;

            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Shperndares.ToListAsync());
        }
        private bool IsNullOrEmpty(string name)
        {
            return name == null || name == String.Empty;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Shperndare>>> Delete(int id)
        {
            var dbShperndares = await dataContext.Shperndares.FindAsync(id);
            if (dbShperndares == null)
                return BadRequest("Shperndares not found!");

            dataContext.Shperndares.Remove(dbShperndares);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Shperndares.ToListAsync());
        }
    }
}
