using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace NDereAPI.Services
{
    public class Seed
    {
        public static async Task SeedData(UserManager<AppRestaurant> userManager)
        {
           if(!userManager.Users.Any())
           {
              var restaurants = new List<AppRestaurant>
              {
                new AppRestaurant{DisplayName = "Soma",Bio="textettasdhg", UserName = "soma", Email = "bob@gmail.com"},
                new AppRestaurant{DisplayName = "ProperPizza",Bio="textettasdhg", UserName = "properpizza", Email = "proper@gmail.com"},
                new AppRestaurant{DisplayName = "Planeti",Bio="textettasdhg", UserName = "planeti", Email = "planeti@gmail.com"}
              };

              foreach(var restaurant in restaurants)
              {
                 await userManager.CreateAsync(restaurant, "Pas$4word");
              }
        }
    }
  }
}