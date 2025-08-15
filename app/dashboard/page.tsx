import { CardDescription } from "@/components/ui/card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Users, CalendarDays, Stethoscope, DollarSign, MessageSquare, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AppointmentForm } from "@/components/appointment-form"
import { TumorBoardForm } from "@/components/tumor-board-form"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">+15% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Doctors</CardTitle>
            <Stethoscope className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">35</div>
            <p className="text-xs text-muted-foreground">+2 new doctors this quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Online Payments</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345</div>
            <p className="text-xs text-muted-foreground">+10% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Shortcut to Book New Appointment */}
        <Card className="flex flex-col items-center justify-center p-6 text-center">
          <CardTitle className="mb-4 text-lg">Book New Appointment</CardTitle>
          <CardDescription className="mb-4">Quickly schedule a new patient appointment.</CardDescription>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" /> Book Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Book New Appointment</DialogTitle>
                <DialogDescription>Schedule a new appointment for a patient with a doctor.</DialogDescription>
              </DialogHeader>
              <AppointmentForm />
            </DialogContent>
          </Dialog>
        </Card>

        {/* Shortcut to Create New Tumor Board */}
        <Card className="flex flex-col items-center justify-center p-6 text-center">
          <CardTitle className="mb-4 text-lg">Create New Tumor Board</CardTitle>
          <CardDescription className="mb-4">Initiate a new multidisciplinary tumor board meeting.</CardDescription>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" /> Create Tumor Board
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Tumor Board Meeting</DialogTitle>
                <DialogDescription>Schedule a new multidisciplinary tumor board meeting.</DialogDescription>
              </DialogHeader>
              <TumorBoardForm />
            </DialogContent>
          </Dialog>
        </Card>

        {/* Keep Active Tumor Boards card or replace with another relevant summary */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tumor Boards</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Currently scheduled or ongoing</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity Feed</CardTitle>
          <CardDescription>Latest actions and updates in the portal.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-primary">Alice Johnson</span> booked an online appointment with{" "}
              <span className="font-medium text-primary">Dr. Emily White</span>.
            </li>
            <li>
              <span className="font-medium text-primary">Dr. John Smith</span> uploaded a new MRI report for{" "}
              <span className="font-medium text-primary">Bob Williams</span>.
            </li>
            <li>
              New prescription issued for <span className="font-medium text-primary">Charlie Brown</span>.
            </li>
            <li>
              <span className="font-medium text-primary">Dr. Sarah Lee</span> updated her weekly availability.
            </li>
            <li>
              Tumor Board for <span className="font-medium text-primary">Diana Miller</span> scheduled for July 25th.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
