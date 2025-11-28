import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  const isDarkPage = location.pathname.includes("hotels") || location.pathname.includes("booking");

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkPage ? 'bg-secondary/95' : 'bg-background/95'} backdrop-blur-sm border-b border-border`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl text-primary-foreground font-bold">M</span>
            </div>
            <span className={`text-xl font-bold ${isDarkPage ? 'text-white' : 'text-foreground'}`}>
              MilestonePay
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isDarkPage ? 'text-white hover:text-accent' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/#how-it-works" 
              className={`font-medium transition-colors ${isDarkPage ? 'text-white hover:text-accent' : 'text-foreground hover:text-primary'}`}
            >
              How it works
            </Link>
            <Link 
              to="/find-hotels" 
              className={`font-medium transition-colors ${isDarkPage ? 'text-white hover:text-accent' : 'text-foreground hover:text-primary'}`}
            >
              Hotels
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {isDarkPage && (
              <Button variant="wallet" size="lg">
                <Wallet className="w-4 h-4" />
                Wallet
              </Button>
            )}
            {!isDarkPage && (
              <Button variant="hero" size="lg">
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
