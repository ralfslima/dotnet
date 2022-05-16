using System.ComponentModel.DataAnnotations;

namespace ApiClientes.Models
{
    public class Cliente
    {
        [Key]
        public int Id { get; set; }

        [Required(AllowEmptyStrings = false)]
        [MaxLength(50)]
        public string? Nome { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string? Email { get; set; }

    }
}


