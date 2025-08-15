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

interface NutritionPlan {
  id: string
  patientName: string
  consultantName: string
  dateCreated: string
  planName: string
  fileUrl?: string
}

interface NutritionPlansTableProps {
  nutritionPlans: NutritionPlan[]
}

export function NutritionPlansTable({ nutritionPlans }: NutritionPlansTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Patient</TableHead>
          <TableHead>Nutritionist</TableHead>
          <TableHead>Date Created</TableHead>
          <TableHead>Plan Name</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {nutritionPlans.map((plan) => (
          <TableRow key={plan.id}>
            <TableCell className="font-medium">{plan.patientName}</TableCell>
            <TableCell>{plan.consultantName}</TableCell>
            <TableCell>{plan.dateCreated}</TableCell>
            <TableCell>{plan.planName}</TableCell>
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
                  <DropdownMenuItem>View Plan</DropdownMenuItem>
                  {plan.fileUrl && (
                    <DropdownMenuItem asChild>
                      <a href={plan.fileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </a>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Edit Plan</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
