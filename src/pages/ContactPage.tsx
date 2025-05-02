
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    files: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        files: e.target.files
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        files: null
      });
      
      // Reset file input
      const fileInput = document.getElementById("files") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
    }, 1500);
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-bangladesh-green text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Get in touch with us to ask questions, provide feedback, or contribute materials to the Liberation War Archive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-bangladesh-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6 text-bangladesh-green">Contact Information</h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Mailing Address</h3>
                    <p className="text-gray-700">
                      Liberation War Archive<br />
                      123 Freedom Road<br />
                      Dhaka 1000<br />
                      Bangladesh
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Contact Details</h3>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Email:</span> info@liberationwararchive.org
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Phone:</span> +880 123 456 7890
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Fax:</span> +880 123 456 7891
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Hours of Operation</h3>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Sunday to Thursday:</span> 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Friday & Saturday:</span> Closed
                    </p>
                    <p className="text-gray-700 mb-4">
                      <span className="font-medium">Public Holidays:</span> Closed
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      Note: Research appointments are recommended for accessing archive materials.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-serif font-bold mb-6 text-bangladesh-green">Send Us a Message</h2>
                
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Enter message subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Enter your message or inquiry"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2 mb-8">
                        <Label htmlFor="files">Upload Files (Optional)</Label>
                        <div className="border border-gray-300 rounded-md p-4">
                          <Input
                            id="files"
                            name="files"
                            type="file"
                            multiple
                            className="cursor-pointer"
                            onChange={handleFileChange}
                          />
                          <p className="text-xs text-gray-500 mt-2">
                            You can upload documents, photographs, or other materials related to the Liberation War. Maximum file size: 10MB per file.
                          </p>
                        </div>
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full md:w-auto bg-bangladesh-green hover:bg-bangladesh-green/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Contribute to the Archive</h2>
            <p className="text-lg mb-8">
              The Liberation War Archive welcomes contributions from individuals, families, and organizations that possess materials related to the 1971 Liberation War of Bangladesh.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="font-bold mb-4">Documents</h3>
                  <p className="text-gray-600 mb-2">
                    Letters, diaries, maps, official papers, and other written records from the Liberation War period.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="font-bold mb-4">Photographs</h3>
                  <p className="text-gray-600 mb-2">
                    Personal photographs documenting events, people, and places during the Liberation War.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="font-bold mb-4">Oral Histories</h3>
                  <p className="text-gray-600 mb-2">
                    Share your personal experiences or those of family members who lived through the Liberation War.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-gray-600 mb-6">
              If you would like to donate materials to the archive, please contact us using the form above or email us directly at <span className="font-medium">contributions@liberationwararchive.org</span>.
            </p>
            
            <p className="text-gray-600">
              Our team of archivists will carefully preserve and digitize your materials to ensure they are accessible to future generations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
