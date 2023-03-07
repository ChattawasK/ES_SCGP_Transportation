using Microsoft.EntityFrameworkCore;
using SCGP_Transportation.Core.Models;
using SCGP_Transportation.Repository.Data.Seeds;

namespace SCGP_Transportation.Repository.Data
{
	public class RepositoryContext: DbContext
	{
        public RepositoryContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TeacherData());
            modelBuilder.ApplyConfiguration(new StudentData());
        }

        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Student> Students { get; set; }    
	}
}