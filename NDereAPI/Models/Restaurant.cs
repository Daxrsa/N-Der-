using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
namespace NDereAPI.Models
{
   
    public partial class Restaurant : IdentityUser
    {
        public Restaurant()
        {
            Foods = new HashSet<Food>();
        }

        public string RestaurantId { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public byte[] PasswordHash { get; set; } = null!;
        public byte[] PasswordSalt { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public byte[]? RestaurantImage { get; set; }

        public virtual ICollection<Food> Foods { get; set; }
    }
}
