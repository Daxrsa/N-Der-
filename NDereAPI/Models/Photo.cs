using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class Photo
    {
        public int Id { get; set; }
        public string? Url { get; set; }
        public bool? IsMain { get; set; }
    }
}
