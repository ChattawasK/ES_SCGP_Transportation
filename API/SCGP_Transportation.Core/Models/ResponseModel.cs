using System.Text.Json;

namespace SCGP_Transportation.Core.Models
{
	public class ResponseModel
	{
        public int StatusCode { get; set; }
        public string? Message { get; set; }
        public override string ToString() => JsonSerializer.Serialize(this);
	}
}