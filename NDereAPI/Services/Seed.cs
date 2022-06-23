using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace NDereAPI.Services
{
    public class Seed
    {
        public static async Task SeedData(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var klientet = new List<AppUser>
                {
                    new AppUser{DisplayName = "Dren", UserName = "dreni", Email = "dreni@gmail.com", Bio = ""}
                };

                foreach (var klient in klientet)
                {
                    await userManager.CreateAsync(klient, "Pa$$w0rd");
                }
            }
        }
    }
}