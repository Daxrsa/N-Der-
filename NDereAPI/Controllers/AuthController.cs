using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using NDereAPI.ModelDTOs;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace NDereAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public static Restaurant restoranti = new Restaurant();
        public static Shperndare dasher = new Shperndare();
        public static Klienti klienti = new Klienti();
        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("registerClient")]
        public async Task<ActionResult<Klienti>> Register(KlientiDTO request)
        {
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

           
            klienti.Email = request.Email;
            klienti.Name = request.Name;
            klienti.City = request.City;
            klienti.StreetName = request.Streetname;
            klienti.Surname = request.Surname;
            //klienti.Password = request.Password;
            klienti.ZipCode = request.Zipcode;
            klienti.Role = request.Role;
            klienti.PhoneNumber = request.Phonenumber;
            klienti.PasswordHash = passwordHash;
            klienti.PasswordSalt = passwordSalt;

            return Ok(klienti);
            
        }

        [HttpPost("registerDeliverer")]
        public async Task<ActionResult<Shperndare>> Register(DelivererDTO request)
        {
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            dasher.Email = request.Email;
            dasher.Name = request.Name;
            dasher.City = request.City;
            dasher.PhoneNumber = request.PhoneNumber;
            dasher.StreetName = request.StreetName;
            dasher.ZipCode = request.ZipCode;
            dasher.City = request.City;
            dasher.NrPersonal = request.NrPersonal;
            dasher.Surname = request.Surname;
            //.Password = request.Password;
            dasher.PasswordHash = passwordHash;
            dasher.PasswordSalt = passwordSalt;

            return Ok(dasher);
        }

        [HttpPost("registerRestaurant")]
        public async Task<ActionResult<Restaurant>> Register(RestaurantDTO request)
        {
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);
            restoranti.Email = request.Email;
            restoranti.Name = request.Name;
            restoranti.PhoneNumber = request.PhoneNumber;
            //restoranti.Password = request.Password;
            restoranti.Address = request.Address;
            //restoranti.PasswordHash = passwordHash;
            //restoranti.PasswordSalt = passwordSalt;

            NDereContext db = new NDereContext();

            db.Restaurants.Add(restoranti);
            db.SaveChanges();

            return Ok(restoranti);
        }

        [HttpPost("login")] //kjo metod funksionin veq me klientin tash per tash, per me bo edhe per dasher, restorant kshyri metodat ma posht 
        public async Task<ActionResult<string>> Login(KlientiDTO request)
        {
            if (klienti.Email != request.Email)
            {
                return BadRequest("User not found.");
            }
            if(!VerifyPasswordHash(request.Password, klienti.PasswordHash, klienti.PasswordSalt))
            {
                return BadRequest("Wrong password.");
            }
            /*if (dasher.Email != request.Email)
            {
                return BadRequest("Deliverer not found.");
            }
            if (!VerifyPasswordHash(request.Password, dasher.PasswordHash, dasher.PasswordSalt))
            {
                return BadRequest("Wrong password.");
            }
            if (restoranti.Email != request.Email) 
            {
                return BadRequest("Restaurant not found.");
            }
            if (!VerifyPasswordHash(request.Password, restoranti.PasswordHash, restoranti.PasswordSalt))
            {
                return BadRequest("Wrong password.");
            }
            */
            string token = CreateToken(klienti);
            return Ok(token);
        }

        private string CreateToken(Klienti klienti) //qetu veq per klient osht 
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, klienti.Email)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
    
            return jwt;
        }

    


        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(klienti.PasswordSalt))
            {
                var computerHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computerHash.SequenceEqual(passwordHash);
            } 
        }
    }
}
//mos harro qetu dy metodat e fundit me i rregullu edhe per dasher,restorant