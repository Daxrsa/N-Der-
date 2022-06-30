using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace NDereAPI.Models
{
    public class AppRestaurant : IdentityUser
    {
        public string DisplayName { get; set; } 
        public string Bio { get; set; } = null!;
    }
}