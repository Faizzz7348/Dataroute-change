"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GalleryPage() {
  const rows = [
    { 
      id: "row-1", 
      title: "VM Collection 1",
      images: [
        { id: "img-1", url: "/placeholder.svg", title: "VM Image 1", subtitle: "Description 1" },
        { id: "img-2", url: "/placeholder.svg", title: "VM Image 2", subtitle: "Description 2" },
        { id: "img-3", url: "/placeholder.svg", title: "VM Image 3", subtitle: "Description 3" },
      ]
    },
    { 
      id: "row-2", 
      title: "VM Collection 2",
      images: [
        { id: "img-4", url: "/placeholder.svg", title: "VM Image 4", subtitle: "Description 4" },
        { id: "img-5", url: "/placeholder.svg", title: "VM Image 5", subtitle: "Description 5" },
      ]
    },
  ]

  return (
    <div className="flex-1 p-4">
      {rows.map((row) => (
        <div key={row.id} className="py-8 border-b border-border">
          <div className="flex items-center justify-between mb-6 px-4">
            <h2 className="text-xl font-semibold">{row.title}</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Image
              </Button>
            </div>
          </div>
          
          {/* Horizontal scroll container */}
          <div className="relative px-4">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {row.images.map((image) => (
                <div 
                  key={image.id} 
                  className="flex-shrink-0 w-64 snap-start group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                    <Image 
                      src={image.url} 
                      alt={image.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform group-hover:scale-105"
                      priority={false}
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-medium text-sm">{image.title}</h3>
                    {image.subtitle && (
                      <p className="text-xs text-muted-foreground">{image.subtitle}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      {/* Add Row Button */}
      <div className="px-4 py-8">
        <Button variant="outline" className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Add Row
        </Button>
      </div>
    </div>
  )
}
