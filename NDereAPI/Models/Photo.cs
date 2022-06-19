using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace NDereAPI.Models
{
    public partial class Photo
    {
        public int Id { get; set; }
        public byte[] Picture { get; set; } = null!;
        public string FileExtension { get; set; } = null!;
        public decimal Size { get; set; }
        public int KlientiId { get; set; }

        [ForeignKey("KlientiId")]
        public virtual Klienti Klienti { get; set; } = null!;
    }
}
