
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Image, Calendar, Search, Download, ZoomIn } from "lucide-react";

// Sample photograph data
const photographs = [
  {
    id: "mass-rally",
    title: "Mass Rally in Dhaka",
    date: "March 7, 1971",
    category: "events",
    description: "Sheikh Mujibur Rahman addressing a crowd of millions at Race Course Field in Dhaka.",
    photographer: "Unknown",
    location: "Dhaka, East Pakistan (now Bangladesh)",
    image: "https://source.unsplash.com/featured/?rally,crowd"
  },
  {
    id: "refugee-camps",
    title: "Refugee Camps in India",
    date: "August 1971",
    category: "humanitarian",
    description: "Bangladeshi refugees seeking shelter in camps along the Indian border during the war.",
    photographer: "International Red Cross",
    location: "West Bengal, India",
    image: "https://source.unsplash.com/featured/?refugee,camp"
  },
  {
    id: "freedom-fighters",
    title: "Freedom Fighters in Training",
    date: "May 1971",
    category: "military",
    description: "Young Bangladeshi freedom fighters receiving military training in preparation for combat.",
    photographer: "War Correspondent",
    location: "Training Camp, Undisclosed",
    image: "https://source.unsplash.com/featured/?military,training"
  },
  {
    id: "victory-celebration",
    title: "Victory Celebration",
    date: "December 16, 1971",
    category: "events",
    description: "People celebrating in the streets of Dhaka after the Pakistani surrender and Bangladesh's victory.",
    photographer: "Rashid Talukder",
    location: "Dhaka, Bangladesh",
    image: "https://source.unsplash.com/featured/?celebration,victory"
  },
  {
    id: "war-destruction",
    title: "Aftermath of Bombing",
    date: "September 1971",
    category: "humanitarian",
    description: "Buildings destroyed by Pakistani air force bombings in a village outside Dhaka.",
    photographer: "International Press",
    location: "Rural Bangladesh",
    image: "https://source.unsplash.com/featured/?destruction,war"
  },
  {
    id: "independence-day",
    title: "First Independence Day",
    date: "December 17, 1971",
    category: "events",
    description: "The first raising of the Bangladesh flag in officially independent Bangladesh.",
    photographer: "Government Photographer",
    location: "Dhaka, Bangladesh",
    image: "https://source.unsplash.com/featured/?flag,independence"
  },
  {
    id: "pakistani-surrender",
    title: "Pakistani Surrender",
    date: "December 16, 1971",
    category: "military",
    description: "The historic moment when Pakistani forces surrendered to the joint forces of Bangladesh and India.",
    photographer: "Military Photographer",
    location: "Dhaka, Bangladesh",
    image: "https://source.unsplash.com/featured/?surrender,military"
  },
  {
    id: "displaced-children",
    title: "Displaced Children",
    date: "October 1971",
    category: "humanitarian",
    description: "Children separated from their families during the conflict receiving aid from humanitarian workers.",
    photographer: "UNICEF",
    location: "Refugee Camp, India-Bangladesh Border",
    image: "https://source.unsplash.com/featured/?children,aid"
  }
];

const PhotographsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPhotographs, setFilteredPhotographs] = useState(photographs);

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setFilteredPhotographs(photographs);
    } else {
      const results = photographs.filter(photo => 
        photo.title.toLowerCase().includes(query) || 
        photo.description.toLowerCase().includes(query) ||
        photo.location.toLowerCase().includes(query) ||
        photo.category.toLowerCase().includes(query)
      );
      setFilteredPhotographs(results);
    }
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-bangladesh-green text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Historical Photographs</h1>
            <p className="text-lg mb-6">
              Explore our extensive collection of photographs documenting key moments, places, and people from the Liberation War of Bangladesh.
            </p>
            
            {/* Search */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Search photographs..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 bg-white/10 border-white/20 placeholder:text-white/70 text-white"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-white/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Photographs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="mb-8 flex flex-wrap">
              <TabsTrigger value="all">All Photographs</TabsTrigger>
              <TabsTrigger value="events">Key Events</TabsTrigger>
              <TabsTrigger value="military">Military & Combat</TabsTrigger>
              <TabsTrigger value="humanitarian">Humanitarian Crisis</TabsTrigger>
              <TabsTrigger value="locations">Important Locations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="animate-fade-in">
              <PhotoGrid photographs={filteredPhotographs} />
            </TabsContent>
            
            <TabsContent value="events" className="animate-fade-in">
              <PhotoGrid photographs={filteredPhotographs.filter(photo => photo.category === 'events')} />
            </TabsContent>
            
            <TabsContent value="military" className="animate-fade-in">
              <PhotoGrid photographs={filteredPhotographs.filter(photo => photo.category === 'military')} />
            </TabsContent>
            
            <TabsContent value="humanitarian" className="animate-fade-in">
              <PhotoGrid photographs={filteredPhotographs.filter(photo => photo.category === 'humanitarian')} />
            </TabsContent>
            
            <TabsContent value="locations" className="animate-fade-in">
              <PhotoGrid photographs={filteredPhotographs.filter(photo => photo.category === 'locations')} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

// Photo grid component
const PhotoGrid = ({ photographs }) => {
  if (photographs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 italic">No photographs found matching your search criteria.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {photographs.map((photo) => (
        <Card key={photo.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative zoom-image-container">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-64 object-cover zoom-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white w-full">
                  <h3 className="text-lg font-bold">{photo.title}</h3>
                  <p className="text-sm text-white/80 mb-2">{photo.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/70">{photo.date}</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="text-white h-8 w-8 rounded-full bg-white/20 hover:bg-white/30">
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-white h-8 w-8 rounded-full bg-white/20 hover:bg-white/30">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <Link to={`/photographs/${photo.id}`}>
                <h3 className="text-lg font-serif font-bold mb-1 hover:text-bangladesh-green transition-colors">{photo.title}</h3>
              </Link>
              <div className="flex items-center gap-2 mb-2 text-gray-500 text-sm">
                <Calendar className="h-3 w-3" />
                <span>{photo.date}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{photo.description}</p>
              <div className="mt-3 text-xs text-gray-500">
                Photographer: {photo.photographer}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PhotographsPage;
