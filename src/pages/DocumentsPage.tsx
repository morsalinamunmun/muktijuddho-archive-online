
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Book, Calendar, Search } from "lucide-react";

// Sample document data
const documents = [
  {
    id: "declaration-independence",
    title: "Declaration of Independence",
    date: "March 26, 1971",
    category: "declarations",
    description: "The historic radio announcement of Bangladesh's independence by Sheikh Mujibur Rahman.",
    source: "Bangladesh Radio",
    image: "https://source.unsplash.com/featured/?document,historic"
  },
  {
    id: "instrument-surrender",
    title: "Instrument of Surrender",
    date: "December 16, 1971",
    category: "treaties",
    description: "The document marking the surrender of Pakistani forces and the end of the Liberation War.",
    source: "Military Archives",
    image: "https://source.unsplash.com/featured/?document,surrender"
  },
  {
    id: "six-point-movement",
    title: "Six-Point Movement Document",
    date: "February 1966",
    category: "political",
    description: "The six-point program that became the foundation for Bangladesh's independence movement.",
    source: "Political Archives",
    image: "https://source.unsplash.com/featured/?document,political"
  },
  {
    id: "7th-march-speech",
    title: "7th March Speech Transcript",
    date: "March 7, 1971",
    category: "speeches",
    description: "Transcript of Sheikh Mujibur Rahman's historic speech at Race Course Field, Dhaka.",
    source: "Bangladesh Archives",
    image: "https://source.unsplash.com/featured/?document,speech"
  },
  {
    id: "united-nations-genocide",
    title: "UN Report on Genocide",
    date: "October 1971",
    category: "reports",
    description: "United Nations documentation regarding the humanitarian crisis during the Liberation War.",
    source: "United Nations Archives",
    image: "https://source.unsplash.com/featured/?document,report"
  },
  {
    id: "mujibnagar-govt",
    title: "Formation of Mujibnagar Government",
    date: "April 10, 1971",
    category: "political",
    description: "Documents detailing the formation of the first government of Bangladesh during the war.",
    source: "Government Archives",
    image: "https://source.unsplash.com/featured/?document,government"
  }
];

const DocumentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDocuments, setFilteredDocuments] = useState(documents);

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setFilteredDocuments(documents);
    } else {
      const results = documents.filter(doc => 
        doc.title.toLowerCase().includes(query) || 
        doc.description.toLowerCase().includes(query) ||
        doc.date.toLowerCase().includes(query) ||
        doc.category.toLowerCase().includes(query)
      );
      setFilteredDocuments(results);
    }
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-bangladesh-green text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Historical Documents</h1>
            <p className="text-lg mb-6">
              Explore our extensive collection of treaties, declarations, speeches, and correspondence related to the Liberation War of Bangladesh.
            </p>
            
            {/* Search */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 bg-white/10 border-white/20 placeholder:text-white/70 text-white"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-white/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="mb-8 flex flex-wrap">
              <TabsTrigger value="all">All Documents</TabsTrigger>
              <TabsTrigger value="treaties">Treaties & Agreements</TabsTrigger>
              <TabsTrigger value="declarations">Declarations</TabsTrigger>
              <TabsTrigger value="speeches">Speeches</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="political">Political Documents</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="animate-fade-in">
              <DocumentsList documents={filteredDocuments} />
            </TabsContent>
            
            <TabsContent value="treaties" className="animate-fade-in">
              <DocumentsList documents={filteredDocuments.filter(doc => doc.category === 'treaties')} />
            </TabsContent>
            
            <TabsContent value="declarations" className="animate-fade-in">
              <DocumentsList documents={filteredDocuments.filter(doc => doc.category === 'declarations')} />
            </TabsContent>
            
            <TabsContent value="speeches" className="animate-fade-in">
              <DocumentsList documents={filteredDocuments.filter(doc => doc.category === 'speeches')} />
            </TabsContent>
            
            <TabsContent value="reports" className="animate-fade-in">
              <DocumentsList documents={filteredDocuments.filter(doc => doc.category === 'reports')} />
            </TabsContent>
            
            <TabsContent value="political" className="animate-fade-in">
              <DocumentsList documents={filteredDocuments.filter(doc => doc.category === 'political')} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

// Documents list component
const DocumentsList = ({ documents }) => {
  if (documents.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 italic">No documents found matching your search criteria.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {documents.map((document) => (
        <Card key={document.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col sm:flex-row h-full">
              <div className="w-full sm:w-1/3">
                <img
                  src={document.image}
                  alt={document.title}
                  className="h-40 sm:h-full w-full object-cover"
                />
              </div>
              <div className="w-full sm:w-2/3 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Book className="h-4 w-4 text-bangladesh-green" />
                  <span className="text-xs uppercase font-semibold text-bangladesh-green">
                    {document.category}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold mb-1">{document.title}</h3>
                <div className="flex items-center gap-2 mb-3 text-gray-500 text-sm">
                  <Calendar className="h-3 w-3" />
                  <span>{document.date}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{document.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs text-gray-500">Source: {document.source}</span>
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/documents/${document.id}`}>View Document</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DocumentsPage;
