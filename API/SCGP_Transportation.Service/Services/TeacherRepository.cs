using Microsoft.EntityFrameworkCore;
using SCGP_Transportation.Core.Models;
using SCGP_Transportation.Repository.Data;
using SCGP_Transportation.Repository.GenericRepository.Service;
using SCGP_Transportation.Service.Interfaces;

namespace SCGP_Transportation.Service.Services
{
    public class TeacherRepository : RepositoryBase<Teacher>, ITeacherRepository
    {
        public TeacherRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public async Task CreateTeacher(Teacher teacher) => await CreateAsync(teacher);

        public async Task<IEnumerable<Teacher>> GetAllTeachers(bool trackChanges)
            => await FindAllAsync(trackChanges).Result.ToListAsync();

        public async Task<Teacher?> GetTeacher(int teacherId, bool trackChanges)
            => await FindByConditionAsync(c => c.Id.Equals(teacherId), trackChanges).Result.SingleOrDefaultAsync();
    }
}