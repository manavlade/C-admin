import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TumorBoardsTable } from "@/components/tumor-boards-table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TumorBoardForm } from "@/components/tumor-board-form"

export default function TumorBoardsPage() {
  // Dummy data for demonstration
  const tumorBoards = [
    {
      id: "tb1",
      patientName: "Alice Johnson",
      primaryDoctor: "Dr. Emily White",
      participatingDoctors: ["Dr. John Smith", "Dr. Sarah Lee"],
      meetingDateTime: "2025-07-20 09:00 AM",
      status: "scheduled",
      paymentStatus: "paid",
      meetingLink: "https://meet.google.com/xyz-123-abc", // Added meeting link
    },
    {
      id: "tb2",
      patientName: "Bob Williams",
      primaryDoctor: "Dr. John Smith",
      participatingDoctors: ["Dr. Emily White"],
      meetingDateTime: "2025-07-22 01:00 PM",
      status: "pending", // No join button for pending
      paymentStatus: "pending",
    },
    {
      id: "tb3",
      patientName: "Diana Miller",
      primaryDoctor: "Dr. Emily White",
      participatingDoctors: [],
      meetingDateTime: "2025-07-25 10:30 AM",
      status: "completed", // No join button for completed
      paymentStatus: "paid",
      meetingLink: "https://zoom.us/j/9876543210",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tumor Boards Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create New Tumor Board</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Tumor Board Meeting</DialogTitle>
              <DialogDescription>Schedule a new multidisciplinary tumor board meeting.</DialogDescription>
            </DialogHeader>
            <TumorBoardForm />
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Tumor Boards</CardTitle>
          <CardDescription>Manage multidisciplinary tumor board meetings for patients.</CardDescription>
        </CardHeader>
        <CardContent>
          <TumorBoardsTable tumorBoards={tumorBoards} />
        </CardContent>
      </Card>
    </div>
  )
}
