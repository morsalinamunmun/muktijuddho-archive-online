
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-bangladesh-light">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-serif font-bold mb-4 text-bangladesh-green">404</h1>
        <p className="text-xl mb-6">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          We're sorry, but the page you are looking for does not exist in our archive. It may have been moved or deleted.
        </p>
        <Button asChild className="bg-bangladesh-green hover:bg-bangladesh-green/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
