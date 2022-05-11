using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class Shperndare
    {
        public int ShperndaresId { get; set; }
        public string Name { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public string StreetName { get; set; } = null!;
        public string ZipCode { get; set; } = null!;
        public string City { get; set; } = null!;
        public string NrPersonal { get; set; } = null!;
    }
}
