import type React from "react"
import { CalendarDays, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import ClickableButton from "./clickable-button"

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  icon: React.ReactNode
}

export default function EventCard({ title, date, time, location, description, image, icon }: EventCardProps) {
  return (
    <Card className="overflow-hidden bg-white border border-gray-200 shadow-md rounded-2xl hover:border-la-coral/70 transition-all duration-300 h-full flex flex-col group transform transition-transform hover:scale-[1.02]">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
      <CardContent className="pt-6 flex-grow">
        <div className="flex items-center gap-2 text-la-sunset mb-2">
          <CalendarDays className="h-4 w-4" />
          <span className="text-sm">{date}</span>
          <Clock className="h-4 w-4 ml-2" />
          <span className="text-sm">{time}</span>
        </div>
        <div className="flex items-center gap-2 text-la-dusk mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 font-heading">{title}</h3>
        <p className="text-gray-600 mb-4 font-body">{description}</p>
      </CardContent>
      <CardFooter>
        <ClickableButton className="w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-opacity font-medium shadow-sm rounded-full py-2 text-xs px-8">
          Register Now
        </ClickableButton>
      </CardFooter>
    </Card>
  )
}
