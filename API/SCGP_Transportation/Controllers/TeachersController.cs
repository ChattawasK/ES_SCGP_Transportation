using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SCGP_Transportation.Core.Dtos;
using SCGP_Transportation.Core.Models;
using SCGP_Transportation.Service.Filters;
using SCGP_Transportation.Service.Interfaces;
//using SCGP_Transportation.Models;

namespace SCGP_Transportation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeachersController : BaseApiController
    {
        public TeachersController(IRepositoryManager repository, ILoggerManager logger, IMapper mapper) : base(repository, logger, mapper)
        {
        }

        [HttpPost]
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        public async Task<IActionResult> CreateTeacher([FromBody] TeacherCreationDto teacher)
        {
            var teacherdata = _mapper.Map<Teacher>(teacher);
            await _repository.Teacher.CreateTeacher(teacherdata);
            await _repository.SaveAsync();
            var teacherReturn = _mapper.Map<TeacherDto>(teacherdata);
            return CreatedAtRoute("TeacherById",
                new
                {
                    teacherId = teacherReturn.Id
                },
                teacherReturn);
        }


        [HttpGet]
        public async Task<IActionResult> GetTeachers()
        {
            try
            {
                var teachers = await _repository.Teacher.GetAllTeachers(trackChanges: false);
                var teachersDto = _mapper.Map<IEnumerable<TeacherDto>>(teachers);
                return Ok(teachersDto);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong in the {nameof(GetTeachers)} action {ex}");
                return StatusCode(500, "Internal server error");
            }
            finally
            {
            }
        }


        [HttpGet("{teacherId}", Name = "TeacherById")]
        public async Task<IActionResult> GetTeacher(int teacherId)
        {
            var teacher = await _repository.Teacher.GetTeacher(teacherId, trackChanges: false);
            if (teacher is null)
            {
                _logger.LogInfo($"Teacher with id: {teacherId} doesn't exist in the database.");
                return NotFound();
            }
            else
            {
                var teacherDto = _mapper.Map<TeacherDto>(teacher);
                return Ok(teacherDto);
            }
        }


        [HttpPut("{teacherId}")]
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        [ServiceFilter(typeof(ValidateTeacherExists))]
        public async Task<IActionResult> UpdateTeacher(int teacherId, [FromBody] TeacherCreationDto teacher)
        {
            var teacherData = HttpContext.Items["teacher"] as Teacher;
            _mapper.Map(teacher, teacherData);
            await _repository.SaveAsync();
            return NoContent();
        }
    }
}