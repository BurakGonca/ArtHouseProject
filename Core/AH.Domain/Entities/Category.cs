﻿using AH.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Domain.Entities
{
	public class Category : BaseEntity
	{
        public  string CategoryName { get; set; }


        //iliskiler

        public IEnumerable<Exhibition>? Exhibitions { get; set; }


    }
}
