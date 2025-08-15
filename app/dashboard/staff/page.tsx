import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StaffTable } from "@/components/staff-table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { StaffForm } from "@/components/staff-form"

export default function StaffPage() {
  // Dummy data for demonstration
  const staff = [
    {
      id: "staff1",
      name: "Jane Doe",
      email: "jane.d@example.com",
      phone: "555-100-2000",
      role: "Nurse",
      assignedDoctor: "Dr. Emily White",
      status: "Active",
    },
    {
      id: "staff2",
      name: "Mike Ross",
      email: "mike.r@example.com",
      phone: "555-101-2001",
      role: "Medical Assistant",
      assignedDoctor: "Dr. John Smith",
      status: "Active",
    },
    {
      id: "staff3",
      name: "Sarah Connor",
      email: "sarah.c@example.com",
      phone: "555-102-2002",
      role: "Receptionist",
      assignedDoctor: "", // Unassigned
      status: "Active",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Clinical Staff Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Staff Member</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Clinical Staff Member</DialogTitle>
              <DialogDescription>Fill in the details to add a new staff member.</DialogDescription>
            </DialogHeader>
            <StaffForm />
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Clinical Staff</CardTitle>
          <CardDescription>Manage all clinical staff members and their assignments.</CardDescription>
        </CardHeader>
        <CardContent>
          <StaffTable staff={staff} />
        </CardContent>
      </Card>
    </div>
  )
}
