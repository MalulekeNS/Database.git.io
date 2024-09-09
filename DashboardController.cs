using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class DashboardController : ControllerBase
{
    [HttpGet("{role}")]
    public IActionResult GetDashboardContent(string role)
    {
        var content = role.ToLower() switch
        {
            "admin" => new { Role = "Admin", Message = "Welcome to the Admin Dashboard." },
            "customer" => new { Role = "Customer", Message = "Welcome to the Customer Dashboard." },
            "staff" => new { Role = "Staff", Message = "Welcome to the Staff Dashboard." },
            "hr" => new { Role = "HR", Message = "Welcome to the HR Dashboard." },
            "accountant" => new { Role = "Accountant", Message = "Welcome to the Accountant Dashboard." },
            _ => new { Role = "Unknown", Message = "Role not recognized." }
        };

        return Ok(content);
    }
}


