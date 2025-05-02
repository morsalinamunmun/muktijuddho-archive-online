
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Headphones, Image } from "lucide-react";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-bangladesh-dark text-white">
        <div 
          className="absolute inset-0 bg-black opacity-50"
          style={{ 
            backgroundImage: "url('https://source.unsplash.com/featured/?bangladesh,liberation,war,history')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        ></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Preserving the Legacy of Bangladesh's Liberation War
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              An extensive digital archive of documents, interviews, and photographs documenting Bangladesh's struggle for independence in 1971.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-bangladesh-green hover:bg-bangladesh-green/90">
                <Link to="/documents">Explore Archive</Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-bangladesh-dark">
                <Link to="/contact">Contribute</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-bangladesh-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-bangladesh-green">About The Archive</h2>
            <p className="text-lg mb-8">
              The Liberation War Archive is dedicated to preserving and sharing the history of Bangladesh's 1971 struggle for independence. Through meticulous collection and digitization of historical documents, oral histories, and photographs, we aim to ensure that the sacrifices and stories of those who fought for freedom are never forgotten.
            </p>
            <p className="text-lg">
              Our mission is to make these important historical materials accessible to researchers, students, and the public, fostering a deeper understanding of this pivotal moment in Bangladesh's history.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">Explore Our Archive</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-bangladesh-green/20 hover:border-bangladesh-green transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Book className="h-16 w-16 text-bangladesh-green mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">Historical Documents</h3>
                <p className="mb-4 text-gray-600">
                  Access treaties, declarations, correspondence, and other official documents from the Liberation War era.
                </p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link to="/documents">View Documents</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-bangladesh-green/20 hover:border-bangladesh-green transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Headphones className="h-16 w-16 text-bangladesh-green mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">Oral Histories</h3>
                <p className="mb-4 text-gray-600">
                  Listen to firsthand accounts from freedom fighters, witnesses, and those who experienced the war.
                </p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link to="/interviews">Listen to Interviews</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-bangladesh-green/20 hover:border-bangladesh-green transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image className="h-16 w-16 text-bangladesh-green mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">Photograph Collection</h3>
                <p className="mb-4 text-gray-600">
                  Browse our extensive collection of images capturing key moments, places, and people from the Liberation War.
                </p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link to="/photographs">View Gallery</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="bg-bangladesh-cream py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">Featured Content</h2>
          
          <Tabs defaultValue="documents" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="interviews">Interviews</TabsTrigger>
              <TabsTrigger value="photographs">Photographs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="documents" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif font-bold mb-2">Declaration of Independence</h3>
                    <p className="text-sm text-gray-500 mb-3">March 26, 1971</p>
                    <p className="mb-4 text-gray-600">
                      The historic radio announcement of Bangladesh's independence by Sheikh Mujibur Rahman.
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto font-medium text-bangladesh-green">
                      <Link to="/documents/declaration-independence">View Document</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif font-bold mb-2">Instrument of Surrender</h3>
                    <p className="text-sm text-gray-500 mb-3">December 16, 1971</p>
                    <p className="mb-4 text-gray-600">
                      The document marking the surrender of Pakistani forces and the end of the Liberation War.
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto font-medium text-bangladesh-green">
                      <Link to="/documents/instrument-surrender">View Document</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="interviews" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif font-bold mb-2">Major General Osmani</h3>
                    <p className="text-sm text-gray-500 mb-3">Commander-in-Chief, Liberation Forces</p>
                    <p className="mb-4 text-gray-600">
                      Recounting the military strategy and challenges during the nine-month conflict.
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto font-medium text-bangladesh-green">
                      <Link to="/interviews/maj-gen-osmani">Listen to Interview</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif font-bold mb-2">Nurse Jharna Dhara Chowdhury</h3>
                    <p className="text-sm text-gray-500 mb-3">Medical Volunteer</p>
                    <p className="mb-4 text-gray-600">
                      Experiences providing medical care to freedom fighters and civilians during the war.
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto font-medium text-bangladesh-green">
                      <Link to="/interviews/jharna-dhara">Listen to Interview</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="photographs" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-0 overflow-hidden">
                    <div className="zoom-image-container">
                      <img 
                        src="https://source.unsplash.com/featured/?bangladesh,liberation,crowd" 
                        alt="Mass rally in Dhaka" 
                        className="w-full h-52 object-cover zoom-image"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-serif font-bold mb-2">Mass Rally in Dhaka</h3>
                      <p className="text-sm text-gray-500 mb-3">March 7, 1971</p>
                      <Button asChild variant="link" className="p-0 h-auto font-medium text-bangladesh-green">
                        <Link to="/photographs/mass-rally">View Full Size</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-0 overflow-hidden">
                    <div className="zoom-image-container">
                      <img 
                        src="https://source.unsplash.com/featured/?bangladesh,refugees" 
                        alt="Refugee Camp" 
                        className="w-full h-52 object-cover zoom-image"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-serif font-bold mb-2">Refugee Camps in India</h3>
                      <p className="text-sm text-gray-500 mb-3">August 1971</p>
                      <Button asChild variant="link" className="p-0 h-auto font-medium text-bangladesh-green">
                        <Link to="/photographs/refugee-camps">View Full Size</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-bangladesh-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Contribute to the Archive</h2>
            <p className="text-lg mb-8">
              Do you have documents, photographs, or stories related to the Liberation War? Help us preserve Bangladesh's history by contributing to our archive.
            </p>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-bangladesh-green">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
