"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

export function ConsultantForm() {
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [specialty, setSpecialty] = useState<string>("")
  const [licenseNumber, setLicenseNumber] = useState<string>("")
  const [consultantType, setConsultantType] = useState<string>("doctor")
  const [city, setCity] = useState<string>("")

  // List of cities (you can expand this based on your requirements)
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "Fort Worth",
    "Columbus",
    "Charlotte",
    "San Francisco",
    "Indianapolis",
    "Seattle",
    "Denver",
    "Washington DC",
    "Boston",
    "Nashville",
    "Baltimore",
    "Louisville",
    "Portland",
    "Oklahoma City",
    "Milwaukee",
    "Las Vegas",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Kansas City",
    "Mesa",
    "Atlanta",
    "Colorado Springs",
    "Raleigh",
    "Omaha",
    "Miami",
    "Oakland",
    "Minneapolis",
    "Tulsa",
    "Cleveland",
    "Wichita",
    "Arlington",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({
      fullName,
      email,
      phone,
      specialty,
      licenseNumber,
      consultantType,
      city,
    })
    toast({
      title: "Consultant Added!",
      description: `${fullName} has been successfully registered as a consultant.`,
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
        <Label htmlFor="consultantType" className="md:text-right">
          Consultant Type
        </Label>
        <Select onValueChange={setConsultantType} value={consultantType}>
          <SelectTrigger className="md:col-span-3">
            <SelectValue placeholder="Select consultant type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="doctor">Doctor</SelectItem>
            <SelectItem value="lab">Lab</SelectItem>
            <SelectItem value="nutritionist">Nutritionist</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="city" className="md:text-right">
          City
        </Label>
        <Select onValueChange={setCity} value={city}>
          <SelectTrigger className="md:col-span-3">
            <SelectValue placeholder="Select city" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((cityName) => (
              <SelectItem key={cityName} value={cityName}>
                {cityName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="specialty" className="md:text-right">
          Specialty
        </Label>
        <Input
          id="specialty"
          placeholder="e.g., Oncologist, Radiologist, Clinical Nutrition"
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
          placeholder="e.g., MD12345, LAB789, RD456"
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>

      <Button type="submit" className="col-span-full mt-6">
        Add Consultant
      </Button>
    </form>
  )
}
