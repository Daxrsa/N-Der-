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
                    new AppUser{
                        Name = "Dren",
                        Surname = "Ibrahimi",
                        StreetName = "Rr. Street",
                        ZipCode = "60000",
                        City = "Gjilan",
                        Role = "Admin",
                        UserName = "dreni",
                        Email = "dren665@gmail.com"
                    }
                };

                foreach (var klient in klientet)
                {
                    await userManager.CreateAsync(klient, "Pa$$w0rd");
                }
            }
        }
    }
}