"use client"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PrescriptionsTable } from "@/components/prescriptions-table"
import { ReportsTable } from "@/components/reports-table"
import { NutritionPlansTable } from "@/components/nutrition-plans-table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PrescriptionForm } from "@/components/prescription-form"
import { ReportUploadForm } from "@/components/report-upload-form"
import { NutritionPlanForm } from "@/components/nutrition-plan-form"

export default function PatientDetailPage() {
  const params = useParams()
  const patientId = params.id as string

  // Dummy data for a single patient (in a real app, you'd fetch this)
  const patient = {
    id: patientId,
    name: "Alice Johnson",
    email: "alice.j@example.com",
    phone: "555-123-4567",
    dob: "1980-05-15",
    address: "123 Main St, Anytown, USA",
    medicalHistory: "Type 2 Diabetes, Hypertension, Previous Breast Cancer (2018)",
    primaryConsultant: "Dr. Emily White",
  }

  // Updated dummy data for prescriptions by doctors (removed status)
  const patientPrescriptions = [
    {
      id: "rx1",
      patientName: patient.name,
      consultantName: "Dr. Emily White",
      datePrescribed: "2025-07-10",
      prescriptionName: "Cancer Treatment Protocol",
      fileUrl: "/placeholder.pdf?query=prescription-alice-johnson",
    },
    {
      id: "rx4",
      patientName: patient.name,
      consultantName: "Dr. John Smith",
      datePrescribed: "2025-06-20",
      prescriptionName: "Pain Management Plan",
      fileUrl: "/placeholder.pdf?query=pain-management-alice-johnson",
    },
  ]

  // Updated dummy data for reports by labs (removed status)
  const patientReports = [
    {
      id: "rep1",
      patientName: patient.name,
      consultantName: "LabCorp Diagnostics",
      dateGenerated: "2025-07-01",
      reportName: "Pathology Report",
      fileUrl: "/placeholder.pdf?query=pathology-report-alice-johnson",
    },
    {
      id: "rep5",
      patientName: patient.name,
      consultantName: "Quest Diagnostics",
      dateGenerated: "2025-06-15",
      reportName: "Blood Test Results",
      fileUrl: "/placeholder.pdf?query=blood-test-results-alice-johnson",
    },
  ]

  // Updated dummy data for nutrition plans by nutritionists (removed status)
  const patientNutritionPlans = [
    {
      id: "np1",
      patientName: patient.name,
      consultantName: "Sarah Lee, RD",
      dateCreated: "2025-07-05",
      planName: "Cancer Recovery Diet",
      fileUrl: "/placeholder.pdf?query=nutrition-plan-alice-johnson",
    },
    {
      id: "np2",
      patientName: patient.name,
      consultantName: "Mike Johnson, RD",
      dateCreated: "2025-06-10",
      planName: "Weight Management Plan",
      fileUrl: "/placeholder.pdf?query=weight-management-plan-alice-johnson",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Patient Details: {patient.name}</h1>

      <Card>
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
          <CardDescription>Overview of {patient.name}&apos;s profile.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <p className="text-lg">{patient.email}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Phone</p>
            <p className="text-lg">{patient.phone}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
            <p className="text-lg">{patient.dob}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Primary Consultant</p>
            <p className="text-lg">{patient.primaryConsultant}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-medium text-muted-foreground">Address</p>
            <p className="text-lg">{patient.address}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-medium text-muted-foreground">Medical History</p>
            <p className="text-lg">{patient.medicalHistory}</p>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Prescriptions by Doctors */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Prescriptions by Doctors</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Prescription</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] lg:max-w-[800px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Prescription for {patient.name}</DialogTitle>
              <DialogDescription>Fill in the details to create a new prescription.</DialogDescription>
            </DialogHeader>
            <PrescriptionForm patientId={patient.id} patientName={patient.name} />
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Prescription History</CardTitle>
          <CardDescription>All prescriptions issued to {patient.name} by doctors.</CardDescription>
        </CardHeader>
        <CardContent>
          <PrescriptionsTable prescriptions={patientPrescriptions} />
        </CardContent>
      </Card>

      <Separator />

      {/* Reports by Labs */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Reports by Labs</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Upload New Report</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Upload New Lab Report for {patient.name}</DialogTitle>
              <DialogDescription>Upload a new lab report for this patient.</DialogDescription>
            </DialogHeader>
            <ReportUploadForm patientId={patient.id} patientName={patient.name} />
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Lab Reports</CardTitle>
          <CardDescription>All lab reports and diagnostic documents for {patient.name}.</CardDescription>
        </CardHeader>
        <CardContent>
          <ReportsTable reports={patientReports} />
        </CardContent>
      </Card>

      <Separator />

      {/* Nutrition Plans by Nutritionists */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Nutrition Plans by Nutritionists</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create New Nutrition Plan</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Nutrition Plan for {patient.name}</DialogTitle>
              <DialogDescription>Create a new nutrition plan for this patient.</DialogDescription>
            </DialogHeader>
            <NutritionPlanForm patientId={patient.id} patientName={patient.name} />
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Nutrition Plans</CardTitle>
          <CardDescription>All nutrition plans and dietary guidance for {patient.name}.</CardDescription>
        </CardHeader>
        <CardContent>
          <NutritionPlansTable nutritionPlans={patientNutritionPlans} />
        </CardContent>
      </Card>
    </div>
  )
}
