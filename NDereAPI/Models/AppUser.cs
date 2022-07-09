using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace NDereAPI.Models
{
    public class AppUser : IdentityUser
    {
        public string Name { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public string StreetName { get; set; } = null!;
        public string ZipCode { get; set; } = null!;
        public string City { get; set; } = null!;
        public string Role { get; set; } = null!;
        public ICollection<Photo> Photos { get; set; }
    }
}