using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class MyCart
    {
        public int CartItemId { get; set; }
        public int KlientiId { get; set; }
        public int FoodId { get; set; }

        public virtual Food? Food { get; set; } = null!;
        public virtual Klienti? Klienti { get; set; } = null!;
    }
}
