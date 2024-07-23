using AH.Application.Dto.Abstract;
using AH.Domain.Entities;

namespace AH.Application.Dto.Concrete
{
	public class ExhibitionDto:BaseDto
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public string? ImageName { get; set; }

		public DateTime StartDate { get; set; }
		public DateTime EndDate { get; set; }



		//iliskiler

		public int CategoryId { get; set; }
		public CategoryDto? Category { get; set; }

		

	}
}