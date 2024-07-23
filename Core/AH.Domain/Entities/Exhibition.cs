using AH.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Domain.Entities
{
	public class Exhibition : BaseEntity
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public string? ImageName { get; set; }

		public DateTime StartDate { get; set; }
		public DateTime EndDate { get; set; }


		//iliskiler

		public int CategoryId { get; set; }
        public Category? Category { get; set; }

        


    }
}
