
using AH.Infrastructure;
using AH.Persistence;
using Microsoft.Extensions.Configuration;
using Microsoft.OpenApi.Models;

namespace AH.WebAPI
{
	public class Program
	{
		public static void Main(string[] args)
		{
			//var builder = WebApplication.CreateBuilder(args);

			//// Add services to the container.

			//builder.Services.AddControllers();
			//// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			//builder.Services.AddEndpointsApiExplorer();
			//builder.Services.AddSwaggerGen();

			//var app = builder.Build();

			//// Configure the HTTP request pipeline.
			//if (app.Environment.IsDevelopment())
			//{
			//	app.UseSwagger();
			//	app.UseSwaggerUI();
			//}

			//app.UseAuthorization();


			//app.MapControllers();

			//app.Run();







			var builder = WebApplication.CreateBuilder(args);


			//ilave
			IConfiguration configuration = builder.Configuration;

			//ilave
			builder.Services.AddPersistenceServices(configuration);
			builder.Services.AddInfrastructureServices();

			



			// Add services to the container.

			builder.Services.AddControllers();
			// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			builder.Services.AddEndpointsApiExplorer();

			//builder.Services.AddSwaggerGen();


			//ilave
			builder.Services.AddCors(options =>
			{
				options.AddPolicy("AllowAllOrigins",
					builder =>
					{
						builder.AllowAnyOrigin()
							   .AllowAnyMethod()
							   .AllowAnyHeader();
					});
			});



			//ilave
			builder.Services.AddSwaggerGen(c =>
			{
				c.SwaggerDoc("v1", new OpenApiInfo { Title = "AH.WebAPI", Version = "v1" });
			});


			var app = builder.Build();

			// Configure the HTTP request pipeline.
			//if (app.Environment.IsDevelopment())
			//{
			//	app.UseSwagger();
			//	app.UseSwaggerUI();
			//}

			//ilave
			if (app.Environment.IsDevelopment())
			{
				app.UseDeveloperExceptionPage(); 
				app.UseSwagger(); 
				app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "AH.WebAPI v1")); 
			}


			//ilave
			app.UseCors("AllowAllOrigins");



			//ilave
			app.UseHttpsRedirection(); // Redirect HTTP requests to HTTPS
			app.UseRouting(); // Enable routing



			app.UseAuthorization();


			app.MapControllers();

			app.Run();





		}
	}
}
