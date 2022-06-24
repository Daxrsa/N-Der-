using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace NDereAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private readonly NDereContext dataContext;
        public FoodController(NDereContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Food>>> Get()
        {
            return Ok(await dataContext.Foods.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Food>> Get(int id)
        {
            var food = await dataContext.Foods.FindAsync(id);
            if (food == null) return BadRequest("Food not found!");
            return Ok(food);
        }
        [HttpPost]
        public async Task<ActionResult<List<Food>>> AddFood(Food food)
        {
            dataContext.Foods.Add(food);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Foods.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Food>>> UpdateFood(Food request)
        {
            var dbFood = await dataContext.Foods.FindAsync(request.FoodId);
            if (dbFood == null)
                return BadRequest("Food not found!");

            dbFood.FoodId = request.FoodId;
            dbFood.Name = IsNullOrEmpty(request.Name) ? dbFood.Name : request.Name;
            dbFood.Ingredients = IsNullOrEmpty(request.Ingredients) ? dbFood.Ingredients : request.Ingredients;
            dbFood.Price = request.Price == 0 ? dbFood.Price : request.Price;
            dbFood.CuisineType = IsNullOrEmpty(request.CuisineType) ? dbFood.CuisineType : request.CuisineType;
            dbFood.Restaurant = IsNullOrEmpty(request.Restaurant) ? dbFood.Restaurant : request.Restaurant;

           // dbFood.Restaurant = request.Restaurant == 0 ? dbFood.Restaurant : request.Restaurant;

            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Foods.ToListAsync());
        }
        private bool IsNullOrEmpty(string name)
        {
            return name == null || name == String.Empty;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Food>>> Delete(int id)
        {
            var dbFood = await dataContext.Foods.FindAsync(id);
            if (dbFood == null)
                return BadRequest("Food not found!");

            dataContext.Foods.Remove(dbFood);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.Foods.ToListAsync());
        }
    }
}
