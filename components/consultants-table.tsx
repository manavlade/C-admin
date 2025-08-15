"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

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

interface ConsultantsTableProps {
  consultants: Consultant[]
  onManageAvailability: (consultant: Consultant) => void
}

export function ConsultantsTable({ consultants, onManageAvailability }: ConsultantsTableProps) {
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

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Specialty</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {consultants.map((consultant) => (
          <TableRow key={consultant.id}>
            <TableCell className="font-medium">{consultant.name}</TableCell>
            <TableCell>
              <Badge variant={getTypeColor(consultant.consultantType)}>
                {consultant.consultantType.charAt(0).toUpperCase() + consultant.consultantType.slice(1)}
              </Badge>
            </TableCell>
            <TableCell>{consultant.city}</TableCell>
            <TableCell>{consultant.email}</TableCell>
            <TableCell>{consultant.phone}</TableCell>
            <TableCell>{consultant.specialty}</TableCell>
            <TableCell>
              <Badge variant={consultant.status === "Active" ? "default" : "outline"}>{consultant.status}</Badge>
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href={`/dashboard/consultants/${consultant.id}`}>View Consultant</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Edit Consultant</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => onManageAvailability(consultant)}>
                    Manage Availability
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
