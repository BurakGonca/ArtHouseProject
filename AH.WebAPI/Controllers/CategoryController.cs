using AH.Application.Interfaces.Repositories;
using AH.Domain.Entities;
using AH.Persistence.Repositories.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AH.WebAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CategoryController : ControllerBase
	{
		readonly ICategoryRepository _categoryRepository;

		public CategoryController(ICategoryRepository categoryRepository)
		{
			_categoryRepository = categoryRepository;
		}

		[HttpGet]
		public IActionResult Get()
		{
			List<Category> categories = _categoryRepository.GetAll().ToList();

			return Ok(categories);
		}




	}
}
