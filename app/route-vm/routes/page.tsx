"use client"

import { useState } from "react"
import { Plus, MapPin, Edit, Trash2, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type SubRak = {
  id: string
  name: string
  slots: number
}

type Rak = {
  id: string
  name: string
  slots: number
  subRaks?: SubRak[]
}

type Route = {
  id: number
  name: string
  locations: number
  area: string
  status: string
  color: string
  raks: Rak[]
}

export default function RoutesPage() {
  const [expandedRoutes, setExpandedRoutes] = useState<number[]>([])
  const [expandedRaks, setExpandedRaks] = useState<string[]>([])

  const routes: Route[] = [
    { 
      id: 1,
      name: "KL 1", 
      locations: 8,
      area: "Kuala Lumpur",
      status: "active",
      color: "bg-blue-500",
      raks: [
        {
          id: "kl1-rak-a",
          name: "Rak A",
          slots: 20,
          subRaks: [
            { id: "kl1-rak-a1", name: "Rak A1", slots: 10 },
            { id: "kl1-rak-a2", name: "Rak A2", slots: 10 },
          ]
        },
        {
          id: "kl1-rak-b",
          name: "Rak B",
          slots: 15,
          subRaks: [
            { id: "kl1-rak-b1", name: "Rak B1", slots: 8 },
            { id: "kl1-rak-b2", name: "Rak B2", slots: 7 },
          ]
        },
        {
          id: "kl1-rak-c",
          name: "Rak C",
          slots: 12,
        },
      ]
    },
    { 
      id: 2,
      name: "KL 2", 
      locations: 6,
      area: "Kuala Lumpur",
      status: "active",
      color: "bg-green-500",
      raks: [
        {
          id: "kl2-rak-a",
          name: "Rak A",
          slots: 18,
          subRaks: [
            { id: "kl2-rak-a1", name: "Rak A1", slots: 9 },
            { id: "kl2-rak-a2", name: "Rak A2", slots: 9 },
          ]
        },
        {
          id: "kl2-rak-b",
          name: "Rak B",
          slots: 10,
        },
      ]
    },
    { 
      id: 3,
      name: "Selangor 1", 
      locations: 7,
      area: "Selangor",
      status: "active",
      color: "bg-purple-500",
      raks: [
        {
          id: "sel1-rak-a",
          name: "Rak A",
          slots: 25,
          subRaks: [
            { id: "sel1-rak-a1", name: "Rak A1", slots: 12 },
            { id: "sel1-rak-a2", name: "Rak A2", slots: 13 },
          ]
        },
      ]
    },
  ]

  const toggleRoute = (routeId: number) => {
    setExpandedRoutes(prev => 
      prev.includes(routeId) 
        ? prev.filter(id => id !== routeId)
        : [...prev, routeId]
    )
  }

  const toggleRak = (rakId: string) => {
    setExpandedRaks(prev => 
      prev.includes(rakId) 
        ? prev.filter(id => id !== rakId)
        : [...prev, rakId]
    )
  }

  return (
    <div className="flex-1 p-4">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">All Routes</h2>
          <p className="text-sm text-muted-foreground">Manage your VM delivery routes with nested rak structure</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Route
        </Button>
      </div>

      <div className="space-y-4">
        {routes.map((route) => (
          <div 
            key={route.id}
            className="rounded-lg border bg-card overflow-hidden"
          >
            {/* Route Header */}
            <div 
              className="p-4 flex items-center justify-between cursor-pointer hover:bg-muted/50"
              onClick={() => toggleRoute(route.id)}
            >
              <div className="flex items-center gap-3">
                {expandedRoutes.includes(route.id) ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
                <div className={`w-3 h-3 rounded-full ${route.color}`} />
                <div>
                  <h3 className="font-semibold text-lg">{route.name}</h3>
                  <p className="text-sm text-muted-foreground">{route.area}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{route.locations} locations</span>
                </div>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  route.status === 'active' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {route.status}
                </span>
              </div>
            </div>

            {/* Nested Raks */}
            {expandedRoutes.includes(route.id) && (
              <div className="border-t bg-muted/20">
                {route.raks.map((rak) => (
                  <div key={rak.id} className="border-b last:border-b-0">
                    {/* Rak Header */}
                    <div 
                      className="p-4 pl-12 flex items-center justify-between cursor-pointer hover:bg-muted/50"
                      onClick={() => rak.subRaks && toggleRak(rak.id)}
                    >
                      <div className="flex items-center gap-3">
                        {rak.subRaks && (
                          expandedRaks.includes(rak.id) ? (
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          )
                        )}
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div>
                          <h4 className="font-medium">{rak.name}</h4>
                          <p className="text-xs text-muted-foreground">{rak.slots} slots</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive" onClick={(e) => e.stopPropagation()}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Sub Raks */}
                    {rak.subRaks && expandedRaks.includes(rak.id) && (
                      <div className="bg-muted/30">
                        {rak.subRaks.map((subRak) => (
                          <div 
                            key={subRak.id}
                            className="p-3 pl-20 flex items-center justify-between border-t hover:bg-muted/50"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                              <div>
                                <h5 className="text-sm font-medium">{subRak.name}</h5>
                                <p className="text-xs text-muted-foreground">{subRak.slots} slots</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-destructive">
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Add Route Card */}
        <div className="p-6 rounded-lg border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 bg-muted/50 flex items-center justify-center cursor-pointer transition-colors min-h-[100px]">
          <div className="text-center">
            <Plus className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground font-medium">Add New Route</p>
          </div>
        </div>
      </div>
    </div>
  )
}
