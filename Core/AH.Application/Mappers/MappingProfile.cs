using AH.Application.Dto.Concrete;
using AH.Domain.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AH.Application.Mappers
{
	public class MappingProfile : Profile
	{
        public MappingProfile()
        {
            CreateMap<Exhibition, ExhibitionDto>().ReverseMap();
            CreateMap<Category, CategoryDto>().ReverseMap();

        }
    }
}
