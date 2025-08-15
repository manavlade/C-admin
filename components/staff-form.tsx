"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

export function StaffForm() {
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [consultantId, setConsultantId] = useState<string>("con1") // Updated default value

  // Dummy data for consultants
  const consultants = [
    { id: "con1", name: "Dr. Emily White" },
    { id: "con2", name: "Dr. John Smith" },
    { id: "con3", name: "Dr. Sarah Lee" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({
      fullName,
      email,
      phone,
      consultantId,
    })
    toast({
      title: "Staff Member Added!",
      description: `${fullName} has been successfully added to the clinical staff.`,
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
          placeholder="John Doe"
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
        <Label htmlFor="assignedConsultant" className="md:text-right">
          Assigned Consultant
        </Label>
        <Select onValueChange={setConsultantId} value={consultantId} required>
          <SelectTrigger className="md:col-span-3">
            <SelectValue placeholder="Assign to a consultant" />
          </SelectTrigger>
          <SelectContent>
            {consultants.map((consultant) => (
              <SelectItem key={consultant.id} value={consultant.id}>
                {consultant.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="col-span-full mt-6">
        Add Staff Member
      </Button>
    </form>
  )
}
