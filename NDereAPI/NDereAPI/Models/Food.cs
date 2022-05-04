using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class Food
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Ingredients { get; set; } = null!;
        public long Price { get; set; }
        public string Currency { get; set; } = null!;
        public string CuisineType { get; set; } = null!;
        public string Picture { get; set; } = null!;
        public int Restaurant { get; set; }

        public virtual Restorant RestaurantNavigation { get; set; } = null!;
    }
}
