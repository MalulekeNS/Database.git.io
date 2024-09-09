using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Invoice> Invoices { get; set; }
    public DbSet<Expense> Expenses { get; set; }
    public DbSet<Transaction> Transactions { get; set; }
    public DbSet<Announcement> Announcements { get; set; }
    public DbSet<Meeting> Meetings { get; set; }
    public DbSet<Schedule> Schedules { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        // Seed data or configure your model here
    }
}
