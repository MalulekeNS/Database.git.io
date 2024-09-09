public class Invoice
{
    public int Id { get; set; }
    public string InvoiceNumber { get; set; }
    public string Client { get; set; }
    public decimal Amount { get; set; }
    public string Status { get; set; }
    public DateTime DueDate { get; set; }
}

public class Expense
{
    public int Id { get; set; }
    public string Description { get; set; }
    public decimal Amount { get; set; }
    public DateTime Date { get; set; }
}


