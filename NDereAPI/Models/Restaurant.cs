using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class Restaurant
    {
        public Restaurant()
        {
            Foods = new HashSet<Food>();
            MyCarts = new HashSet<MyCart>();
        }

        public int RestaurantId { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;

        public virtual ICollection<Food> Foods { get; set; }
        public virtual ICollection<MyCart> MyCarts { get; set; }
    }
}
