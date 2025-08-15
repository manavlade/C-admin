"use client"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Award, Calendar } from "lucide-react"

export default function ConsultantDetailPage() {
  const params = useParams()
  const consultantId = params.id as string

  // Dummy data for a single consultant (in a real app, you'd fetch this based on ID)
  const consultant = {
    id: consultantId,
    name: "Dr. Emily White",
    email: "emily.w@example.com",
    phone: "555-222-3333",
    consultantType: "doctor",
    city: "New York",
    specialty: "Oncologist",
    licenseNumber: "MD12345",
    status: "Active",
    joinedDate: "2020-03-15",
    bio: "Dr. Emily White is a board-certified oncologist with over 15 years of experience in cancer treatment and research. She specializes in breast cancer and has published numerous papers in leading medical journals.",
    education: [
      "MD - Harvard Medical School (2005)",
      "Residency - Johns Hopkins Hospital (2009)",
      "Fellowship - Memorial Sloan Kettering (2011)",
    ],
    certifications: [
      "Board Certified in Medical Oncology",
      "Board Certified in Internal Medicine",
      "Certified in Palliative Care",
    ],
  }

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
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Consultant Details: {consultant.name}</h1>
        <div className="flex gap-2">
          <Button variant="outline">Edit Consultant</Button>
          <Button>Manage Availability</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {consultant.name}
            <Badge variant={getTypeColor(consultant.consultantType)}>
              {consultant.consultantType.charAt(0).toUpperCase() + consultant.consultantType.slice(1)}
            </Badge>
          </CardTitle>
          <CardDescription>{consultant.specialty}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{consultant.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{consultant.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{consultant.city}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-muted-foreground" />
            <span>License: {consultant.licenseNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Joined: {consultant.joinedDate}</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-muted-foreground">Status:</span>
            <Badge variant={consultant.status === "Active" ? "default" : "outline"}>{consultant.status}</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Professional Background</CardTitle>
          <CardDescription>Education, certifications, and biography</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Biography</h3>
            <p className="text-muted-foreground">{consultant.bio}</p>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <ul className="space-y-1">
              {consultant.education.map((edu, index) => (
                <li key={index} className="text-muted-foreground">
                  • {edu}
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2">Certifications</h3>
            <ul className="space-y-1">
              {consultant.certifications.map((cert, index) => (
                <li key={index} className="text-muted-foreground">
                  • {cert}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
