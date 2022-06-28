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

        public string RestaurantId { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Address { get; set; } = null!;
        
        public virtual ICollection<Food> Foods { get; set; }
    }
}
