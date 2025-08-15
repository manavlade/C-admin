"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ConsultantsTable } from "@/components/consultants-table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { WeeklyAvailabilityManager } from "@/components/weekly-availability-manager"
import { ConsultantForm } from "@/components/consultant-form"

interface Consultant {
  id: string
  name: string
  email: string
  phone: string
  consultantType: string
  city: string
  specialty: string
  status: string
}

export default function ConsultantsPage() {
  const [isAvailabilityDialogOpen, setIsAvailabilityDialogOpen] = useState(false)
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null)

  // Updated dummy data for demonstration
  const consultants: Consultant[] = [
    {
      id: "con1",
      name: "Dr. Emily White",
      email: "emily.w@example.com",
      phone: "555-222-3333",
      consultantType: "doctor",
      city: "New York",
      specialty: "Oncologist",
      status: "Active",
    },
    {
      id: "con2",
      name: "Dr. John Smith",
      email: "john.s@example.com",
      phone: "555-444-5555",
      consultantType: "doctor",
      city: "Los Angeles",
      specialty: "Radiologist",
      status: "Active",
    },
    {
      id: "con3",
      name: "LabCorp Diagnostics",
      email: "contact@labcorp.com",
      phone: "555-666-7777",
      consultantType: "lab",
      city: "Chicago",
      specialty: "Pathology & Blood Work",
      status: "Active",
    },
    {
      id: "con4",
      name: "Sarah Lee, RD",
      email: "sarah.l@example.com",
      phone: "555-888-9999",
      consultantType: "nutritionist",
      city: "Houston",
      specialty: "Clinical Nutrition",
      status: "Active",
    },
  ]

  const handleManageAvailability = (consultant: Consultant) => {
    setSelectedConsultant(consultant)
    setIsAvailabilityDialogOpen(true)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Consultants Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Consultant</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Consultant</DialogTitle>
              <DialogDescription>Fill in the details to register a new consultant.</DialogDescription>
            </DialogHeader>
            <ConsultantForm />
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Registered Consultants</CardTitle>
          <CardDescription>Manage all registered consultants and their availabilities.</CardDescription>
        </CardHeader>
        <CardContent>
          <ConsultantsTable consultants={consultants} onManageAvailability={handleManageAvailability} />
        </CardContent>
      </Card>

      {selectedConsultant && (
        <Dialog open={isAvailabilityDialogOpen} onOpenChange={setIsAvailabilityDialogOpen}>
          <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Manage Availability for {selectedConsultant.name}</DialogTitle>
              <DialogDescription>Set and view available time slots for this consultant.</DialogDescription>
            </DialogHeader>
            <WeeklyAvailabilityManager doctorId={selectedConsultant.id} doctorName={selectedConsultant.name} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
