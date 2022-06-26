using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NDereAPI.DTOs
{
    public class UserDto
    {
        public string Name { get; set; }
        public string Token { get; set; }
        public string Username { get; set; }
        public string? Image { get; set; }
    }
}