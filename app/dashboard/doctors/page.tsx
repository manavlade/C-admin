"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DoctorsTable } from "@/components/doctors-table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog" // Import DialogTrigger
import { WeeklyAvailabilityManager } from "@/components/weekly-availability-manager"
import { DoctorForm } from "@/components/doctor-form" // Import the new DoctorForm

interface Doctor {
  id: string
  name: string
  email: string
  phone: string
  specialty: string
  status: string
}

export default function DoctorsPage() {
  const [isAvailabilityDialogOpen, setIsAvailabilityDialogOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)

  // Dummy data for demonstration
  const doctors: Doctor[] = [
    {
      id: "doc1",
      name: "Dr. Emily White",
      email: "emily.w@example.com",
      phone: "555-222-3333",
      specialty: "Oncologist",
      status: "Active",
    },
    {
      id: "doc2",
      name: "Dr. John Smith",
      email: "john.s@example.com",
      phone: "555-444-5555",
      specialty: "Radiologist",
      status: "Active",
    },
    {
      id: "doc3",
      name: "Dr. Sarah Lee",
      email: "sarah.l@example.com",
      phone: "555-666-7777",
      specialty: "Pathologist",
      status: "Inactive",
    },
    {
      id: "doc4",
      name: "Dr. Michael Chen",
      email: "michael.c@example.com",
      phone: "555-888-9999",
      specialty: "Surgeon",
      status: "Active",
    },
  ]

  const handleManageAvailability = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    setIsAvailabilityDialogOpen(true)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Doctors Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Doctor</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Doctor</DialogTitle>
              <DialogDescription>Fill in the details to register a new doctor.</DialogDescription>
            </DialogHeader>
            <DoctorForm />
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Registered Doctors</CardTitle>
          <CardDescription>Manage all registered doctors and their availabilities.</CardDescription>
        </CardHeader>
        <CardContent>
          <DoctorsTable doctors={doctors} onManageAvailability={handleManageAvailability} />
        </CardContent>
      </Card>

      {selectedDoctor && (
        <Dialog open={isAvailabilityDialogOpen} onOpenChange={setIsAvailabilityDialogOpen}>
          <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Manage Availability for {selectedDoctor.name}</DialogTitle>
              <DialogDescription>Set and view available time slots for this doctor.</DialogDescription>
            </DialogHeader>
            <WeeklyAvailabilityManager doctorId={selectedDoctor.id} doctorName={selectedDoctor.name} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
