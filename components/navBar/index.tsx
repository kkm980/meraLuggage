import { Heart, Luggage } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="border-0 shadow-sm shadow-primary">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1">
          <div className="hidden md:flex items-center space-x-6 ml-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              How it Works
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              About us
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              FAQs
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Contact us
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost">Sign In</Button>
          <Button>Book Now</Button>
        </div>
      </div>
    </nav>
  );
}