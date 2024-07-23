using AH.Application.Dto.Abstract;
using AH.Domain.Entities;

namespace AH.Application.Dto.Concrete
{
	public class DateDto:BaseDto
	{
		public DateTime StartDate { get; set; }
		public DateTime EndDate { get; set; }


		//iliskiler

		public int ExhibitionId { get; set; }
		public ExhibitionDto? Exhibition { get; set; }



	}
}