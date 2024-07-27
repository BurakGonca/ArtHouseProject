
using AH.Application.Mappers;
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
			
			var builder = WebApplication.CreateBuilder(args);



			// JSON serializer ayarlar�
			//builder.Services.AddControllers().AddJsonOptions(options =>
			//{
			//	options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
			//});


			// JSON serializer ayarlar�
			builder.Services.AddControllers().AddJsonOptions(options =>
			{
				options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
				options.JsonSerializerOptions.DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull;
				options.JsonSerializerOptions.WriteIndented = true;

				
			});

			




			IConfiguration configuration = builder.Configuration;

			
			builder.Services.AddPersistenceServices(configuration);
			builder.Services.AddInfrastructureServices();

			
			// Add services to the container.

			builder.Services.AddControllers();
			// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			builder.Services.AddEndpointsApiExplorer();

			//builder.Services.AddSwaggerGen();



			
			builder.Services.AddAutoMapper(typeof(MappingProfile));
			


			
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



			
			builder.Services.AddSwaggerGen(c =>
			{
				c.SwaggerDoc("v1", new OpenApiInfo { Title = "AH.WebAPI", Version = "v1" });
			});


			var app = builder.Build();

			


			
			if (app.Environment.IsDevelopment())
			{
				app.UseDeveloperExceptionPage(); 
				app.UseSwagger(); 
				app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "AH.WebAPI v1")); 
			}


			
			app.UseCors("AllowAllOrigins");



		
			app.UseHttpsRedirection(); // Redirect HTTP requests to HTTPS
			app.UseRouting(); // Enable routing



			app.UseAuthorization();


			app.MapControllers();

			app.Run();





		}
	}
}
