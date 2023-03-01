using AutoMapper;
using SCGP_Transportation.Core.Dtos;
using SCGP_Transportation.Core.Models;

namespace SCGP_Transportation.Core.Mappings
{
	public class TeacherMappingProfile : Profile
    {
        public TeacherMappingProfile()
        {
            CreateMap<Teacher, TeacherDto>();

            CreateMap<TeacherCreationDto, Teacher>();

            CreateMap<TeacherUpdateDto, Teacher>().ReverseMap();
        }
    }
}