using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class StaffController : ControllerBase
{
    [HttpGet("tasks")]
    public IActionResult GetTasks()
    {
        var tasks = new[]
        {
            new { Name = "Complete project report", Status = "In Progress", DueDate = "2024-09-01" },
            new { Name = "Update client documentation", Status = "Completed", DueDate = "2024-08-20" }
        };

        return Ok(new { Tasks = tasks });
    }

    [HttpGet("projects")]
    public IActionResult GetProjects()
    {
        var projects = new[]
        {
            new { Name = "Project Alpha", Progress = 75, Deadline = "2024-09-30" },
            new { Name = "Project Beta", Progress = 40, Deadline = "2024-10-15" }
        };

        return Ok(new { Projects = projects });
    }

    [HttpGet("deadlines")]
    public IActionResult GetDeadlines()
    {
        var deadlines = new[]
        {
            new { Task = "Submit quarterly report", Date = "2024-08-31" },
            new { Task = "Client feedback review", Date = "2024-09-10" }
        };

        return Ok(new { Deadlines = deadlines });
    }

    [HttpGet("announcements")]
    public IActionResult GetAnnouncements()
    {
        var announcements = new[]
        {
            "Company-wide meeting on September 5th.",
            "New remote work policy effective from September 1st."
        };

        return Ok(new { Announcements = announcements });
    }

    [HttpGet("schedule")]
    public IActionResult GetSchedule()
    {
        var schedule = new[]
        {
            new { Title = "Team meeting", Date = "2024-08-30", Time = "10:00 AM" },
            new { Title = "Project Alpha review", Date = "2024-09-02", Time = "2:00 PM" }
        };

        return Ok(new { Schedule = schedule });
    }
}
