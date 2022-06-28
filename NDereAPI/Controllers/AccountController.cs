using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using NDereAPI.Models;
using NDereAPI.DTOs;

namespace NDereAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppRestaurant> _userManager;
        private readonly SignInManager<AppRestaurant> _signInManager;
        public AccountController(UserManager<AppRestaurant> userManager, 
                             SignInManager<AppRestaurant> signInManager)
        {
           _userManager = userManager;
           _signInManager = signInManager;
        }
        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if(user == null) return Unauthorized();

            var results = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if(results.Succeeded)
            {
                return new UserDTO
                {
                    DisplayName = user.DisplayName,
                    Image = null,
                    Token = "This will be a token",
                    Username = user.UserName
                };
            }
            return Unauthorized();
        }
    }
}