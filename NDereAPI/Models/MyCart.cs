using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class MyCart
    {
        public int CartItemId { get; set; }
        public int KlientiId { get; set; }
        public int RestaurantId { get; set; }

        public virtual Klienti Klienti { get; set; } = null!;
        public virtual Restaurant Restaurant { get; set; } = null!;
    }
}
