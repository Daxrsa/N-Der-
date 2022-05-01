using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace NDereAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyCartController : Controller
    {
        private readonly DataContext dataContext;
        public MyCartController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<MyCart>>> Get()
        {
            return Ok(await dataContext.MyCartItems.ToListAsync());
        }
        [HttpPost]
        public async Task<ActionResult<List<MyCart>>> AddToCart(MyCart cart)
        {
            dataContext.MyCartItems.Add(cart);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.MyCartItems.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<MyCart>>> UpdateCart(MyCart request)
        {
            var dbCart = await dataContext.MyCartItems.FindAsync(request);
            if (dbCart == null)
                return BadRequest("Cart Item not found!");

            dbCart.CartItemId = request.CartItemId;
            dbCart.KlientiId = request.KlientiId;
            dbCart.RestaurantId = request.RestaurantId;

            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.MyCartItems.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<MyCart>>> Delete(int id)
        {
            var dbCart = await dataContext.MyCartItems.FindAsync(id);
            if (dbCart == null)
                return BadRequest("Cart not found!");

            dataContext.MyCartItems.Remove(dbCart);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.MyCartItems.ToListAsync());
        }
    }
}
