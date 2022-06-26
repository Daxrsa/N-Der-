﻿using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class Food
    {
        public int FoodId { get; set; }
        public string Name { get; set; } = null!;
        public string Ingredients { get; set; } = null!;
        public decimal Price { get; set; }
        public string CuisineType { get; set; } = null!;
        public int Restaurant { get; set; }

        public virtual Restaurant RestaurantNavigation { get; set; } = null!;
    }
}
