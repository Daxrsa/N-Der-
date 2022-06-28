using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NDereAPI.Models;
using Microsoft.AspNetCore.Identity;

namespace NDereAPI.Services
{
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, 
               IConfiguration config)
        {
             services.AddIdentityCore<AppRestaurant>(opt => {
                opt.Password.RequireNonAlphanumeric = false;
             })
             .AddEntityFrameworkStores<NDereContext>()
             .AddSignInManager<SignInManager<AppRestaurant>>();

             services.AddAuthentication();

             return services;
        }
    }
}