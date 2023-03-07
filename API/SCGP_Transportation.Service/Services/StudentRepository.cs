using Microsoft.EntityFrameworkCore;
using SCGP_Transportation.Core.Models;
using SCGP_Transportation.Repository.Data;
using SCGP_Transportation.Repository.GenericRepository.Service;
using SCGP_Transportation.Service.Interfaces;

namespace SCGP_Transportation.Service.Services
{
    public class StudentRepository : RepositoryBase<Student>, IStudentRepository
    {
        public StudentRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public async Task CreateStudentForTeacher(int teacherId, Student student)
        {
            student.TeacherId = teacherId;
            await CreateAsync(student);
        }

        public async Task DeleteStudent(Student student) => await RemoveAsync(student);

        public async Task<Student?> GetStudent(int teacherId, int studentId, bool trackChanges)
            => await FindByConditionAsync(e => e.TeacherId.Equals(teacherId) && e.Id.Equals(studentId), trackChanges).Result.SingleOrDefaultAsync();
    }
}