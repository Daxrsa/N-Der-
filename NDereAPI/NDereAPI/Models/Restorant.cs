using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class Restorant
    {
        public Restorant()
        {
            Carts = new HashSet<Cart>();
            Foods = new HashSet<Food>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public string License { get; set; } = null!;

        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Food> Foods { get; set; }
    }
}
