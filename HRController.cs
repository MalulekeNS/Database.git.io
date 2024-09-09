using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class HRController : ControllerBase
{
    [HttpGet("overview")]
    public IActionResult GetEmployeeOverview()
    {
        var overview = new
        {
            TotalEmployees = 150,
            NewHires = 5,
            ActiveEmployees = 140,
            InactiveEmployees = 10
        };

        return Ok(overview);
    }

    [HttpGet("recruitment")]
    public IActionResult GetRecruitmentStatus()
    {
        var positions = new[]
        {
            new { Position = "Software Developer", Status = "Open", OpenSince = "2024-08-01" },
            new { Position = "Project Manager", Status = "Closed", OpenSince = "2024-07-15" }
        };

        return Ok(new { Positions = positions });
    }

    [HttpGet("performance")]
    public IActionResult GetPerformanceMetrics()
    {
        // Dummy data for performance metrics
        var performanceMetrics = new
        {
            Metrics = new[]
            {
                new { Employee = "John Doe", Rating = "Excellent" },
                new { Employee = "Jane Smith", Rating = "Good" }
            }
        };

        return Ok(performanceMetrics);
    }

    [HttpGet("attendance")]
    public IActionResult GetAttendanceTracking()
    {
        var attendance = new[]
        {
            new { Employee = "John Doe", DaysAbsent = 2, DaysPresent = 20 },
            new { Employee = "Jane Smith", DaysAbsent = 1, DaysPresent = 21 }
        };

        return Ok(new { Attendance = attendance });
    }

    [HttpGet("activities")]
    public IActionResult GetRecentActivities()
    {
        var activities = new[]
        {
            "Conducted performance reviews",
            "Scheduled interviews for open positions",
            "Updated employee records"
        };

        return Ok(new { Activities = activities });
    }
}
