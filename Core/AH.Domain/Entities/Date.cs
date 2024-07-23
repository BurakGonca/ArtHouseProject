using AH.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Domain.Entities
{
	public class Date : BaseEntity
	{
		public DateTime StartDate { get; set; }
		public DateTime EndDate { get; set; }


        //iliskiler

        public int ExhibitionId { get; set; }
        public Exhibition? Exhibition { get; set; }
    }
}
