"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

interface ReportUploadFormProps {
  patientId?: string
  patientName?: string
}

export function ReportUploadForm({
  patientId: preselectedPatientId,
  patientName: preselectedPatientName,
}: ReportUploadFormProps) {
  const [patientId, setPatientId] = useState<string>(preselectedPatientId || "")
  const [consultantId, setConsultantId] = useState<string>("")
  const [reportName, setReportName] = useState<string>("")
  const [reportDate, setReportDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [notes, setNotes] = useState<string>("")
  const [file, setFile] = useState<File | null>(null)

  // Dummy data for patients and labs
  const patients = [
    { id: "1", name: "Alice Johnson" },
    { id: "2", name: "Bob Williams" },
    { id: "3", name: "Charlie Brown" },
  ]

  const labs = [
    { id: "lab1", name: "LabCorp Diagnostics" },
    { id: "lab2", name: "Quest Diagnostics" },
    { id: "lab3", name: "Mayo Clinic Labs" },
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
        description: "Please select a report file to upload.",
        variant: "destructive",
      })
      return
    }

    console.log({
      patientId,
      consultantId,
      reportName,
      reportDate,
      notes,
      fileName: file.name,
      fileSize: file.size,
    })
    toast({
      title: "Report Uploaded!",
      description: "The lab report has been successfully uploaded.",
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
          Lab
        </Label>
        <Select onValueChange={setConsultantId} value={consultantId}>
          <SelectTrigger className="md:col-span-3">
            <SelectValue placeholder="Select a lab" />
          </SelectTrigger>
          <SelectContent>
            {labs.map((lab) => (
              <SelectItem key={lab.id} value={lab.id}>
                {lab.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="reportName" className="md:text-right">
          Report Name
        </Label>
        <Input
          id="reportName"
          placeholder="e.g., Blood Test Results, MRI Scan"
          value={reportName}
          onChange={(e) => setReportName(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="reportDate" className="md:text-right">
          Date Generated
        </Label>
        <Input
          id="reportDate"
          type="date"
          value={reportDate}
          onChange={(e) => setReportDate(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="reportFile" className="md:text-right">
          Upload File
        </Label>
        <Input id="reportFile" type="file" onChange={handleFileChange} className="md:col-span-3" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="notes" className="md:text-right">
          Notes
        </Label>
        <Textarea
          id="notes"
          placeholder="Additional notes about the report"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="md:col-span-3"
        />
      </div>

      <Button type="submit" className="col-span-full mt-6">
        Upload Report
      </Button>
    </form>
  )
}
