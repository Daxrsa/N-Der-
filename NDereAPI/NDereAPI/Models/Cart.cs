using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class Cart
    {
        public int Id { get; set; }
        public int KlientiId { get; set; }
        public int RestorantId { get; set; }

        public virtual Client Klienti { get; set; } = null!;
        public virtual Restorant Restorant { get; set; } = null!;
    }
}
