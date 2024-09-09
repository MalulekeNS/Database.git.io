using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class AdminController : ControllerBase
{
    [HttpGet("users")]
    public IActionResult GetUsers()
    {
        var users = new[]
        {
            new { Id = "1", Name = "Alice Johnson", Role = "Admin", Status = "Active" },
            new { Id = "2", Name = "Bob Brown", Role = "Manager", Status = "Inactive" }
        };

        return Ok(new { Users = users });
    }

    [HttpGet("statistics")]
    public IActionResult GetStatistics()
    {
        var statistics = new
        {
            TotalUsers = 50,
            ActiveProjects = 10,
            SystemUptime = "99.9%"
        };

        return Ok(statistics);
    }

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

    [HttpGet("financials")]
    public IActionResult GetFinancials()
    {
        var financials = new
        {
            TotalRevenue = 150000,
            TotalExpenses = 50000,
            ProfitMargin = 66.67
        };

        return Ok(financials);
    }

    [HttpGet("activities")]
    public IActionResult GetRecentActivities()
    {
        var activities = new[]
        {
            "User Alice Johnson updated project status.",
            "System maintenance performed on August 25th."
        };

        return Ok(new { Activities = activities });
    }

    [HttpGet("announcements")]
    public IActionResult GetAnnouncements()
    {
        var announcements = new[]
        {
            "New system update available.",
            "Quarterly financial review scheduled for September 10th."
        };

        return Ok(new { Announcements = announcements });
    }
}
/**************************************************************upload documents****************************************/
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class DocumentController : ControllerBase
{
    private static readonly List<Document> Documents = new List<Document>();
    private static readonly string UploadPath = Path.Combine(Directory.GetCurrentDirectory(), "UploadedFiles");

    public DocumentController()
    {
        if (!Directory.Exists(UploadPath))
        {
            Directory.CreateDirectory(UploadPath);
        }
    }

    [HttpGet("documents")]
    public IActionResult GetDocuments()
    {
        var documents = Documents.Select(doc => new
        {
            doc.Id,
            doc.Name,
            UploadDate = doc.UploadDate
        }).ToArray();
        return Ok(new { Documents = documents });
    }

    [HttpPost("upload")]
    public async Task<IActionResult> UploadDocument(IFormFile document)
    {
        if (document == null || document.Length == 0)
        {
            return BadRequest("No file uploaded.");
        }

        var filePath = Path.Combine(UploadPath, document.FileName);
        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await document.CopyToAsync(stream);
        }

        Documents.Add(new Document
        {
            Id = Guid.NewGuid().ToString(),
            Name = document.FileName,
            UploadDate = DateTime.Now
        });

        return Ok();
    }

    [HttpGet("documents/{id}/download")]
    public IActionResult DownloadDocument(string id)
    {
        var doc = Documents.SingleOrDefault(d => d.Id == id);
        if (doc == null)
        {
            return NotFound();
        }

        var filePath = Path.Combine(UploadPath, doc.Name);
        if (!System.IO.File.Exists(filePath))
        {
            return NotFound();
        }

        var fileBytes = System.IO.File.ReadAllBytes(filePath);
        return File(fileBytes, "application/octet-stream", doc.Name);
    }

    [HttpDelete("documents/{id}")]
    public IActionResult DeleteDocument(string id)
    {
        var doc = Documents.SingleOrDefault(d => d.Id == id);
        if (doc == null)
        {
            return NotFound();
        }

        Documents.Remove(doc);
        var filePath = Path.Combine(UploadPath, doc.Name);
        if (System.IO.File.Exists(filePath))
        {
            System.IO.File.Delete(filePath);
        }

        return Ok();
    }
}

public class Document
{
    public string Id { get; set; }
    public string Name { get; set; }
    public DateTime UploadDate { get; set; }
}
