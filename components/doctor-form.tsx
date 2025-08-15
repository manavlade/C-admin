"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"

export function DoctorForm() {
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [specialty, setSpecialty] = useState<string>("")
  const [licenseNumber, setLicenseNumber] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({
      fullName,
      email,
      phone,
      specialty,
      licenseNumber,
    })
    toast({
      title: "Doctor Added!",
      description: `${fullName} has been successfully registered as a doctor.`,
    })
    // Reset form or close dialog
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="fullName" className="md:text-right">
          Full Name
        </Label>
        <Input
          id="fullName"
          placeholder="Dr. John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="md:text-right">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="phone" className="md:text-right">
          Phone
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="555-123-4567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="md:col-span-3"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="specialty" className="md:text-right">
          Specialty
        </Label>
        <Input
          id="specialty"
          placeholder="e.g., Oncologist, Radiologist"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="licenseNumber" className="md:text-right">
          License Number
        </Label>
        <Input
          id="licenseNumber"
          placeholder="e.g., MD12345"
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>

      <Button type="submit" className="col-span-full mt-6">
        Add Doctor
      </Button>
    </form>
  )
}
