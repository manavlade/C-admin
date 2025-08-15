import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Download } from "lucide-react"

interface Prescription {
  id: string
  patientName: string
  consultantName: string
  datePrescribed: string
  prescriptionName: string
  fileUrl?: string
}

interface PrescriptionsTableProps {
  prescriptions: Prescription[]
}

export function PrescriptionsTable({ prescriptions }: PrescriptionsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Patient</TableHead>
          <TableHead>Doctor</TableHead>
          <TableHead>Date Prescribed</TableHead>
          <TableHead>Prescription Name</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {prescriptions.map((prescription) => (
          <TableRow key={prescription.id}>
            <TableCell className="font-medium">{prescription.patientName}</TableCell>
            <TableCell>{prescription.consultantName}</TableCell>
            <TableCell>{prescription.datePrescribed}</TableCell>
            <TableCell>{prescription.prescriptionName}</TableCell>
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
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  {prescription.fileUrl && (
                    <DropdownMenuItem asChild>
                      <a
                        href={prescription.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Download className="mr-2 h-4 w-4" /> Download
                      </a>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Edit Prescription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
