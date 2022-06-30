using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NDereAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens.Jwt;

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

             var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));

             services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                  .AddJwtBearer(opt => {
                    opt.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = key,
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                  });
             services.AddScoped<TokenService>();

             return services;
        }
    }
}