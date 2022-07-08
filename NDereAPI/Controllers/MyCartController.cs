using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NDereAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace NDereAPI.Controllers
{
      [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class MyCartController : Controller
    {
        private readonly NDereContext dataContext;
        public MyCartController(NDereContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<MyCart>>> Get()
        {
            return Ok(await dataContext.MyCarts.ToListAsync());
        }
        [HttpPost]
        public async Task<ActionResult<List<MyCart>>> AddToCart(MyCart cart)
        {
            dataContext.MyCarts.Add(cart);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.MyCarts.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<MyCart>>> UpdateCart(MyCart request)
        {
            var dbCart = await dataContext.MyCarts.FindAsync(request);
            if (dbCart == null)
                return BadRequest("Cart Item not found!");

            dbCart.CartItemId = request.CartItemId;
            dbCart.KlientiId = request.KlientiId;
            dbCart.FoodId = request.FoodId;

            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.MyCarts.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<MyCart>>> Delete(int id)
        {
            var dbCart = await dataContext.MyCarts.FindAsync(id);
            if (dbCart == null)
                return BadRequest("Cart not found!");

            dataContext.MyCarts.Remove(dbCart);
            await dataContext.SaveChangesAsync();

            return Ok(await dataContext.MyCarts.ToListAsync());
        }
    }
}
