"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"

export function AppointmentForm() {
  const [patientId, setPatientId] = useState<string>("")
  const [consultantId, setConsultantId] = useState<string>("")
  const [appointmentType, setAppointmentType] = useState<string>("offline")
  const [appointmentDate, setAppointmentDate] = useState<string>("")
  const [appointmentTime, setAppointmentTime] = useState<string>("")
  const [notes, setNotes] = useState<string>("")

  // Dummy data for patients and consultants
  const patients = [
    { id: "1", name: "Alice Johnson" },
    { id: "2", name: "Bob Williams" },
    { id: "3", name: "Charlie Brown" },
  ]

  const consultants = [
    { id: "con1", name: "Dr. Emily White", type: "doctor", specialty: "Oncologist", city: "New York" },
    { id: "con2", name: "Dr. John Smith", type: "doctor", specialty: "Radiologist", city: "Los Angeles" },
    { id: "con3", name: "LabCorp Diagnostics", type: "lab", specialty: "Pathology & Blood Work", city: "Chicago" },
    { id: "con4", name: "Sarah Lee, RD", type: "nutritionist", specialty: "Clinical Nutrition", city: "Houston" },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "doctor":
        return "default"
      case "lab":
        return "secondary"
      case "nutritionist":
        return "outline"
      default:
        return "outline"
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({
      patientId,
      consultantId,
      appointmentType,
      appointmentDate,
      appointmentTime,
      notes,
    })
    toast({
      title: "Appointment Booked!",
      description: "The new appointment has been successfully scheduled.",
    })
    // Reset form or close dialog
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="patient" className="md:text-right">
          Patient
        </Label>
        <Select onValueChange={setPatientId} value={patientId}>
          <SelectTrigger className="md:col-span-3">
            <SelectValue placeholder="Select a patient" />
          </SelectTrigger>
          <SelectContent>
            {patients.map((patient) => (
              <SelectItem key={patient.id} value={patient.id}>
                {patient.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="consultant" className="md:text-right">
          Consultant
        </Label>
        <Select onValueChange={setConsultantId} value={consultantId}>
          <SelectTrigger className="md:col-span-3">
            <SelectValue placeholder="Select a consultant" />
          </SelectTrigger>
          <SelectContent>
            {consultants.map((consultant) => (
              <SelectItem key={consultant.id} value={consultant.id}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <span className="font-medium">{consultant.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {consultant.specialty} • {consultant.city}
                    </span>
                  </div>
                  <Badge variant={getTypeColor(consultant.type)} className="ml-2">
                    {consultant.type.charAt(0).toUpperCase() + consultant.type.slice(1)}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label className="md:text-right">Appointment Type</Label>
        <RadioGroup defaultValue="offline" onValueChange={setAppointmentType} className="flex space-x-4 md:col-span-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="offline" id="offline" />
            <Label htmlFor="offline">In-Person</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="online" id="online" />
            <Label htmlFor="online">Online</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="appointmentDate" className="md:text-right">
          Date
        </Label>
        <Input
          id="appointmentDate"
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          className="md:col-span-3"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="appointmentTime" className="md:text-right">
          Time
        </Label>
        <Input
          id="appointmentTime"
          type="time"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          className="md:col-span-3"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="notes" className="md:text-right">
          Notes
        </Label>
        <Textarea
          id="notes"
          placeholder="Any specific notes for the appointment"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="md:col-span-3"
        />
      </div>

      <Button type="submit" className="col-span-full mt-6">
        Book Appointment
      </Button>
    </form>
  )
}
