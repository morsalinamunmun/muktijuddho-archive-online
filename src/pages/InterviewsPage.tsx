
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Headphones, Calendar, Search, PlayCircle } from "lucide-react";

// Sample interview data
const interviews = [
  {
    id: "maj-gen-osmani",
    name: "Major General Osmani",
    title: "Commander-in-Chief, Liberation Forces",
    date: "Recorded in 1978",
    category: "military",
    description: "Recounting the military strategy and challenges during the nine-month conflict.",
    duration: "45 minutes",
    image: "https://i.ibb.co.com/Bv8Mn65/images.jpg"
  },
  {
    id: "jharna-dhara",
    name: "Nurse Jharna Dhara Chowdhury",
    title: "Medical Volunteer",
    date: "Recorded in 1982",
    category: "healthcare",
    description: "Experiences providing medical care to freedom fighters and civilians during the war.",
    duration: "32 minutes",
    image: "https://i.ibb.co.com/GQxrggKb/jharna.jpg"
  },
  {
    id: "tajuddin-ahmad",
    name: "Tajuddin Ahmad",
    title: "First Prime Minister of Bangladesh",
    date: "Recorded in 1973",
    category: "political",
    description: "Insights into forming the government-in-exile and diplomatic efforts during the war.",
    duration: "58 minutes",
    image: "https://i.ibb.co.com/SGfZSYg/images.jpg"
  },
  {
    id: "kamal-hossain",
    name: "Dr. Kamal Hossain",
    title: "Member of the Constituent Assembly",
    date: "Recorded in 1992",
    category: "political",
    description: "Discussing the development of Bangladesh's constitution following independence.",
    duration: "41 minutes",
    image: "https://i.ibb.co.com/rKV7CLLB/images.jpg"
  },
  {
    id: "ferdousi-priyabhashini",
    name: "Ferdousi Priyabhashini",
    title: "War Survivor and Artist",
    date: "Recorded in 2005",
    category: "civilian",
    description: "A harrowing account of survival and experiences as a woman during the liberation war.",
    duration: "37 minutes",
    image: "https://i.ibb.co.com/8LBjs7bD/Ferdousi-Priyabhashini-1.jpg"
  },
  {
    id: "rashid-haider",
    name: "Rashid Haider",
    title: "Writer and Journalist",
    date: "Recorded in 1990",
    category: "media",
    description: "Recording the war through the eyes of a journalist, documenting atrocities and victories.",
    duration: "29 minutes",
    image: "https://i.ibb.co.com/5gDKbJvV/rashid-haider-131020-01.jpg"
  }
];

const InterviewsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInterviews, setFilteredInterviews] = useState(interviews);

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setFilteredInterviews(interviews);
    } else {
      const results = interviews.filter(interview => 
        interview.name.toLowerCase().includes(query) || 
        interview.title.toLowerCase().includes(query) ||
        interview.description.toLowerCase().includes(query) ||
        interview.category.toLowerCase().includes(query)
      );
      setFilteredInterviews(results);
    }
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-bangladesh-green text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Oral History Interviews</h1>
            <p className="text-lg mb-6">
              Listen to firsthand accounts from freedom fighters, political leaders, and civilians who experienced the Liberation War of Bangladesh.
            </p>
            
            {/* Search */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Search interviews..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 bg-white/10 border-white/20 placeholder:text-white/70 text-white"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-white/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Interviews Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="mb-8 flex flex-wrap">
              <TabsTrigger value="all">All Interviews</TabsTrigger>
              <TabsTrigger value="military">Military Personnel</TabsTrigger>
              <TabsTrigger value="political">Political Leaders</TabsTrigger>
              <TabsTrigger value="civilian">Civilians</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare Workers</TabsTrigger>
              <TabsTrigger value="media">Media & Journalists</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="animate-fade-in">
              <InterviewsList interviews={filteredInterviews} />
            </TabsContent>
            
            <TabsContent value="military" className="animate-fade-in">
              <InterviewsList interviews={filteredInterviews.filter(interview => interview.category === 'military')} />
            </TabsContent>
            
            <TabsContent value="political" className="animate-fade-in">
              <InterviewsList interviews={filteredInterviews.filter(interview => interview.category === 'political')} />
            </TabsContent>
            
            <TabsContent value="civilian" className="animate-fade-in">
              <InterviewsList interviews={filteredInterviews.filter(interview => interview.category === 'civilian')} />
            </TabsContent>
            
            <TabsContent value="healthcare" className="animate-fade-in">
              <InterviewsList interviews={filteredInterviews.filter(interview => interview.category === 'healthcare')} />
            </TabsContent>
            
            <TabsContent value="media" className="animate-fade-in">
              <InterviewsList interviews={filteredInterviews.filter(interview => interview.category === 'media')} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

// Interviews list component
const InterviewsList = ({ interviews }) => {
  if (interviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 italic">No interviews found matching your search criteria.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {interviews.map((interview) => (
        <Card key={interview.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-52">
              <img
                src={interview.image}
                alt={interview.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-bold">{interview.name}</h3>
                  <p className="text-sm text-white/80">{interview.title}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-bangladesh-green rounded-full p-2">
                <Headphones className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 text-gray-500 text-sm">
                <Calendar className="h-3 w-3" />
                <span>{interview.date}</span>
                <span className="mx-2">•</span>
                <span>{interview.duration}</span>
              </div>
              <p className="text-gray-600 mb-4">{interview.description}</p>
              <Button asChild className="w-full gap-2">
                <Link to={`/interviews/${interview.id}`}>
                  <PlayCircle className="h-4 w-4" />
                  Listen to Interview
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default InterviewsPage;
