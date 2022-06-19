namespace NDereAPI.ModelDTOs
{
    public class DelivererDTO
    {
        public string Name { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string StreetName { get; set; } = string.Empty;
        public string ZipCode { get; set; } = null!;
        public string City { get; set; } = null!;
        public string NrPersonal { get; set; } = null!;
    }
}
