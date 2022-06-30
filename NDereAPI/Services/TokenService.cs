using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NDereAPI.Models;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;

namespace NDereAPI.Services
{
    public class TokenService
    {
      
    private readonly IConfiguration _config;
     public TokenService(IConfiguration config)
     {
         _config = config;
     }

        public string CreateToken(AppRestaurant restaurant)
        {     //qetu mundesh me shtu edhe claims tjera
              var claims = new List<Claim> 
              {
                new Claim(ClaimTypes.Name, restaurant.UserName),    
                new Claim(ClaimTypes.NameIdentifier, restaurant.Id),
                new Claim(ClaimTypes.Email, restaurant.Email)
              };

              var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["TokenKey"]));
              var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

              var tokenDescriptor = new SecurityTokenDescriptor
              {
                 Subject = new ClaimsIdentity(claims),
                 Expires = DateTime.Now.AddDays(7),
                 SigningCredentials = creds
              };

              var tokenHandler = new JwtSecurityTokenHandler();

              var token = tokenHandler.CreateToken(tokenDescriptor);

              return tokenHandler.WriteToken(token);
        }
    }
}