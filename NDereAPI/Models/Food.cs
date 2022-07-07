using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class Food 
    {
        public Food()
        {
            MyCarts = new HashSet<MyCart>();
        }

        public string FoodId { get; set; }
        public string Name { get; set; } = null!;
        public string Ingredients { get; set; } = null!;
        public decimal Price { get; set; }
        public string CuisineType { get; set; } = null!;
        public byte[]? FoodImage { get; set; }
        public string Restaurant { get; set; }

        public virtual Restaurant RestaurantNavigation { get; set; } = null!;
        public virtual ICollection<MyCart> MyCarts { get; set; }
    }
}
