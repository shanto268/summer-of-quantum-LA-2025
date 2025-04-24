import type React from "react"
import { CalendarDays, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
    <Card className="overflow-hidden bg-black/50 border-orange-900/50 hover:border-pink-500/70 transition-all duration-300 h-full flex flex-col group">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-black">
          {icon}
        </div>
      </div>
      <CardContent className="pt-6 flex-grow">
        <div className="flex items-center gap-2 text-orange-400 mb-2">
          <CalendarDays className="h-4 w-4" />
          <span className="text-sm">{date}</span>
          <Clock className="h-4 w-4 ml-2" />
          <span className="text-sm">{time}</span>
        </div>
        <div className="flex items-center gap-2 text-pink-400 mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/70 mb-4 font-body">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-black hover:opacity-90 transition-opacity font-medium">
          Register Now
        </Button>
      </CardFooter>
    </Card>
  )
}
