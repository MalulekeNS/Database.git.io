using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class CustomerController : ControllerBase
{
    [HttpGet("projects")]
    public IActionResult GetProjects()
    {
        var projects = new[]
        {
            new { Name = "Project X", Status = "In Progress", Deadline = "2024-09-30" },
            new { Name = "Project Y", Status = "Completed", Deadline = "2024-08-15" }
        };

        return Ok(new { Projects = projects });
    }

    [HttpGet("invoices")]
    public IActionResult GetInvoices()
    {
        var invoices = new[]
        {
            new { Number = "INV001", Amount = 5000.00, Status = "Paid", DueDate = "2024-08-01" },
            new { Number = "INV002", Amount = 3000.00, Status = "Pending", DueDate = "2024-09-01" }
        };

        return Ok(new { Invoices = invoices });
    }

    [HttpGet("support")]
    public IActionResult GetSupportTickets()
    {
        var tickets = new[]
        {
            new { Id = "TCK001", Issue = "System error", Status = "Resolved", CreatedDate = "2024-08-15" },
            new { Id = "TCK002", Issue = "Login issue", Status = "Open", CreatedDate = "2024-08-20" }
        };

        return Ok(new { Tickets = tickets });
    }

    [HttpGet("meetings")]
    public IActionResult GetUpcomingMeetings()
    {
        var meetings = new[]
        {
            new { Title = "Monthly Review", Date = "2024-08-30", Time = "10:00 AM" },
            new { Title = "Project Kickoff", Date = "2024-09-05", Time = "2:00 PM" }
        };

        return Ok(new { Meetings = meetings });
    }

    [HttpGet("announcements")]
    public IActionResult GetAnnouncements()
    {
        var announcements = new[]
        {
            "New feature release on September 1st.",
            "Maintenance window scheduled for August 28th."
        };

        return Ok(new { Announcements = announcements });
    }
}
