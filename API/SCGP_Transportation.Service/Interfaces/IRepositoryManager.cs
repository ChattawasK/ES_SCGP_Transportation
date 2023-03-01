namespace SCGP_Transportation.Service.Interfaces
{
    public interface IRepositoryManager
    {
        ITeacherRepository Teacher { get; }
        IStudentRepository Student { get; }
        Task SaveAsync();
    }
}