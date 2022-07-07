using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace NDereAPI.Controllers
{
  
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AppRestaurantController : ControllerBase
    {
        private readonly NDereContext dataContext;
        public AppRestaurantController(NDereContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<AppRestaurant>>> Get()
        {
            return Ok(await dataContext.AppRestaurants.ToListAsync());
        }

     
        [HttpGet("{id}")]
        public async Task<ActionResult<AppRestaurant>> Get(string id)
        {
            var apprestauranti = await dataContext.AppRestaurants.FindAsync(id);
            if (apprestauranti == null) return BadRequest("Restaurant not found!");
            return Ok(apprestauranti);
        }
        [HttpPost("add")]
        
        public async Task<ActionResult<List<AppRestaurant>>> AddRestaurant(AppRestaurant apprestaurant)
        {
            dataContext.AppRestaurants.Add(apprestaurant);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.AppRestaurants.ToListAsync());
        }
        [HttpPut("update")]
        public async Task<ActionResult<List<AppRestaurant>>> UpdateRestaurant(AppRestaurant request)
        {
            var dbRestaurant = await dataContext.AppRestaurants.FindAsync(request.Id);
            if (dbRestaurant == null)
                return BadRequest("Client not found!");

            dbRestaurant.Id = request.Id;
            dbRestaurant.DisplayName = IsNullOrEmpty(request.DisplayName) ? dbRestaurant.DisplayName : request.DisplayName;
            dbRestaurant.Email = IsNullOrEmpty(request.Email) ? dbRestaurant.Email : request.Email;
           // dbRestaurant.Password = IsNullOrEmpty(request.Password) ? dbRestaurant.Password : request.Password;
            //dbRestaurant.Address = IsNullOrEmpty(request.Address) ? dbRestaurant.Address : request.Address;
            dbRestaurant.PhoneNumber = IsNullOrEmpty(request.PhoneNumber) ? dbRestaurant.PhoneNumber : request.PhoneNumber;

            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Restaurants.ToListAsync());
        }
        private bool IsNullOrEmpty(string name)
        {
            return name == null || name == String.Empty;
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<List<AppRestaurant>>> Delete(string id)
        {
            var dbRestaurant = await dataContext.AppRestaurants.FindAsync(id);
            if (dbRestaurant == null)
                return BadRequest("Restaurant not found!");

            dataContext.AppRestaurants.Remove(dbRestaurant);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.AppRestaurants.ToListAsync());
        }
    }
}
