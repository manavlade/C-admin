"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

interface PrescriptionFormProps {
  patientId?: string
  patientName?: string
}

export function PrescriptionForm({
  patientId: preselectedPatientId,
  patientName: preselectedPatientName,
}: PrescriptionFormProps) {
  const [patientId, setPatientId] = useState<string>(preselectedPatientId || "")
  const [consultantId, setConsultantId] = useState<string>("")
  const [prescriptionName, setPrescriptionName] = useState<string>("")
  const [datePrescribed, setDatePrescribed] = useState<string>(new Date().toISOString().split("T")[0])
  const [notes, setNotes] = useState<string>("")
  const [file, setFile] = useState<File | null>(null)

  // Dummy data for patients and doctors (consultants)
  const patients = [
    { id: "1", name: "Alice Johnson" },
    { id: "2", name: "Bob Williams" },
    { id: "3", name: "Charlie Brown" },
  ]

  const doctors = [
    { id: "doc1", name: "Dr. Emily White" },
    { id: "doc2", name: "Dr. John Smith" },
    { id: "doc3", name: "Dr. Sarah Lee" },
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({
      patientId,
      consultantId,
      prescriptionName,
      datePrescribed,
      notes,
      fileName: file?.name,
      fileSize: file?.size,
    })
    toast({
      title: "Prescription Created!",
      description: "The new prescription has been successfully recorded.",
    })
    // Reset form or close dialog
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="patient" className="md:text-right">
          Patient
        </Label>
        {preselectedPatientName ? (
          <Input value={preselectedPatientName} readOnly className="md:col-span-3" />
        ) : (
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
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="consultant" className="md:text-right">
          Doctor
        </Label>
        <Select onValueChange={setConsultantId} value={consultantId}>
          <SelectTrigger className="md:col-span-3">
            <SelectValue placeholder="Select a doctor" />
          </SelectTrigger>
          <SelectContent>
            {doctors.map((doctor) => (
              <SelectItem key={doctor.id} value={doctor.id}>
                {doctor.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="prescriptionName" className="md:text-right">
          Prescription Name
        </Label>
        <Input
          id="prescriptionName"
          placeholder="e.g., Cancer Treatment Protocol"
          value={prescriptionName}
          onChange={(e) => setPrescriptionName(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="datePrescribed" className="md:text-right">
          Date Prescribed
        </Label>
        <Input
          id="datePrescribed"
          type="date"
          value={datePrescribed}
          onChange={(e) => setDatePrescribed(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="prescriptionFile" className="md:text-right">
          Upload File (Optional)
        </Label>
        <Input id="prescriptionFile" type="file" onChange={handleFileChange} className="md:col-span-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="notes" className="md:text-right">
          Notes
        </Label>
        <Textarea
          id="notes"
          placeholder="Additional notes about the prescription"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="md:col-span-3"
        />
      </div>

      <Button type="submit" className="col-span-full mt-6">
        Create Prescription
      </Button>
    </form>
  )
}
