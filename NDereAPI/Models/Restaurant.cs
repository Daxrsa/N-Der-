using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace NDereAPI.Models
{
    public partial class Restaurant
    {
        public Restaurant()
        {
            Foods = new HashSet<Food>();
        }

        public int RestaurantId { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public virtual ICollection<Food> Foods { get; set; }
    }
}
