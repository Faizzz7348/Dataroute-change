"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CollectionsPage() {
  const collections = [
    { 
      id: "col-1", 
      title: "VM Models 2024",
      count: 12,
      thumbnail: "/placeholder.svg"
    },
    { 
      id: "col-2", 
      title: "Installation Photos",
      count: 8,
      thumbnail: "/placeholder.svg"
    },
    { 
      id: "col-3", 
      title: "Maintenance Records",
      count: 15,
      thumbnail: "/placeholder.svg"
    },
    { 
      id: "col-4", 
      title: "Site Surveys",
      count: 6,
      thumbnail: "/placeholder.svg"
    },
  ]

  return (
    <div className="flex-1 p-4">
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Collections</h2>
            <p className="text-sm text-muted-foreground">Organize your VM images into collections</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Collection
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
        {collections.map((collection) => (
          <div 
            key={collection.id}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted border">
              <Image 
                src={collection.thumbnail} 
                alt={collection.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform group-hover:scale-105"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold text-lg">{collection.title}</h3>
                <p className="text-sm text-white/80">{collection.count} images</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Add Collection Card */}
        <div className="cursor-pointer">
          <div className="relative aspect-video rounded-lg border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 bg-muted/50 flex items-center justify-center transition-colors">
            <div className="text-center">
              <Plus className="w-10 h-10 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground font-medium">Add Collection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
