using SCGP_Transportation.Core.Models;

namespace SCGP_Transportation.Service.Interfaces
{
    public interface ITeacherRepository
    {
        Task<IEnumerable<Teacher>> GetAllTeachers(bool trackChanges);
        Task<Teacher> GetTeacher(int teacherId, bool trackChanges);
        Task CreateTeacher(Teacher teacher);
    }
}