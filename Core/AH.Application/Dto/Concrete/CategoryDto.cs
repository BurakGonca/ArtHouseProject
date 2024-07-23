using AH.Application.Dto.Abstract;
using AH.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Application.Dto.Concrete
{
	public class CategoryDto:BaseDto
	{
		public string CategoryName { get; set; }


		//iliskiler

		public IEnumerable<ExhibitionDto>? Exhibitions { get; set; }

	}
}
