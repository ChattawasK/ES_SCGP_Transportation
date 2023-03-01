using SCGP_Transportation.Core.Models;

namespace SCGP_Transportation.Service.Interfaces
{
    public interface IStudentRepository
    {
        Task<Student> GetStudent(int teacherId, int studentId, bool trackChanges);
        Task CreateStudentForTeacher(int teacherId, Student student);
        Task DeleteStudent(Student student);
    }
}