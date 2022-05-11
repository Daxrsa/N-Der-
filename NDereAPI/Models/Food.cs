using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace NDereAPI.Models
{
    public partial class Food
    {
        public Food()
        {
            MyCarts = new HashSet<MyCart>();
        }

        public int FoodId { get; set; }
        public string Name { get; set; } = null!;
        public int Restaurant { get; set; }
        public string Ingredients { get; set; } = null!;
        public decimal Price { get; set; }
        public string CuisineType { get; set; } = null!;
        public virtual ICollection<MyCart> MyCarts { get; set; }
        public virtual Restaurant? RestaurantNavigation { get; set; } = null!;
    }
}
