using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MovieAPI.Data;

namespace MovieAPI.Controllers
{
    [ApiController]
    [Route("api/[genre]")]
    public class GenreController : ControllerBase
    {
        private readonly ILogger<GenreController> _logger;
        
        private readonly ApplicationDbContext _context;
        public GenreController(ILogger<GenreController> logger,
            ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }
    }
}