using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace NDereAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantController : ControllerBase
    {
        private readonly NDereContext dataContext;
        public RestaurantController(NDereContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Restaurant>>> Get()
        {
            return Ok(await dataContext.Restaurants.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Restaurant>> Get(int id)
        {
            var restauranti = await dataContext.Restaurants.FindAsync(id);
            if (restauranti == null) return BadRequest("Restaurant not found!");
            return Ok(restauranti);
        }
        [HttpPost("add")]
        public async Task<ActionResult<List<Restaurant>>> AddRestaurant(Restaurant restaurant)
        {
            dataContext.Restaurants.Add(restaurant);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Restaurants.ToListAsync());
        }
        [HttpPut("update")]
        public async Task<ActionResult<List<Restaurant>>> UpdateRestaurant(Restaurant request)
        {
            var dbRestaurant = await dataContext.Restaurants.FindAsync(request.RestaurantId);
            if (dbRestaurant == null)
                return BadRequest("Client not found!");

            dbRestaurant.RestaurantId = request.RestaurantId;
            dbRestaurant.Name = IsNullOrEmpty(request.Name) ? dbRestaurant.Name : request.Name;
            dbRestaurant.Email = IsNullOrEmpty(request.Email) ? dbRestaurant.Email : request.Email;
           // dbRestaurant.Password = IsNullOrEmpty(request.Password) ? dbRestaurant.Password : request.Password;
            dbRestaurant.Address = IsNullOrEmpty(request.Address) ? dbRestaurant.Address : request.Address;
            dbRestaurant.PhoneNumber = IsNullOrEmpty(request.PhoneNumber) ? dbRestaurant.PhoneNumber : request.PhoneNumber;

            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Restaurants.ToListAsync());
        }
        private bool IsNullOrEmpty(string name)
        {
            return name == null || name == String.Empty;
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<List<Restaurant>>> Delete(int id)
        {
            var dbRestaurant = await dataContext.Restaurants.FindAsync(id);
            if (dbRestaurant == null)
                return BadRequest("Restaurant not found!");

            dataContext.Restaurants.Remove(dbRestaurant);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Restaurants.ToListAsync());
        }
    }
}
