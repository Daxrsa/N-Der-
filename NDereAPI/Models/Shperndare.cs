using System;
using System.Collections.Generic;

namespace NDereAPI.Models
{
    public partial class Shperndare
    {
        public string ShperndaresId { get; set; }
        public string Name { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public string Email { get; set; } = null!;
        public byte[] PasswordHash { get; set; } = null!;
        public byte[] PasswordSalt { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public string StreetName { get; set; } = null!;
        public string ZipCode { get; set; } = null!;
        public string City { get; set; } = null!;
        public string NrPersonal { get; set; } = null!;
        public byte[]? Licensa { get; set; }
    }
}
