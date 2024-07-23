using AH.Application.Interfaces.Repositories;
using AH.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AH.WebAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ExhibitionController : ControllerBase
	{

		readonly IExhibitionRepostory _exhibitionRepostory;

		public ExhibitionController(IExhibitionRepostory exhibitionRepostory)
		{
			_exhibitionRepostory = exhibitionRepostory;
		}


		[HttpGet]
		public IActionResult Get()
		{
			List<Exhibition> exhibitions =  _exhibitionRepostory.GetAll().ToList();

			return Ok(exhibitions);
		}





	}
}
