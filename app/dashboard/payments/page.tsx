import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PaymentsTable } from "@/components/payments-table"

export default function PaymentsPage() {
  // Dummy data for demonstration
  const payments = [
    {
      id: "pay1",
      patientName: "Alice Johnson",
      amount: 150.0,
      currency: "USD",
      status: "paid",
      paymentDate: "2025-07-14",
      transactionId: "TXN12345",
    },
    {
      id: "pay2",
      patientName: "Bob Williams",
      amount: 75.0,
      currency: "USD",
      status: "pending",
      paymentDate: "2025-07-16",
      transactionId: "TXN67890",
    },
    {
      id: "pay3",
      patientName: "Diana Miller",
      amount: 200.0,
      currency: "USD",
      status: "paid",
      paymentDate: "2025-07-12",
      transactionId: "TXN11223",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Payments Management</h1>
        <Button>View Payment Reports</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Online Payments</CardTitle>
          <CardDescription>Track and manage all online payments for appointments and services.</CardDescription>
        </CardHeader>
        <CardContent>
          <PaymentsTable payments={payments} />
        </CardContent>
      </Card>
    </div>
  )
}
