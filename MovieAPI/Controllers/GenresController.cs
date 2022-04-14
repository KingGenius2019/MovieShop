using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MovieAPI.Data;
using MovieAPI.Entities;

namespace MovieAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> _logger;
          private readonly ApplicationDbContext _context;
        public GenresController(ILogger<GenresController> logger,
      
            ApplicationDbContext context)
        {
            _context = context;
            _logger = logger;
        }
    
    
    [HttpGet]
    public async Task<ActionResult<List<Genre>>> GetGenres()
        {
            _logger.LogInformation("Getting all the genres");

            return await  _context.Genres.ToListAsync();
            // var genres = await _context.Genres.OrderBy(x => x.Name).ToListAsync();
            // return mapper.Map<List<GenreDTO>>(genres);
        }

        // [HttpGet("{Id:int}", Name = "getGenre")] // api/genres/example
        // public async Task<ActionResult<GenreDTO>> Get(int Id)
        // {
        //     var genre = await context.Genres.FirstOrDefaultAsync(x => x.Id == Id);

        //     if (genre == null)
        //     {
        //         return NotFound();
        //     }

        //     return mapper.Map<GenreDTO>(genre);
        // }

        [HttpPost]
        public async Task<ActionResult> Post(Genre genre)
        {
            // var genre = mapper.Map<Genre>(genreCreationDTO);
            _context.Add(genre);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // [HttpPut("{id:int}")]
        // public async Task<ActionResult> Put(int id, [FromBody] GenreCreationDTO genreCreationDTO)
        // {
        //     var genre = mapper.Map<Genre>(genreCreationDTO);
        //     genre.Id = id;
        //     context.Entry(genre).State = EntityState.Modified;
        //     await context.SaveChangesAsync();
        //     return NoContent();
        // }

        // [HttpDelete("{id:int}")]
        // public async Task<ActionResult> Delete(int Id)
        // {
        //     var genre = await context.Genres.FirstOrDefaultAsync(x => x.Id == Id);

        //     if (genre == null)
        //     {
        //         return NotFound();
        //     }

        //     context.Remove(genre);
        //     await context.SaveChangesAsync();
        //     return NoContent();

        // }
    }
}
