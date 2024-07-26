using AH.Application.Dto.Concrete;
using AH.Application.Interfaces.Repositories;
using AH.Domain.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace AH.WebAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ExhibitionController : ControllerBase
	{

		readonly IExhibitionRepostory _exhibitionRepostory;
		private IMapper _mapper;

		public ExhibitionController(IExhibitionRepostory exhibitionRepostory, IMapper mapper)
		{
			_exhibitionRepostory = exhibitionRepostory;
			_mapper = mapper;
		}


		[HttpGet]
		public IActionResult Get()
		{

			List<Exhibition> exhibitions = _exhibitionRepostory.GetAll().ToList();
			var exhibitionDtos = _mapper.Map<List<ExhibitionDto>>(exhibitions);
			return Ok(exhibitionDtos);

		}



		[HttpPost]
		public IActionResult Post(ExhibitionDto dto)
		{
			var exhibition = _mapper.Map<Exhibition>(dto);


			exhibition.StartDate = DateTime.SpecifyKind(exhibition.StartDate, DateTimeKind.Utc);
			exhibition.EndDate = DateTime.SpecifyKind(exhibition.EndDate, DateTimeKind.Utc);


			_exhibitionRepostory.Create(exhibition);


			return Ok(exhibition);
		}





	}
}
