using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class AccountantController : ControllerBase
{
    [HttpGet("overview")]
    public IActionResult GetFinancialOverview()
    {
        var overview = new
        {
            totalRevenue = 100000.00,
            totalExpenses = 50000.00,
            netProfit = 50000.00
        };

        return Ok(overview);
    }

    [HttpGet("invoices")]
    public IActionResult GetInvoices()
    {
        var invoices = new[]
        {
            new { invoiceNumber = "INV001", client = "Client A", amount = 500.00, status = "Paid", dueDate = "2024-09-01" },
            new { invoiceNumber = "INV002", client = "Client B", amount = 750.00, status = "Pending", dueDate = "2024-09-15" }
        };

        return Ok(new { invoices });
    }

    [HttpGet("expenses")]
    public IActionResult GetExpenses()
    {
        var expenses = new[]
        {
            new { expenseId = "EXP001", description = "Office Supplies", amount = 200.00, date = "2024-08-15" },
            new { expenseId = "EXP002", description = "Internet Bill", amount = 100.00, date = "2024-08-20" }
        };

        return Ok(new { expenses });
    }

    [HttpGet("transactions")]
    public IActionResult GetTransactions()
    {
        var transactions = new[]
        {
            new { transactionId = "TRX001", description = "Sale", amount = 1000.00, date = "2024-08-10" },
            new { transactionId = "TRX002", description = "Refund", amount = -50.00, date = "2024-08-12" }
        };

        return Ok(new { transactions });
    }

    [HttpGet("revenue")]
    public IActionResult GetRevenueAnalysis()
    {
        var revenueData = new
        {
            revenue = new[]
            {
                new { month = "January", amount = 8000.00 },
                new { month = "February", amount = 7000.00 }
            }
        };

        return Ok(revenueData);
    }
}
