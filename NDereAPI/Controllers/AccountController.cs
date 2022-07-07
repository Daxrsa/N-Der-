using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using NDereAPI.Models;
using NDereAPI.DTOs;
using NDereAPI.Services;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace NDereAPI.Controllers
{
     [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppRestaurant> _userManager;
        private readonly SignInManager<AppRestaurant> _signInManager;

        private readonly TokenService _tokenService;
        public AccountController(UserManager<AppRestaurant> userManager, 

        SignInManager<AppRestaurant> signInManager, TokenService tokenService)
        {
           _tokenService = tokenService;
           _userManager = userManager;
           _signInManager = signInManager;
           
        }

       
        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDto)
        {
            var apprestaurant = await _userManager.FindByEmailAsync(loginDto.Email);

            if(apprestaurant == null) return Unauthorized();

            var results = await _signInManager.CheckPasswordSignInAsync(apprestaurant, loginDto.Password, false);

            if(results.Succeeded)
            {
              return CreateUserObject(apprestaurant);
            }
            return Unauthorized();
        }
       
        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> RegisterAppRestaurant(RegisterDTO registerDto)
        {
             if(await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
             {
                  return BadRequest("Email taken");
             }
              if(await _userManager.Users.AnyAsync(x => x.UserName == registerDto.Username))
             {
                  return BadRequest("Username taken");
             }

             var apprestaurant = new AppRestaurant
             {
                DisplayName = registerDto.DisplayName,
                Email = registerDto.Email,
                UserName = registerDto.Username,
                Bio = registerDto.Bio
             };

             var result = await _userManager.CreateAsync(apprestaurant, registerDto.Password);

             if(result.Succeeded)
             {
               return CreateUserObject(apprestaurant);
             }

             return BadRequest("Problem registering user");
        }
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDTO>> GetCurrentUser()
        {
            var apprestaurant = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));
            return CreateUserObject(apprestaurant);
        }

        private UserDTO CreateUserObject(AppRestaurant apprestaurant)
        {
             return new UserDTO
                {
                    DisplayName = apprestaurant.DisplayName,
                    Image = null,
                    Bio = apprestaurant.Bio,
                    Token = _tokenService.CreateToken(apprestaurant),
                    Username = apprestaurant.UserName
                };
        }
    }
}