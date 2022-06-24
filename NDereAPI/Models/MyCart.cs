using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class MyCart
    {
        public string CartItemId { get; set; }
        public string KlientiId { get; set; }
        public string FoodId { get; set; }

        public virtual Food Food { get; set; } = null!;
        public virtual Klienti Klienti { get; set; } = null!;
    }
}
