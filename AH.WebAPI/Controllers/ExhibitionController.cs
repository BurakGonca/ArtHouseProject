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


		//[HttpGet]
		//public IActionResult Get()
		//{

		//	List<Exhibition> exhibitions = _exhibitionRepostory.GetAll().ToList();
		//	var exhibitionDtos = _mapper.Map<List<ExhibitionDto>>(exhibitions);

		//	List<ExhibitionViewModel> viewModelList = new List<ExhibitionViewModel>();

		//	foreach (var item in exhibitionDtos)
		//	{
		//		var viewModel = new ExhibitionViewModel();

		//		viewModel.Name = item.Name;
		//		viewModel.Description = item.Description;
		//		viewModel.ImageName = item.ImageName;
		//		viewModel.StartDate = item.StartDate;
		//		viewModel.EndDate = item.EndDate;

		//		viewModelList.Add(viewModel);

		//	}




		//	return Ok(exhibitionDtos);

		//}


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

			//posgresql icin dateTime ayarı 
			exhibition.StartDate = DateTime.SpecifyKind(exhibition.StartDate, DateTimeKind.Utc);
			exhibition.EndDate = DateTime.SpecifyKind(exhibition.EndDate, DateTimeKind.Utc);

			_exhibitionRepostory.Create(exhibition);
			return Ok(exhibition);
		}


		//[HttpPut("{id}")]
		//public IActionResult Put(int id,ExhibitionDto dto)
		//{
		//	var exhibition = _exhibitionRepostory.GetById(id);



		//	exhibition.Name = dto.Name;
		//	exhibition.Description = dto.Description;
		//	exhibition.ImageName = dto.ImageName;
		//	exhibition.StartDate = DateTime.SpecifyKind(dto.StartDate, DateTimeKind.Utc);
		//	exhibition.EndDate = DateTime.SpecifyKind(dto.EndDate, DateTimeKind.Utc);
		//	exhibition.CategoryId = dto.CategoryId;


		//	_exhibitionRepostory.Update(exhibition);

		//	return Ok(exhibition);


		//}




		[HttpPatch("{id}")]
		public IActionResult Patch(int id,ExhibitionDto dto)
		{
			var exhibition = _exhibitionRepostory.GetById(id);

			if (exhibition == null)
			{
				return NotFound();
			}

			var updatedExhibition = _mapper.Map<Exhibition>(dto);

			
			updatedExhibition.Id = exhibition.Id;
			updatedExhibition.CreatedDate = exhibition.CreatedDate;
			updatedExhibition.UpdatedDate = DateTime.UtcNow;

			
			_exhibitionRepostory.Update(updatedExhibition);

			return Ok(updatedExhibition);
		}




	}
}
