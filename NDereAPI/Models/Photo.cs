using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class Photo
    {
        public string Id { get; set; } = null!;
        public string Url { get; set; } = null!;
        public bool IsMain { get; set; }
        public int? KlientiId { get; set; }
    }
}
