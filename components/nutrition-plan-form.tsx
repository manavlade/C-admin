"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

interface NutritionPlanFormProps {
  patientId?: string
  patientName?: string
}

export function NutritionPlanForm({
  patientId: preselectedPatientId,
  patientName: preselectedPatientName,
}: NutritionPlanFormProps) {
  const [patientId, setPatientId] = useState<string>(preselectedPatientId || "")
  const [consultantId, setConsultantId] = useState<string>("")
  const [planName, setPlanName] = useState<string>("")
  const [planDate, setPlanDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [notes, setNotes] = useState<string>("")
  const [file, setFile] = useState<File | null>(null)

  // Dummy data for patients and nutritionists
  const patients = [
    { id: "1", name: "Alice Johnson" },
    { id: "2", name: "Bob Williams" },
    { id: "3", name: "Charlie Brown" },
  ]

  const nutritionists = [
    { id: "nut1", name: "Sarah Lee, RD" },
    { id: "nut2", name: "Mike Johnson, RD" },
    { id: "nut3", name: "Lisa Chen, RD" },
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      toast({
        title: "File Missing",
        description: "Please select a nutrition plan file to upload.",
        variant: "destructive",
      })
      return
    }

    console.log({
      patientId,
      consultantId,
      planName,
      planDate,
      notes,
      fileName: file.name,
      fileSize: file.size,
    })
    toast({
      title: "Nutrition Plan Created!",
      description: "The nutrition plan has been successfully created.",
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
          Nutritionist
        </Label>
        <Select onValueChange={setConsultantId} value={consultantId}>
          <SelectTrigger className="md:col-span-3">
            <SelectValue placeholder="Select a nutritionist" />
          </SelectTrigger>
          <SelectContent>
            {nutritionists.map((nutritionist) => (
              <SelectItem key={nutritionist.id} value={nutritionist.id}>
                {nutritionist.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="planName" className="md:text-right">
          Plan Name
        </Label>
        <Input
          id="planName"
          placeholder="e.g., Cancer Recovery Diet, Weight Management"
          value={planName}
          onChange={(e) => setPlanName(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="planDate" className="md:text-right">
          Date Created
        </Label>
        <Input
          id="planDate"
          type="date"
          value={planDate}
          onChange={(e) => setPlanDate(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="planFile" className="md:text-right">
          Upload File
        </Label>
        <Input id="planFile" type="file" onChange={handleFileChange} className="md:col-span-3" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="notes" className="md:text-right">
          Notes
        </Label>
        <Textarea
          id="notes"
          placeholder="Additional notes about the nutrition plan"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="md:col-span-3"
        />
      </div>

      <Button type="submit" className="col-span-full mt-6">
        Create Nutrition Plan
      </Button>
    </form>
  )
}
