using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

public class AccountantController : Controller
{
    private readonly ApplicationDbContext _context;

    public AccountantController(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IActionResult> Overview()
    {
        var overview = new
        {
            TotalRevenue = await _context.Revenues.SumAsync(r => r.Amount),
            TotalExpenses = await _context.Expenses.SumAsync(e => e.Amount),
            NetProfit = (await _context.Revenues.SumAsync(r => r.Amount)) - (await _context.Expenses.SumAsync(e => e.Amount))
        };

        return View(overview);
    }

    public async Task<IActionResult> Invoices()
    {
        var invoices = await _context.Invoices.ToListAsync();
        return View(invoices);
    }

    public async Task<IActionResult> Expenses()
    {
        var expenses = await _context.Expenses.ToListAsync();
        return View(expenses);
    }

    public async Task<IActionResult> Transactions()
    {
        var transactions = await _context.Transactions.ToListAsync();
        return View(transactions);
    }

    public async Task<IActionResult> Revenue()
    {
        var revenueData = await _context.Revenues.ToListAsync();
        return View(revenueData);
    }
}
