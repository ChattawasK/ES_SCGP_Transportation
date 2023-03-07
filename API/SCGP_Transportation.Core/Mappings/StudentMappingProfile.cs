using AutoMapper;
using SCGP_Transportation.Core.Dtos;
using SCGP_Transportation.Core.Models;

namespace SCGP_Transportation.Core.Mappings
{
	public class StudentMappingProfile : Profile
	{
        public StudentMappingProfile()
        {
            CreateMap<Student, StudentDto>();

            CreateMap<StudentCreationDto, Student>();

            CreateMap<StudentUpdateDto, Student>().ReverseMap();
        }
    }
}